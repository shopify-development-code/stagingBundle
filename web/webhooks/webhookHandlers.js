import crypto from "node:crypto";
import analyticsModel from "../backend/models/analytics.js";
import { ObjectId } from "mongodb";
import bundleModel from "../backend/models/bundleSchema.js";
import shopInfoModel from "../backend/models/shopInfoSchema.js";
import customizationModel from "../backend/models/customizationSchema.js";
import discountIdModel from "../backend/models/discountIdSchema.js";
import pageDataModel from "../backend/models/pageData.js";
import settingModel from "../backend/models/settings.js";

export async function verifyWebhooks(req, res) {
  try {
    console.log("webhooks running");
    const topic = req.headers["x-shopify-topic"];
    let shop = req.headers["x-shopify-shop-domain"];
    let hmac_header = req.headers["x-shopify-hmac-sha256"];
    const secretKey = process.env.SHOPIFY_API_SECRET;
    console.log("topic:-", topic);
    switch (topic) {
      case "products/update":
        try {
          const calculated_hmac = crypto
            .createHmac("sha256", secretKey)
            .update(req.body)
            .digest("base64");
          if (calculated_hmac == hmac_header) {
            //   console.log(calculated_hmac, hmac_header);

            const responseWebhook = JSON.parse(req.body);
            console.log("product ---->", responseWebhook);
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
              // console.log(apiVariant.image_id)
              console.log("**************************************");
              responseWebhook?.images?.map((img) => {
                if (img.id == apiVariant.image_id) {
                  variantImg = img.src;
                }
              });
              console.log(variantImg);

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
            // console.log(bulkOps)
            // Perform the bulkWrite operation
            await bundleModel
              .bulkWrite(bulkOps)
              .then((res) => console.log(res))
              .catch((err) => console.log(err.message));

            res.status(200).json("success");
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

            console.log(responseWebhook);
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
                  status: "draft",
                }
              )
              .then((response) => console.log(response))
              .catch((err) => console.log(err.message));

            res.status(200).json("success");
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          console.log(error.message);
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
              await analyticsModel.updateOne(filter, update);
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

            // console.log(responseWebhook)
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
                  status: "draft",
                }
              )
              .then((response) => console.log(response))
              .catch((err) => console.log(err.message));

            res.status(200).json("success");
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          console.log(error.message);
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
                  status: "draft",
                }
              )
              .then((response) => console.log(response))
              .catch((err) => console.log(err.message));
            res.status(200).json("success");
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          console.log(error.message);
        }
        break;
      case "shop/redact":
        try {
          const calculated_hmac = crypto
            .createHmac("sha256", secretKey)
            .update(req.body)
            .digest("base64");
          if (calculated_hmac == hmac_header) {
            await bundleModel
              .deleteMany({ shop: shop })
              .then((response) => {
                console.log("deleted shop bundle data");
              })
              .catch((err) => {
                console.log(err.message);
              });
            await customizationModel
              .deleteOne({ shop: shop })
              .then((response) => {
                console.log("deleted shop customization data");
              })
              .catch((err) => {
                console.log(err.message);
              });
            await analyticsModel
              .deleteMany({ shop: shop })
              .then((response) => {
                console.log("deleted shop analytics data");
              })
              .catch((err) => {
                console.log(err.message);
              });
            await discountIdModel
              .deleteOne({ shop: shop })
              .then((response) => {
                console.log("deleted shop discount Id data");
              })
              .catch((err) => {
                console.log(err.message);
              });
            await pageDataModel
              .deleteOne({ shop: shop })
              .then((response) => {
                console.log("deleted shop pagedata data");
              })
              .catch((err) => {
                console.log(err.message);
              });
            await settingModel
              .deleteOne({ shop: shop })
              .then((response) => {
                console.log("deleted shop settings data");
              })
              .catch((err) => {
                console.log(err.message);
              });
            await translationModel
              .deleteOne({ shop: shop })
              .then((response) => {
                console.log("deleted shop translations data");
              })
              .catch((err) => {
                console.log(err.message);
              });
            res.status(200).json("success");
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          console.log(error.message);
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
                console.log("app uninstalled shop data delete", response);
              })
              .catch((err) => {
                console.log(err.message);
              });

            res.status(200).json("success");
          } else {
            res.status(401).json("Unauthorized access");
          }
        } catch (error) {
          console.log(error.message);
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
          console.log(error.message);
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
          console.log(error.message);
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
