
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";
import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
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
const app=express();
const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);
// DB.connect();
// app.use(express.static(`${process.cwd()}/../uploads`))

app.post(shopify.config.webhooks.path, express.text({type: '*/*'}), verifyWebhooks);


app.use(express.static(path.join(`${process.cwd()}`, '../uploads')))
app.use(cors());
const STATIC_PATH =
process.env.NODE_ENV === "production"
? `${process.cwd()}/web/frontend/dist`
: `${process.cwd()}/frontend/`;

db()

console.log(process.env.HOST)

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(), async(req, res, next) => {
    const session = res.locals.shopify.session;
    console.log(session, "session")
    let data = {
      bundle: {
        theme: "light",
        box: {
          backgroundColor: "#FFFFFF",
          borderColor: "#e5e5e5",
          borderRadius: 3
        },
        button: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          fontSize: 15,
          text_others: "Add to cart ",
          text_noDiscount: "Add to cart ",
          position: "bottom"
        },
        title: { color: "#000000", fontSize: 17, alignment: "left" },
        productDetails: {
          title: { "color": "#000000", fontSize: 15 },
          price: { "color": "#000000", fontSize: 13 },
          image: { borderColor: "#FFFFFF", borderRadius: 5 },
          quantities: { color: "#000000", backgroundColor: "#f6f6f7" },
          variantSelector: {
            color: "#000000",
            backgroundColor: "#f5f5f5"
          },
          plusColor: "#5e5e5e"
        },
    
        totalSection: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
          fontSize: 17,
          text: "Total",
          originalPrice: { color: "#f79c9c", fontSize: 14 },
          finalPrice: { color: "#008061", fontSize: 17 }
        }
      },
      volume: {
        theme: "light",
        box: {
          backgroundColor: "#FFFFFF",
          borderColor: "#e5e5e5",
          borderRadius: 3
        },
        button: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          fontSize: 17,
          text_others: "Add to cart",
          text_noDiscount: "Add to cart ",
          position: "bottom"
        },
        title: { color: "#000000", "fontSize": 17, "alignment": "left" },
        productDetails: {
          title: { color: "#000000", "fontSize": 15 },
          price: { color: "#000000", "fontSize": 13 },
          image: { borderColor: "#FFFFFF", "borderRadius": 5 },
          quantities: { color: "#000000", "backgroundColor": "#FFFFFF" },
          quantitiesSelector: {
            color: "#000000",
            backgroundColor: "#f6f6f7",
            plusMinusColor: "#000000"
          },
          variantSelector: {
            color: "#000000",
            backgroundColor: "#f5f5f5"
          }
        },
    
        options: {
          iconColor: "#000000",
          color: "#000000",
          fontSize: 16,
          saveDiscount:{
              color:"#FFFFFF",
                backgroundColor:"#ff0000",
                fontSize:16,
                borderRadius:15
          }
        },
    
        totalSection: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
          fontSize: 18,
          text: "Total",
          originalPrice: { "color": "#FF0000", "fontSize": 15 },
          finalPrice: { "color": "#008061", "fontSize": 17 }
        }
      },
      
      collectionMixMatch: {
        theme: "light",
        box: {
          backgroundColor: "#FFFFFF",
          borderColor: "#e5e5e5",
          borderRadius: 14
        },
        button: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          fontSize: 15,
          text_others: "Go To Bundle Builder",
          text_noDiscount: "Add to cart",
          position: "bottom"
        },
        title: { color: "#000000", fontSize: 18, alignment: "left",description:{color:"#000000",fontSize:15} },
        collectionDetails: {
          title: { color: "#000000", fontSize: 17 },
           description:{color:"#000000",fontSize:15},
           plus:{backgroundColor:"#e5e5e5" ,color:"#5e5e5e"},
           imageBorderColor:"#ffffff"
         },
         saveDiscount:{
          color:"#FFFFFF",
          backgroundColor:"#ff0000",
          fontSize:16,
          text:"Grab The Deal !!"
         }
      },
    
      popUp:{    
        box: {
          backgroundColor: "#FFFFFF"
        },
        button: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          fontSize: 15,
          text_others: "Add to cart",
          text_noDiscount: "Add to cart",
          position: "bottom"
        },
        title: { color: "#000000", fontSize: 25, alignment: "left" },
        productDetails: {
          title: { color: "#000000", fontSize: 18 },
          price: { color: "#000000", fontSize: 18 },
          image: { borderColor: "#FFFFFF", borderRadius: 5 },
          quantities: { color: "#000000", backgroundColor: "#FFFFFF" },
          variantSelector: {
            color: "#000000",
            backgroundColor: "#FFFFFF"
          },
          plusColor: "#5e5e5e"
        },
        totalSection: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
          fontSize: 18,
          text: "Total",
          originalPrice: { color: "#FF0000", fontSize: 18 },
          finalPrice: { color: "#008061", fontSize: 18 }
        }
      }
      }
       
    const customizationData =  await customizationModel.findOneAndUpdate({shop : session.shop}, {shop : session.shop, bundle:data.bundle,collectionMixMatch :data.collection,popUp :data.popUp,
       volume:data.volume}, {upsert:true, new : true})
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
      save:"save",
      delete:"delete",
      added:"added",
      addedItems:"added items",
      addItemToSaveMore :"Add {{item}} items to save more",
      addToCartButton :"Add to cart",
      goToBundleBuilder : "Go To Bundle Builder",
      grabTheDeal :"Grab the deal !"
     } 
     const translation = await translationModel.findOneAndUpdate({shop:session.shop},{translation:translationData},{upsert:true,new:true})
     if(translation){
      console.log("translation data successfully saved !!")
     }
     function generateRandomSixDigitNumber() {
      // Generate a random number between 100,000 and 999,999 (inclusive)
      const min = 100000;
      const max = 999999;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
      return randomNumber;
    }
     const randomSixDigitNumber = generateRandomSixDigitNumber();
      await settingModel.findOneAndUpdate({shop:session.shop},{discountLabel:`SMART-${randomSixDigitNumber}`},{upsert:true,new:true}).then((resp)=>{
        console.log("setting updated",resp)
      }).catch((err)=>{
        console.log(err.message)
      })

     const page =  new shopify.api.rest.Page({session:session});
    page.title = "Collection Mix & Match";
    page.handle = "sd-Collection-Mix-&-Match"
    page.body_html = `<div id="sd-bundle-container"></div>`;
    await page.save({
      update: true,
    });

      next();

    },
    shopify.redirectToShopifyOrAppRoot()
);
app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);
app.use(express.json());
// All endpoints after this point will require an active session
app.use("/api/storefront",api)
app.use("/api/*", shopify.validateAuthenticatedSession());
app.use("/api",api)



app.get("/api/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });
  res.status(200).send(countData);
});
app.get("/api/products/create", async (_req, res) => {
  let status = 200;
  let error = null;
  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});
app.use(serveStatic(STATIC_PATH, { index: false }));
app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});
app.listen(PORT);