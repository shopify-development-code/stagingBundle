import bundleModel from "../../models/bundleSchema.js";
import shopInfoModel from "../../models/shopInfoSchema.js";
import shopify from "../../../shopify.js";
import pageDataModel from "../../models/pageData.js";
import { ObjectId } from "mongodb";
import analyticsModel from "../../models/analytics.js";
import discountIdModel from "../../models/discountIdSchema.js";

export async function getBundleData(req, res) {
  try {
    let shop = req.body.shop;
    let pId = `gid://shopify/Product/${req.body.id}`;
    let collId = req.body.collId;
    console.log("**********************",pId);
    const response = await bundleModel.aggregate([
      {
        $match: {
          shop: shop,
          status: "active",
          $or: [
            {
              $and: [
                { type: "productBundle" },
                {
                  $or: [
                    { "bundleDetail.display.productPages": false },
                    {
                      $and: [
                        { "bundleDetail.display.productPages": true },
                        {
                          "bundleDetail.display.productPagesList": pId,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              $and: [
                { type: "volumeBundle" },
                {
                  $or: [
                    {
                      $and: [
                        {
                          "bundleDetail.discountedProductType":
                            "specific_product",
                        },
                        {
                          $or: [
                            { "bundleDetail.display.productPages": false },
                            {
                              $and: [
                                { "bundleDetail.display.productPages": true },
                                {
                                  "bundleDetail.display.productPagesList": pId,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      $and: [
                        {
                          "bundleDetail.discountedProductType": "all_products",
                        },
                      ],
                    },
                    {
                      $and: [
                        { "bundleDetail.discountedProductType": "collection" },
                        {
                          $or: [
                            { "bundleDetail.display.productPages": false },
                            {
                              $and: [
                                { "bundleDetail.display.productPages": true },
                                {
                                  "bundleDetail.display.productPagesList": {
                                    $in: collId,
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              $and: [
                { type: "collectionMixMatch" },
                {
                  $or: [
                    { "bundleDetail.display.productPages": false },
                    {
                      $and: [
                        { "bundleDetail.display.productPages": true },
                        {
                          "bundleDetail.display.productPagesList": {
                            $in: collId,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              $and: [
                { type: "bxgy" },
                {
                  $or: [
                    { "bundleDetail.display.productPages": false },
                    {
                      $and: [
                        { "bundleDetail.display.productPages": true },
                        {
                          "bundleDetail.display.productPagesList": pId,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              $and: [
                { type: "productMixMatch" },
                {
                  $or: [
                    { "bundleDetail.display.productPages": false },
                    {
                      $and: [
                        { "bundleDetail.display.productPages": true },
                        {
                          "bundleDetail.display.productPagesList": pId,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              $and: [
                { type: "fbt"},
                {
                  $or: [
                    { "bundleDetail.mainProducts":{ $elemMatch: { id: pId }}},                    
                    { "bundleDetail.offeredProducts":{ $elemMatch: { id: pId }}}, 
                    {"bundleDetail.discountedProductType": "all_products"}               
                  ],
                },
              ],
            }
          ],
        },
      },
      {
        $lookup: {
          from: "customizations",
          localField: "shop",
          foreignField: "shop",
          as: "customization",
        },
      },
      {
        $lookup: {
          from: "translations",
          localField: "shop",
          foreignField: "shop",
          as: "translations",
        },
      },
      {
        $lookup: {
          from: "settings",
          localField: "shop",
          foreignField: "shop",
          as: "settings",
        },
      },
      {
        $lookup: {
          from: "plans",
          localField: "shop",
          foreignField: "shop",
          as: "plans",
        },
      },
      {
        $project: {
          _id: 1,
          shop: 1,
          type: 1,
          name: 1,
          title: 1,
          description:1,
          status: 1,
          badgeText: 1,
          currencyCode: 1,
          bundleDetail: 1,
          startdate: 1,
          endDate: 1,
          display: 1,
          customization: { $arrayElemAt: ["$customization", 0] },
          translations: { $arrayElemAt: ["$translations", 0] },
          settings: { $arrayElemAt: ["$settings", 0] },
          plans: { $arrayElemAt: ["$plans", 0] },
        },
      },
    ]);

    if (response) {
    console.log("check response :::::::::=====::::::::::::::::::::::>>",response);

      return res
        .status(200)
        .send({ message: "success", response: response, status: 200 });
    }
    return res
      .status(400)
      .send({ message: "SOMETHING_WENT_WRONG", status: 400 });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    if (error.code === "ETIMEDOUT" && retries < MAX_RETRIES) {
      console.log(
        `Operation timed out, retrying... (attempt ${
          retries + 1
        } of ${MAX_RETRIES})`
      );
      retries++;
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
      return myOperation(); // Retry the operation
    } else {
      // Gracefully terminate the application
      console.log("Fatal error occurred, terminating application.");
      process.exit(1);
    }
  }
}

export async function createPage(req, res) {
  let shop = req.body.shop;
  const session = await shopInfoModel.findOne({ shop: shop });
  if (session) {
    const client= new shopify.api.clients.Graphql({session});
    try {
       const page_create_mutation = `mutation {
             pageCreate(
               page: {title: "Collection Mix & Match", body: "<div id='sd-bundle-container'></div>"}
             ) {
               page {
                 id
                 title
               }
               userErrors{
               code
               message
               field
             }
             }
           }`
       const page= await client.request(page_create_mutation);
       if (page?.data?.pageCreate && !page?.data?.pageCreate?.userErrors?.length) {
        let pageId=page?.data?.pageCreate?.page?.id?.split('/')?.pop();
        console.log("pageId", pageId);
         const data = await pageDataModel.findOneAndUpdate(
           { shop: shop },
           { shop: shop, pageId: pageId },
           { upsert: true, new: true }
         );
         if (data) {
           return res
             .status(200)
             .send({ message: "success", data: page?.data?.pageCreate?.page, status: 200 });
         } else {
           return res
             .status(400)
             .send({ message: "INTERNAL_SERVER_ERROR", status: 400 });
         }
       }
      
    } catch (error) {
      console.error(error);
    }
  }
}

export async function getPage(req, res) {
  let shop = req.body.shop;
  const session = await shopInfoModel.findOne({ shop: shop });
  if (session) {
    try {
      const client= new shopify.api.clients.Graphql({session})
          const  page= await client.request(`{
          pages(first: 250) {
            nodes {
              id
              title
            }
          }
        }`)
        
    if (page?.data?.pages) {
      console.log("pages",page.data?.pages?.nodes?.length);
      const getId = await pageDataModel.findOne({ shop: shop });
      if (getId !== null) {
        const filter = page.data?.pages?.nodes?.filter((e) => e.id?.split('/')?.pop() == getId.pageId);
        if (filter.length) {
          return res
            .status(200)
            .send({ message: "success", data: filter[0], status: 200 });
        } else {
          return res
            .status(200)
            .send({ message: "page not found", status: 400 });
        }
      } else {
        return res.status(200).send({ message: "page not found", status: 400 });
      }
    }
    } catch (error) {
      console.log("error", error.message);
    }
     
  }
} 
export async function getCollectionMixMatchData(req, res) {
  try {
    let shop = req.body.shop;
    let id = req.body.id;

    const responseCursor = await bundleModel.aggregate(
      [
        {
          $match: {
            shop: shop,
            _id: ObjectId.createFromHexString(id),
          },
        },
        {
          $lookup: {
            from: "translations",
            localField: "shop",
            foreignField: "shop",
            as: "translations",
          },
        },
        {
          $lookup: {
            from: "settings",
            localField: "shop",
            foreignField: "shop",
            as: "settings",
          },
        },
        {
          $project: {
            _id: 1,
            shop: 1,
            type: 1,
            name: 1,
            title: 1,
            status: 1,
            currencyCode: 1,
            bundleDetail: 1,
            startdate: 1,
            endDate: 1,
            display: 1,
            translations: { $arrayElemAt: ["$translations", 0] },
            settings: { $arrayElemAt: ["$settings", 0] },
          },
        },
      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );
    const response = responseCursor[0];
    if (response) {
      return res
        .status(200)
        .send({ message: "success", response: response, status: 200 });
    }
    return res
      .status(400)
      .send({ message: "SOMETHING_WENT_WRONG", status: 400 });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

export async function getCollectionProducts(req, res) {
  try {
    const { shop, collectionGid } = req.body;
    const shopInfos = await shopInfoModel.findOne({ shop: shop });
    if (shopInfos) {
      const client = new shopify.api.clients.Graphql({
        session: {
          shop: shopInfos.shop,
          accessToken: shopInfos.accessToken,
        },
      });

      let queryField = 'id: "' + collectionGid + '"';

      const queryString = `{
        collection(${queryField}) {
          id
          title
          products(first: 8) {
            edges {
              cursor
              node {
                id
                title
                handle
                images(first:1) {
                  edges {
                    node {
                       url
                    }
                  }
                }
                variants(first: 30) {
                  edges {
                    cursor
                    node {
                      id
                      title
                      price
                    }
                  }
                  pageInfo {
                    hasNextPage
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
            }
          }
        }
      }`;
      const response = await client.request(queryString);

      return res.json({
        message: "success",
        response: response.data.collection,
      });
    }
  } catch (error) {
    console.log("error", error.message);
  }
}

export async function getMoreCollectionProducts(req, res) {
  try {
    const { shop, hasNextPage, gid, nextPageCursor } = req.body;
    if (hasNextPage == true) {
      const shopInfos = await shopInfoModel.findOne({ shop: shop });
      if (shopInfos) {
        const client = new shopify.api.clients.Graphql({
          session: {
            shop: shopInfos.shop,
            accessToken: shopInfos.accessToken,
          },
        });

        let queryField = 'id: "' + gid + '"';
        let productQueryField = 'first: 8, after : "' + nextPageCursor + '"';

        const queryString = `{
          collection(${queryField}) {
            id
            title
            products(${productQueryField}) {
              edges {
                cursor
                node {
                  id
                  title
                  handle
                  images(first:1) {
                    edges {
                      node {
                         url
                      }
                    }
                  }
                  variants(first: 50) {
                    edges {
                      cursor
                      node {
                        id
                        title
                        price
                      }
                    }
                    pageInfo {
                      hasNextPage
                    }
                  }
                }
              }
              pageInfo {
                hasNextPage
              }
            }
          }
        }`;
        const response = await client.request(queryString);

        return res.json({
          message: "success",
          response: response.data.collection,
          flag: 1,
        });
      }
    } else {
      return res.json({
        message: "success",
        response: "no more products left",
        flag: 0,
      });
    }
  } catch (error) {
    console.log("error", error.message);
  }
}

export async function searchCollectionProducts(req, res) {
  try {
    const { shop, hasNextPage, collectionGid, nextPageCursor, search } =
      req.body;

    const shopInfos = await shopInfoModel.findOne({ shop: shop });
    if (shopInfos) {
      const client = new shopify.api.clients.Graphql({
        session: {
          shop: shopInfos.shop,
          accessToken: shopInfos.accessToken,
        },
      });

      let queryField = 'first: 8, query:  "*' + search + '*"';

      const queryString = `{
  products(${queryField}) {
    pageInfo{
      hasNextPage
    }
    edges {
      cursor
      node {
        title
        handle
        id
        images(first:1){
          edges{
            node{
              url
            }
          }
        }
        variants(first:50){
          edges{
            node{
              id
              price
              title
            }
          }
        }
        collections(first: 50) {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
      }
    }
  }
}`;
      const response = await client.request(queryString);

      let arr = [];

      response.data.products.edges.map((item) => {
        item.node.collections.edges.map((el) => {
          if (collectionGid == el.node.id) {
            arr = response.data.products;
          }
        });
      });

      return res.json({ message: "success", response: arr });
    }
  } catch (error) {
    console.log("error", error.message);
  }
}

export async function getBundleViews(req, res) {
  try {
    const objectIds = req.body.bundleId.map((id) => ObjectId.createFromHexString(id));

    const bundles = await analyticsModel.find({ bundleId: objectIds });

    if (bundles) {
      const filter = {
        bundleId: objectIds,
      };
      const update = {
        $inc: {
          bundleViews: 1,
        },
      };
      await analyticsModel.updateMany(filter, update);
      res.status(200).send("success");
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function getBundleClick(req, res) {
  try {
    const objectId = ObjectId.createFromHexString(req.body.bundleId);

    const bundles = await analyticsModel.find({ bundleId: objectId });

    if (bundles) {
      const filter = {
        bundleId: objectId,
      };
      const update = {
        $inc: {
          bundleClick: 1,
        },
      };
      await analyticsModel
        .updateOne(filter, update)
        .then((response) => console.log(response))
        .catch((error) => console.log(error.message));
      res.status(200).send("success");
    }
  } catch (error) {
    console.log("error",error.message);
  }
}

export async function updateAutomaticDiscount(req,res){
  try {
    const {shop,type,xproductId,yproductId,discountType,discountValue} = req.body ;
    let data = {
    type:type,
    xproductId:xproductId,
    yproductId:yproductId,
    discountType:discountType,
    discountValue:discountValue
    }
   let jsonStringy = JSON.stringify({ "bundleData": JSON.stringify(data) });
 
  const db = await discountIdModel.findOne({shop:shop})
  const session = await shopInfoModel.findOne({shop:shop})
  let update ;
  let discountAutomaticId ;
  const client = new shopify.api.clients.Graphql({
    session: {
      shop: session.shop,
      accessToken: session.accessToken,
    },
  });
  if(db.discountId){
    discountAutomaticId = db.discountId
    const data = await client.request( `query {
        discountNode(id: "${db.discountId}") {
          id
      }
      }`,
    );
     console.log(discountAutomaticId)
     console.log(data?.data?.discountNode.id)
    if(data?.data?.discountNode.id!== null ){
     update = true;
    }else{
      update = false;
    }
  }
  if(update = true){
    //update old
    console.log("updateOld")
   let  id= discountAutomaticId;
    let automaticAppDiscount = {
        "metafields": [
          {
            "key": "function-configuration",
            "type": "json",
            "value": `${jsonStringy}`
          }
        ]
    }
    
    let queryString = `mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
      discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
        automaticAppDiscount {
          discountId
          title
        }
        userErrors {
          field
          message
        }
      }
    }`
    const response = await client.request(queryString,{
        variables: {
          automaticAppDiscount:automaticAppDiscount,
          id:id,
        },
    });
    return res.status(200).json({message:"update success",response:response,status:200})
  }else{
    //create new
    console.log("createNew")
    let automaticAppDiscount = {
              "title": "Smart Bundle (DO NOT DELETE)",
              "functionId": "b96d3230-7a17-4b58-8417-afe9e1504fb7",
              "combinesWith": {
                "orderDiscounts": true,
                "productDiscounts": true,
                "shippingDiscounts": true
              },
              "startsAt": "2021-02-02T17:09:21Z",
             
              "metafields": [
                {
                  "namespace": "product-discount",
                  "key": "function-configuration",
                  "type": "json",
                  "value": jsonStringy
                }
              ]
          }
          
    
    let queryString = `mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
        discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
          userErrors {
            field
            message
          }
          automaticAppDiscount {
            discountId
            title
            startsAt
            endsAt
            status
            appDiscountType {
              appKey
              functionId
            }
            combinesWith {
              orderDiscounts
              productDiscounts
              shippingDiscounts
            }
          }
        }
      }
      `
      const response = await client.request(queryString,{
          variables: {
            automaticAppDiscount:automaticAppDiscount,
        },
      });
      return res.status(200).json({message: "create success",response : response,status:200})
  }
} catch (error) {
    console.log(error)
}
}