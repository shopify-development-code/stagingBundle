import shopify from "../../../shopify.js";
import {  DataType } from "@shopify/shopify-api";
import path from 'path';
import { fileURLToPath } from 'url';
import bundleModel from "../../models/bundleSchema.js";
import customizationModel from "../../models/customizationSchema.js";
import translationModel from "../../models/translationSchema.js";
import { ObjectId } from 'mongodb'
import analyticsModel from "../../models/analytics.js";
import settingModel from "../../models/settings.js";
import discountIdModel from "../../models/discountIdSchema.js";
const MAX_RETRIES = 3;
let retries = 0;

export async function createBundle(req,res){
  try{
 
    const session = res.locals.shopify.session;
    let shop = session.shop;
   const {type,name,title,description,status,bundleDetail,customization,startdate,endDate,display,currencyCode,timeZone} = req.body
  //  console.log("check customization===========>",customization);
   const response = await bundleModel.create({
    shop:shop ,
      type:type,
      name:name,
      title: title,
      description:description,
      status: status,
      currencyCode:currencyCode,
      bundleDetail:bundleDetail,
      customization:customization,
      startdate:startdate,
      endDate:endDate,
      display:display,
      timeZone:timeZone
   })

   if(response){
   
    let bundleId = response._id
    const createBundle =  await analyticsModel.create({shop:shop,
                                                         bundleId:bundleId,
                                                         bundleClick:0,
                                                         bundleSold:0,
                                                         bundleSalesValue:0,
                                                         bundleViews:0,
                                                        })

    if(createBundle){

      return res.status(200).json({message:"success!",response:response,status:200 })
    }else{
    return res.status(503).json({message:"Query failed!!!" })

    }
   }else{
    return res.status(503).json({message:"Query failed!!!" })

   }
  }
  catch(error){
        console.error(`Error: ${error.message}`);
        if (error.code === 'ETIMEDOUT' && retries < MAX_RETRIES)  {
            console.log(`Operation timed out, retrying... (attempt ${retries + 1} of ${MAX_RETRIES})`);
            retries++;
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
            return myOperation(); // Retry the operation
        
        } else {
          // Gracefully terminate the application
          console.log('Fatal error occurred, terminating application.');
          process.exit(1);
        }
    }
}


export async function fetchVariants(req,res){

  try {
     

   let p_id=req.body.p_id;    
   p_id=p_id.split("/").at(-1);
          




   let session =res.locals.shopify.session;


 const data = await shopify.api.rest.Product.find({
   session: session,
   id: Number(p_id),
 });



let arr=[];

data.variants.map((item,index)=>{
     let obj={};
     obj['id']=item. admin_graphql_api_id;
     obj['title']=item.title;
     obj['price']=item.price;
     obj['inventory_quantity']=item.inventory_quantity;
       
       let img=(data?.images.find(el=> el?.id==item?.image_id))?.src;

    obj['src']= img ? img: null;
   
   arr.push(obj)
 
})


res.send({data:arr})

}
catch (error) {
console.log(error.message)
res.send({ message: error.messsage })

}

}

export async function editBundle (req,res){
  
try {
  const {id}= req.body

const session = res.locals.shopify.session;
let shop = session.shop;
const response = await bundleModel.aggregate([
  {
    $match:
    
      {
        shop: shop,
        _id: ObjectId.createFromHexString(id)
      },
  },
  {
    $lookup:
   
      {
        from: "customizations",
        localField: "shop",
        foreignField: "shop",
        as: "customization",
      },
  },
])

if(response){
console.log("chedjedeeje///////////////////////////////////////////////////////////////=>",response);
return res.status(200).send({message:"success",response:response[0],status:200})

}
return res.status(503).send({message:"something went wrong",status:503})
} catch (error) {
  console.log(error.message)
}

}



export async function createProduct(session) {
  // let shop = res.locals.shopify.session.shop;
  // let session = res.locals.shopify.session;
  // const client = new shopify.api.clients.Graphql({ session });
  // let {name, price, check, quantity } = req.body;
// console.log("name, price, check, quantity ",name, price, check, quantity )
  const product = new shopify.api.rest.Product({
    session
  });
 
  product.title = "testpro";
  product.status = "active";
  product.variants = [
    {
      price: "10",
      taxable: true,
      requires_shipping: true,
      inventory_quantity: 2,
    },
  ];
  try {
    let result = await product.save({
      update: true,
    });
    console.log("result10june==>",product)
    // if (req.body.check2 == "createProductSubscriptionEdit") {
    //   console.log("iniffff10june")
    //   let pid = product?.admin_graphql_api_id;
 
    //   let vid = product?.variants[0].admin_graphql_api_id;
 
    //   let lines = [];
 
    //   lines.push({
    //     product_id: pid,
 
    //     product_name: product?.title,
 
    //     product_image:
    //       product?.images.length > 0 ? product.images[0].originalSrc : "",
 
    //     hasOnlyDefaultVariant: true,
    //     requiresShipping: product.variants[0].requires_shipping,
    //     id: vid,
    //     image: "",
    //     price: product.variants[0].price,
 
    //     title: product.variants[0].title,
    //     quantity: 1,
    //     // quantity: product.variants[0].inventory_quantity,
    //   });  
 
    //   req.createProductData = {
    //     data: lines,
    //   };
 
    //   next();
    // } else {
    //   console.log("first in createProduct");
    //   res.send({ message: "success", data: product });
    // }
  } catch (error) {
    console.log("error",error)
    // res.send({ message: "error", data: "Something went wrong" });
  }
}
export async function getBundle (req,res){
   try {
    const session = res.locals.shopify.session;
    let shop = session.shop;
    createProduct(session);
    // const response = await bundleModel.aggregate(
    //   [
    //     {
    //       $match: {
    //         shop: shop
    //       }
    //     },
    //     {
    //       $lookup: {
    //         from: 'analytics',
    //         localField: '_id',
    //         foreignField: 'bundleId',
    //         as: 'analytics'
    //       }
    //     },
    //     {
    //       $project: {
    //         _id: 1,
    //         type: 1,
    //         name: 1,
    //         status: 1,
    //         currencyCode: 1,
    //         bundleDetail: 1,
    //         analytics: {
    //           $arrayElemAt: ['$analytics', 0]
    //         }
    //       }
    //     }
    //   ],

    // )
 

    const response = await bundleModel.aggregate([
      {
        $match: { shop: shop }
      },
      { $sort: { createdAt: 1 } },
      {
        $project: {
          _id:1,
          shop:1,
          type:1,
          name :1,
          status:1,
          "bundleDetail.discountValue" : 1,
          "bundleDetail.discountOptions" : 1,
          "bundleDetail.products.images" : 1,
          "bundleDetail.products.image" : 1,
          "bundleDetail.discountType":1,
          "bundleDetail.xproducts":1,
          "bundleDetail.yproducts":1,
          "bundleDetail.mainProducts":1,
          "bundleDetail.offeredProducts":1,
          "bundleDetail.discountedProductType":1          
        }
      },
      {
        $lookup: {
          from: 'analytics',
          localField: '_id',
          foreignField: 'bundleId',
          as: 'analytics'
        }
      },
      {
        $addFields: {
          analytics: { $arrayElemAt: ['$analytics', 0] }
        }
      }
    ]);

  
    if(response){

        return res.status(200).json({message:"success!!",response:response.reverse(), status:200})
        }else{
            return res.status(200).json({message :"Query failed!!",status:503})
        }
   }   catch(error){
    console.error(`Error: ${error.message}`);

}
}


export async function updateStatus (req,res){
  try{
    const {id,status} = req.body
    const response =  await bundleModel.findOneAndUpdate({_id:id},{$set: { status:status}})
    if(response){
    return res.status(200).send({message:"success",response:response,status:200})
    }else{
      return res.status(503).send({message:"something went wrong",status:503})
    }
  }
  catch(error){
    console.error(`Error: ${error.message}`);
    if (error.code === 'ETIMEDOUT' && retries < MAX_RETRIES)  {
        console.log(`Operation timed out, retrying... (attempt ${retries + 1} of ${MAX_RETRIES})`);
        retries++;
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
        return myOperation(); // Retry the operation
    
    } else {
      // Gracefully terminate the application
      console.log('Fatal error occurred, terminating application.');
      process.exit(1);
    }
}
}

export async function getCurrencyCode(req,res){
   try{

     let session =res.locals.shopify.session;
      const client = new shopify.api.clients.Graphql({ session });
      let queryString =`{
        shop {
          name
          ianaTimezone
          currencyFormats{
            moneyFormat
          }
        }
      }`
       const data= await client.query({ data:queryString }) 
        res.send({message:"success",data:data.body.data.shop}) 
      } catch(error)
      {
         res.send({message:error.message}) 
        }
       }



  export async function actionDelete (req,res){
    try{
      const session = res.locals.shopify.session;
      let shop = session.shop;
      const idsToDelete = req.body.id;
      const filter = {shop:shop, _id: { $in: idsToDelete } };

    const response = await bundleModel.deleteMany(filter)
    if(response.acknowledged == true){
      return res.status(200).send({message:"success",status:200})
    }
return res.status(503).send({message:"something went wrong",status:503})

       } catch(error)
       {
          console.log(error) 
          res.send({message:error.message}) 
         }
  }    

  
  
  export async function actionStatus (req,res){
    try{
      const session = res.locals.shopify.session;

      let shop = session.shop;
      const ids = req.body.id;
     const status = req.body.status;
    const response = await bundleModel.updateMany( { shop:shop, _id: { $in: ids } },{status:status} )
    if(response){
      return res.status(200).send({message:"success",status:200})
    }
return res.status(503).send({message:"something went wrong",status:503})

       } catch(error)
       {
          console.log(error) 
          res.send({message:error.message}) 
         }
  }    

  export async function deleteBundle (req,res){
    try{
      const session = res.locals.shopify.session;
      let shop = session.shop;
    
      const filter = {shop:shop, _id: req.body.id };

    const response = await bundleModel.deleteOne(filter)
    if(response.acknowledged == true){
      return res.status(200).send({message:"success",status:200})
    }
return res.status(503).send({message:"something went wrong",status:503})

       } catch(error)
       {
          console.log(error) 
          res.send({message:error.message}) 
         }
  }    


  export async function updateBundle (req,res){
    try{
      const session = res.locals.shopify.session;
      let shop = session.shop;

    const response = await bundleModel.updateOne({shop:shop, _id:req.body._id},{...req.body})
if(response.acknowledged == true){
  return res.status(200).send({message:"success",status:200})
}
return res.status(503).send({message:"something went wrong",status:503})
       } catch(error)
       {
          console.log(error) 
          res.send({message:error.message}) 
         }
  }    

  export async function updateBundleCustomization (req,res){
    const session = res.locals.shopify.session;
    let shop = session.shop;
    // let body={product:"njdhjwhdkdkdkk"}
 
    const response = await customizationModel.findOneAndUpdate({shop:shop},{shop:shop,
                                                                            bundle:req.body.bundle,
                                                                            collectionMixMatch:req.body.collection,
                                                                            volume:req.body.volume,
                                                                            buyXgetY:req.body.buyXgetY,
                                                                            frequentlyBoughtTogether:req.body.frequentlyBoughtTogether,
                                                                            productMixMatch:req.body.productMixMatch,
                                                                            popUp:req.body.popUp},
                                                                            {upsert:true})
                                                                           

                                                                
  if(response){
    return res.status(200).send({message :"success",status : 200})
    // console.log("check response from api update======>>>>>>>>><<<<<<<<<<========",req.body);
  }
  return res.status(400).send({message:"BAD_REQUEST",status:400})
  }


  export async function updateTranslation (req,res){
    try{
      const session = res.locals.shopify.session;
      let shop = session.shop;
    const response = await translationModel.updateOne({shop:shop},{translation:req.body},{upsert:true,new:true})
if(response.acknowledged == true){
  return res.status(200).send({message:"success",status:200})
}
return res.status(503).send({message:"something went wrong",status:503})
       } catch(error)
       {
          console.log(error) 
          res.send({message:error.message}) 
         }
  }    

  export async function getTransaltion (req,res){
  try {
    const session = res.locals.shopify.session;
    let shop = session.shop;
    const translation = await translationModel.findOne({shop:shop})
 
    if(translation){
      return res.status(200).json({message:"success",response : translation,status:200})
    }else{
      return res.status(503).json({message :"something went wrong ",response:503})
    }
  } catch (error) {
    console.log(error.message)
      return res.status(503).json({message :"something went wrong ",response:503})
  
  }

  }


  export async function getAnalyticsData(req,res){
    try {
      const session = res.locals.shopify.session;
      let shop = session.shop;
      const response = await bundleModel.aggregate(
        [
          {
            $match: {
              shop: shop
            }
          },
          {
            $lookup: {
              from: 'analytics',
              localField: '_id',
              foreignField: 'bundleId',
              as: 'analytics'
            }
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
              analytics: {
                $arrayElemAt: ['$analytics', 0]
              }
            }
          }
        ],
        { maxTimeMS: 60000, allowDiskUse: true }
      );    
       if(Response){
        return res.status(200).json({message:"success",response:response,status:200})
       }else{
        return res.status(500).json({message:"internal verber error",status:500})
       }
      
    } catch (error) {
      console.log(error.message)
    }
  }
  

  export async function getCustomization(req,res){
    try {
      const session = res.locals.shopify.session;
      let shop = session.shop;
      const response = await customizationModel.findOne({shop})
    
      if(response){
       return res.status(200).json({message:"success",response:response,status:200})
      }else{
        return res.status(500).json({message:"INTERNA_SERVER_ERR",status:500})

      }
    } catch (error) {
      console.log(error.message)
    }
  }



export async function saveSetting(req,res){
  try {
    const session = res.locals.shopify.session;
    let shop = session.shop;
  
    const response = await settingModel.findOneAndUpdate({shop:shop},{discountLabel:req.body.discountLabel},{upsert:true,new:true})
    if(response){
     return res.json({message:"success",status:200})
    }else{
     return res.json({message:"failed",status:500})

    }
  } catch (error) {
    console.log(error.message)
    
  }
}


export async function getSetting(req,res){
  try {
    const session = res.locals.shopify.session;
    let shop = session.shop;
  
    const response = await settingModel.findOne({shop:shop})
    if(response){
     return res.json({message:"success",response:response,status:200})
    }else{
     return res.json({message:"failed",status:500})

    }
  } catch (error) {
    console.log(error.message)
    
  }
}

export async function getThemeId(req, res) {
  try {
    const session = res.locals.shopify.session;
   console.log(session)
    const client = new shopify.api.clients.Rest({session});
const data = await client.get({
  path: 'themes',
});
    // const client = new shopify.api.clients.Rest.Theme(shop,session.accessToken);
    const {
      body: { themes },
    } = await client.get({ path: "themes", type: DataType.JSON });
    const { id } = themes.find((el) => el.role === "main");
    res.status(200).json({message:"success",response: id,status:200 });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error getting theme ID");
  }
}


export function  privacyPolicy  (req,res) {
  const __filename = fileURLToPath(import.meta.url);

    const __dirname = path.dirname(__filename);
    const dirPath = path.join(__dirname, "../../helper/templates");
    res.render(`${dirPath}/privacyPolicy.ejs`);

    res.end();
}

export async function createAutomaticDiscount(req,res){

 
  const response = await discountIdModel.findOne({shop:res.locals.shopify.session.shop});
  console.log(response.discountId)
  // if(response.body.id){
    
  // }
  // const client = new shopify.api.clients.Graphql({ session: res.locals.shopify.session});
  // let Input = 
  //     {
  //         "automaticAppDiscount": {
  //           "title": "Smart Bundle (DO NOT DELETE)",
  //           "functionId": "b96d3230-7a17-4b58-8417-afe9e1504fb7",
  //           "combinesWith": {
  //             "orderDiscounts": true,
  //             "productDiscounts": true,
  //             "shippingDiscounts": true
  //           },
  //           "startsAt": "2021-02-02T17:09:21Z",
           
  //           "metafields": [
  //             {
  //               "namespace": "product-discount",
  //               "key": "function-configuration",
  //               "type": "json",
  //               "value": "0"
  //             }
  //           ]
  //         }
  //       }
        
  
  // let queryString = `mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
  //     discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
  //       userErrors {
  //         field
  //         message
  //       }
  //       automaticAppDiscount {
  //         discountId
  //         title
  //         startsAt
  //         endsAt
  //         status
  //         appDiscountType {
  //           appKey
  //           functionId
  //         }
  //         combinesWith {
  //           orderDiscounts
  //           productDiscounts
  //           shippingDiscounts
  //         }
  //       }
  //     }
  //   }
  //   `
  //   const response = await client.query({
  //     data: {
  //       query: queryString,
  //       variables: Input,
  //     },
  //   });
  //   console.log(response.body.data.discountAutomaticAppCreate.automaticAppDiscount.discountId)
  //   res.send(response)
}

// export async function checkTest(req,res){
//   let session = res.locals.shopify.session
//   console.log(session,"session")
//   const client = new shopify.api.clients.Graphql({session});
//   let queryString = `query {
//     discountNodes(first: 100) {
//       edges {
//         node {
//           id
//           discount {
//             ... on DiscountAutomaticApp {
//               title
//             }
//           }
//         }
//       }
//     }
//   }`

//   const response = await client.query({
//     data: {
//       query: queryString,
//     },
//   });
//   res.status(200).send({msg:response});
// // console.log("heyyyyyy ***** **** -------**** ******",response);
//   // return res.send(response);
// }


// export async function testMutation(req,res){
//   let session = res.locals.shopify.session
//   console.log(session,"session")
//   const client = new shopify.api.clients.Graphql({session});

//   let Input = {
//     id:"gid://shopify/DiscountCodeNode/1333065449707",
//     namespace:"volume-discount",
//     key:"8a835d62-e158-4212-a40f-43303f59565a",
//   }
//   let queryString = `mutation {
//     discountAutomaticAppUpdate(
//       id: ${Input.id},
//       automaticAppDiscount: {
//         metafields: [
//           {
//             namespace: ${Input.namespace}
//             key: ${Input.key}
//             value: "{ \"quantity\": 3, \"percentage\": 15.0 }"
//             type: "json"
//           }
//         ]
//       }
//   ) {
//       userErrors {
//         field
//         message
//       }
//     }
//   }`

//   const response = await client.query({
//     data: {
//       query: queryString,
//       variables: Input
//     },
//   });
//   res.status(200).send({msg:response});
// }