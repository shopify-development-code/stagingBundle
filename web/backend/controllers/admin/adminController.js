import shopify from "../../../shopify.js";
import bundleModel from "../../models/bundleSchema.js";
import customizationModel from "../../models/customizationSchema.js";
import translationModel from "../../models/translationSchema.js";
import contactEmail from "../../helper/Email.js";
import { ObjectId } from 'mongodb'
import analyticsModel from "../../models/analytics.js";
import settingModel from "../../models/settings.js";
const MAX_RETRIES = 3;
let retries = 0;


export async function createBundle(req,res){
  try{console.log("first")
 
    const session = res.locals.shopify.session;
    let shop = session.shop;
   const {type,name,title,status,bundleDetail,customization,startdate,endDate,display,currencyCode,timeZone} = req.body

   const response = await bundleModel.create({
    shop:shop ,
      type:type,
      name:name,
      title: title,
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
    console.log(bundleId)
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
          

   console.log(p_id,"TRIMMMMMMMM");



   let session =res.locals.shopify.session;

   console.log('SESSSIONNN',session)

 const data = await shopify.api.rest.Product.find({
   session: session,
   id: Number(p_id),
 });


console.log('VVVVVVVVVVVVV',data);

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

console.log("arr",arr)

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
console.log(id)
const session = res.locals.shopify.session;
let shop = session.shop;
const response = await bundleModel.aggregate([
  {
    $match:
    
      {
        shop: shop,
        _id: ObjectId(id)
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

return res.status(200).send({message:"success",response:response[0],status:200})

}
return res.status(503).send({message:"something went wrong",status:503})
} catch (error) {
  console.log(error.message)
}

}




export async function getBundle (req,res){
   try {
    console.log("createBundle")
    const session = res.locals.shopify.session;
    console.log(session)
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
            timeZone: 1,
            analytics: {
              $arrayElemAt: ['$analytics', 0]
            }
          }
        }
      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );
    if(response){
        return res.status(200).json({message:"success!!",response:response.reverse(), status:200})
        }else{
            return res.status(503).json({message :"Query failed!!",status:503})
        }
   }   catch(error){
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


export async function updateStatus (req,res){
  try{
    console.log(req.body.status)
    const {id,status} = req.body
    const response =  await bundleModel.findOneAndUpdate({_id:id},{status:status})
    console.log(response)
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
    console.log("getCurrency  ")
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
       console.log("currency = >>>>>>>>>>>>>>>>>>>>>>>>>",data.body.data)
        res.send({message:"success",data:data.body.data.shop}) 
      } catch(error)
      {
         console.log(error) 
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
    console.log(response.acknowledged)
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
     console.log(ids)
    const response = await bundleModel.updateMany( { shop:shop, _id: { $in: ids } },{status:status} )
    console.log(response)
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
    console.log(response.acknowledged)
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
console.log(response)
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
 
    const response = await customizationModel.findOneAndUpdate({shop:shop},{shop:shop,
                                                                            bundle:req.body.bundle,
                                                                            collectionMixMatch:req.body.collection,
                                                                            volume:req.body.volume,
                                                                          popUp:req.body.popUp},{upsert:true})

                                                                          
  console.log(response)
  if(response){
    return res.status(200).send({message :"success",status : 200})
  }
  return res.status(400).send({message:"BAD_REQUEST",status:400})
  }


  export async function updateTranslation (req,res){
    try{
      const session = res.locals.shopify.session;
      let shop = session.shop;
   console.log(req.body)
    const response = await translationModel.updateOne({shop:shop},{translation:req.body},{upsert:true,new:true})
console.log(response)
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