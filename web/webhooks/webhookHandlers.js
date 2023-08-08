import crypto from "node:crypto";
import analyticsModel from "../backend/models/analytics.js";
import { ObjectId } from "mongodb";
import bundleModel from "../backend/models/bundleSchema.js";
import shopInfoModel from "../backend/models/shopInfoSchema.js";
import customizationModel from "../backend/models/customizationSchema.js";
import pageDataModel from "../backend/models/pageData.js";
import settingModel from "../backend/models/settings.js";
import translationModel from "../backend/models/translationSchema.js";


export async function verifyWebhooks(req, res) {
  try {
    const topic = req.headers["x-shopify-topic"];
    let shop = req.headers["x-shopify-shop-domain"];
    let hmac_header = req.headers["x-shopify-hmac-sha256"];
    const secretKey = process.env.SHOPIFY_API_SECRET;
    switch (topic) {
      case "products/update":
        try {
          const calculated_hmac = crypto
            .createHmac("sha256", secretKey)
            .update(req.body)
            .digest("base64");
          if (calculated_hmac == hmac_header) {

            const responseWebhook = JSON.parse(req.body);
            let id = "gid://shopify/Product/" + responseWebhook.id;
            let productArr = responseWebhook.variants;

            const filter = {
              shop: shop,
              type: { $in: ["productBundle", "volumeBundle"] },
              "bundleDetail.products.id": id,
            };

            const newData = {
              "bundleDetail.products.$.title": responseWebhook.title,
              "bundleDetail.products.$.descriptionHtml":
                responseWebhook.body_html,
              "bundleDetail.products.$.vendor": responseWebhook.vendor,
              "bundleDetail.products.$.handle": responseWebhook.handle,
              "bundleDetail.products.$.images.0.originalSrc":
                responseWebhook.images[0].src,
              "bundleDetail.products.$.status": responseWebhook.status,
            };

            const bulkOps = [];

            // Update the main data
            const dataUpdateOp = {
              updateOne: {
                filter: filter,
                update: { $set: newData },
              },
            };
            bulkOps.push(dataUpdateOp);

            productArr.forEach((apiVariant) => {
              const variantId = "gid://shopify/ProductVariant/" + apiVariant.id; // Replace 'variantId' with the field name containing the variant ID in the API response.
              let variantImg = null;
              responseWebhook?.images?.map((img) => {
                if (img.id == apiVariant.image_id) {
                  variantImg = img.src;
                }
              });

              const variantData = {
                id: variantId,
                title: apiVariant.title,
                price: apiVariant.price,
                inventoryQuantity: apiVariant.inventory_quantity,
                image: {
                  originalSrc: variantImg,
                },
                // Add more variant fields and their new values here...
              };

              const variantUpdateOp = {
                updateMany: {
                  filter: {
                    ...filter,
                    "bundleDetail.products.variants.id": variantId,
                  },
                  update: {
                    $set: {
                      "bundleDetail.products.$[product].variants.$[variant]":
                        variantData,
                    },
                  },
                  arrayFilters: [
                    { "product.id": id },
                    { "variant.id": variantId },
                  ],
                },
              };
              bulkOps.push(variantUpdateOp);
            });
            // Perform the bulkWrite operation
            await bundleModel
            .bulkWrite(bulkOps)
            .then((res) =>{
              res.status(200).json("success");
              }).catch((err) =>{
              res.status(200).json("error during product delete");
              });
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (err) {
          res.status(401).json("Unauthorized access");
        }
        break;
      case "products/delete":
        try {
          const calculated_hmac = crypto
            .createHmac("sha256", secretKey)
            .update(req.body)
            .digest("base64");
          if (calculated_hmac == hmac_header) {
            const responseWebhook = JSON.parse(req.body);

            let id = "gid://shopify/Product/" + responseWebhook.id;

            bundleModel
              .updateMany(
                {
                  shop: shop,
                  type: { $in: ["productBundle", "volumeBundle"] },
                  "bundleDetail.products.id": id,
                },
                {
                  $pull: {
                    "bundleDetail.products": {
                      id: id,
                    },
                  },
                }
              )
              .then((response) =>{
                res.status(200).json("success");
              })
              .catch((err) =>{
                res.status(200).json("error during product delete");
              });

          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          res.status(401).json("Unauthorized access");

        }
        break;
      case "orders/create":
        try {
          const calculated_hmac = crypto
            .createHmac("sha256", secretKey)
            .update(req.body)
            .digest("base64");
          if (calculated_hmac == hmac_header) {
            // console.log(req.body)
            const bodyData = JSON.parse(req.body);
            console.log(" orders  webhook", bodyData);
            const bundleId = bodyData?.note_attributes?.filter(
              (name) => name.name == "SD_BUNDLE_ID"
            );

            if (bundleId[0].value !== "-") {
              console.log(" orders  webhook", bodyData);
              let price = parseInt(bodyData.current_total_price);
              const filter = {
                bundleId: ObjectId(bundleId[0].value),
              };
              const update = {
                $inc: {
                  bundleSold: 1,
                  bundleSalesValue: price,
                },
              };
               analyticsModel.updateOne(filter, update).then((response)=>{
                res.status(200).json("success");

               }).catch((error)=>{
                res.status(200).json("error during order create");

               })
            }
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (err) {
          res.status(401).json("Unauthorized access");
        }

        break;
      case "collections/delete":
        try {
          const calculated_hmac = crypto
            .createHmac("sha256", secretKey)
            .update(req.body)
            .digest("base64");
          if (calculated_hmac == hmac_header) {
            const responseWebhook = JSON.parse(req.body);
            console.log(responseWebhook);
            let id = "gid://shopify/Collection/" + responseWebhook.id;

            bundleModel
              .updateMany(
                {
                  shop: shop,
                  type: "collectionMixMatch",
                  "bundleDetail.products.id": id,
                },
                {
                  $pull: {
                    "bundleDetail.products": {
                      id: id,
                    },
                  },
                
                }
              )
              .then((response) => {

                res.status(200).json("success");
              })
              .catch((err) => {
                res.status(200).json("error during collection delete");

              });

          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          res.status(401).json("Unauthorized access");
          
        }
        break;
      case "collections/update":
        try {
          const calculated_hmac = crypto
            .createHmac("sha256", secretKey)
            .update(req.body)
            .digest("base64");
          if (calculated_hmac == hmac_header) {
            const responseWebhook = JSON.parse(req.body);
            console.log(responseWebhook);
            let id = "gid://shopify/Collection/" + responseWebhook.id;
            bundleModel
              .updateMany(
                {
                  shop: shop,
                  type: "collectionMixMatch",
                  "bundleDetail.products.id": id,
                },
                {
                  $set: {
                    "bundleDetail.products.$.id": id,
                    "bundleDetail.products.$.title": responseWebhook.title,
                    "bundleDetail.products.$.handle": responseWebhook.handle,
                    "bundleDetail.products.$.image.originalSrc":
                      responseWebhook?.image?.src == undefined
                        ? ""
                        : responseWebhook.image.src,
                  },
            
                }
              )
              .then((response) =>{
                res.status(200).json("success");
              }).catch((err) =>{
                res.status(200).json("error during collection update");

              });
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          res.status(401).json("Unauthorized access");

        }
        break;
      case "shop/redact":
        try {
          const calculated_hmac = crypto
            .createHmac("sha256", secretKey)
            .update(req.body)
            .digest("base64");
          if (calculated_hmac == hmac_header) {
            const deletionPromises = [];
            deletionPromises.push(bundleModel.deleteMany({ shop: shop }));
            deletionPromises.push(customizationModel.deleteOne({ shop: shop }));
            deletionPromises.push(analyticsModel.deleteMany({ shop: shop }));
            deletionPromises.push(pageDataModel.deleteOne({ shop: shop }));
            deletionPromises.push(settingModel.deleteOne({ shop: shop }));
            deletionPromises.push(translationModel.deleteOne({ shop: shop }));
              
                      Promise.all(deletionPromises)
                      .then(() => {
                        res.status(200).json("success");
                      })
                      .catch((err) => {
                        res.status(200).json("Error during data deletion");
                      });
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          res.status(401).json("Unauthorized access");
           
        }
        break;
      case "app/uninstalled":
        try {
          const calculated_hmac = crypto
            .createHmac("sha256", secretKey)
            .update(req.body)
            .digest("base64");
          if (calculated_hmac == hmac_header) {
            await shopInfoModel
              .deleteOne({ shop: shop })
              .then((response) => {
                res.status(200).json("success");
              })
              .catch((err) => {
                res.status(200).json("error during shop info delete");
              });

           
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          res.status(401).json("Unauthorized access");

        }
        break;
      case "customers/data_request":
        try {
          if (calculated_hmac == hmac_header) {
            res.status(200).json("Currently, we are not using customer data");
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          res.status(401).json("Unauthorized access");

        }
        break;
      case "customers/redact":
        try {
          if (calculated_hmac == hmac_header) {
            res.status(200).json("Currently, we are not using customer data");
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          res.status(401).json("Unauthorized access");

        }
        break;
      default:
        break;
    }
  } catch (err) {
    res.status(401).send("Unauthorized Access");
  }
  res.end();
}
