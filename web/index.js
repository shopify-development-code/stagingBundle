import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";
import shopify from "./shopify.js";
import GDPRWebhookHandlers from "./gdpr.js";
import cors from"cors";
import api from "./backend/routes/api.js"
import db from "./backend/config/database.js";
import path from "path"
import { verifyWebhooks } from "./webhooks/webhookHandlers.js";
import customizationModel from "./backend/models/customizationSchema.js";
import shopInfoModel from "./backend/models/shopInfoSchema.js";
import translationModel from "./backend/models/translationSchema.js";
import settingModel from "./backend/models/settings.js";
import Customizations from './backend/helper/Customization.json' assert { type: "json" }
import { privacyPolicy } from "./backend/controllers/admin/adminController.js";

import dotenv from "dotenv";
import planModel from "./backend/models/plan.js";



// console.log("inside index")
dotenv.config();
const app=express();
const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);
// app.use(express.static(`${process.cwd()}/../uploads`))

app.post(shopify.config.webhooks.path, express.text({type: '*/*'}), verifyWebhooks);

app.use(express.static(path.join(`${process.cwd()}`, '../uploads')))
app.use(cors());
const STATIC_PATH =
process.env.NODE_ENV === "production"
? `${process.cwd()}/web/frontend/dist`
: `${process.cwd()}/frontend/`;


db()

console.log("Hostname",process.env.HOST);
app.get(shopify.config.auth.path, shopify.auth.begin());

console.log("1 run",shopify.config.auth.path,shopify.auth.begin({
  scope: ['read_products', 'write_orders'],
}));
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(), async(req, res, next) => {
    const session = res.locals.shopify.session;
    // console.log("fghf fhghg  ",session.accessToken.Session);
    
    const customizationData =  await customizationModel.findOneAndUpdate({shop : session.shop}, {shop : session.shop, bundle:Customizations['bundle'],collectionMixMatch :Customizations['collectionMixMatch'],popUp :Customizations["popUp"],
       volume:Customizations["volume"],buyXgetY:Customizations["buyXgetY"],productMixMatch:Customizations["productMixMatch"],frequentlyBoughtTogether:Customizations["frequentlyBoughtTogether"]}, {upsert:true, new : true},)
       if(customizationData){
        console.log("customization data saved successfully !!!")
       }

     const shopInfo = await shopInfoModel.findOneAndUpdate({shop:session.shop},{shop:session.shop,accessToken:session.accessToken},{upsert:true, new : true})
     if(shopInfo){
      console.log("shop info successfully saved")
     }    
     let translationData = {
      add:"add",
      off:"off",
      total:"Total",
      FreeShipping:"Get Free Shipping",
      searchProducts:"Search Products",
      seeMore:"See more",
      seeLess:"See less",
      discountApplied:"Discount will be applied at checkout",
      save:"Save",
      delete:"delete",
      added:"added",
      addedItems:"added items",
      addItemToSaveMore :"Add {{item}} items to save more",
      addToCartButton :"Add to cart",
      goToBundleBuilder : "Go To Bundle Builder",
      grabTheDeal :"Grab the deal !",
      youHavenotSelectedanyItemsYet : "You have not selected any items yet",
      youHaveSelectedItems: "You have selected {{item}} items",
      noDiscountIsApplied : "No discount is applied on the selected products",
      discountIsApplied : "discount is applied on the selected products",
      selectAtLeastItemsToApplyTheDiscount : "Select at least {{item}} items to apply the discount",
      allProducts : "ALL PRODUCTS"
     } 
     const translation = await translationModel.findOneAndUpdate({shop:session.shop},{translation:translationData},{upsert:true,new:true})
     if(translation){
      console.log("translation data successfully saved !!")
     }
   
      await settingModel.findOneAndUpdate({shop:session.shop},{discountLabel:'SMART'},{upsert:true,new:true}).then((resp)=>{
        console.log("setting updated",resp)
      }).catch((err)=>{
        console.log(err.message)
      })

      await planModel.findOneAndUpdate({shop:session.shop},{plan:"free",price:"0",interval:"monthly",charge_id:""},{upsert:true,new:true}).then((resp)=>{
        console.log("Plans updated",resp)
      }).catch((err)=>{
        console.log(err.message)
      })
       async function createPage() {
          const client= new shopify.api.clients.Graphql({session});
             const page_create_mutation = `mutation {
                   pageCreate(
                     page: {title: "Collection Mix & Match", body: "<div id='sd-bundle-container'></div>",handle: "sd-Collection-Mix-&-Match"}
                   ) {
                     page {
                       id
                       title
                       handle
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
             console.log("Collection Mix & Match page: ",pageId, page?.data?.pageCreate?.page);
              
             }    
          } 
        createPage();
    // const page =  new shopify.api.rest.Page({session:session});
    // page.title = "Collection Mix & Match";
    // page.handle = "sd-Collection-Mix-&-Match"
    // page.body_html = `<div id="sd-bundle-container"></div>`;


  

     async function createPage() {
        const client= new shopify.api.clients.Graphql({session});
        try {
           const page_create_mutation = `mutation {
                 pageCreate(
                   page: {title: "Collection Mix & Match", body: "<div id='sd-bundle-container'></div>",handle:"sd-Collection-Mix-&-Match"}
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
        } catch (error) {
          console.error(error);
        }
      
    }
    createPage();

    
  //   const client = new shopify.api.clients.Graphql({ session: res.locals.shopify.session});
  // let Input = {
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
  //  if(response.body.data.discountAutomaticAppCreate.automaticAppDiscount.discountId){
  //    await discountIdModel.findOneAndUpdate({shop:session.shop},
  //      {discountId: response.body.data.discountAutomaticAppCreate.automaticAppDiscount.discountId},
  //      {upsert:true,new:true}).then((resp)=>{
  //      console.log("setting updated",resp)
  //    }).catch((err)=>{
  //      console.log(err.message)
  //    })
  //  }
   
      next();


    },
    shopify.redirectToShopifyOrAppRoot()
);

app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);
app.use(express.json({limit : "100mb"}));
// All endpoints after this point will require an active session

app.use("/api/storefront",api)
app.get("/api/privacy-policy", privacyPolicy)

app.use("/api/*", shopify.validateAuthenticatedSession());
console.log("dzfdhgfhdghfghedfhdfgdjsfhg");

app.use("/api",api)

app.use(serveStatic(STATIC_PATH, { index: false }));
app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});
app.listen(PORT);
