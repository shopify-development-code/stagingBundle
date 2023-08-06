import shopify from "../../../shopify.js";
import shopInfoModel from "../../models/shopInfoSchema.js";
import discountIdModel from "../../models/discountIdSchema.js";
const MAX_RETRIES = 3;
let retries = 0;


export async function createRule(req,res){

  try{
   console.log("ccccccccccrrrrrrrrrrrreeeeeeeeeeeeaaaaaaaaaaaaaattttttttttttttttteeeeeeeeeeeeee")
    const shop = req.body.shop;
    const title = req.body.discount_name;
    const code = req.body.code;
    const discountValue = req.body.discountValue;
    const variantsId = req.body.variantsId;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const bundleType = req.body.bundleType
    const totalPrice = req.body.totalPrice
    const discountId = req.body.discountCreateId
    let quantityItem = variantsId.length
    console.log("body------------->",req.body)
    // const discountId = await discountIdModel.findOne({shop:shop})
    
    const shopInfo = await shopInfoModel.findOne({shop})
     console.log("shooop",shopInfo)
    const client = new shopify.api.clients.Graphql({ session:  {
      shop:shop,
      accessToken:shopInfo.accessToken
    }});
    const uniqueSet = new Set(variantsId);
    const mergedArray = Array.from(uniqueSet);
    let productVariantsId = []
    if(discountId){ 
      let getDiscountquery =`query {
        codeDiscountNode(id:"${discountId}") {
          id
          codeDiscount {
            ... on DiscountCodeBasic {
              title
              customerGets {
                items {
                  ... on DiscountProducts {
                    productVariants(first: 50) {
                      edges {
                        node {
                          id
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`
      
      const response = await client.query({
        data: {
          query: getDiscountquery,
        },
      });
     
 
     

      if(response.body.data.codeDiscountNode == null){
        console.log("discountCreate == NULL , creating new !!!")
        if(bundleType == "freeShipping"){
               
          let Input ={
            "freeShippingCodeDiscount": {
              "startsAt": startDate,
          
              "appliesOncePerCustomer": false,
              "title": code,
              "code": code,
              "minimumRequirement": {
                "subtotal": {
                  "greaterThanOrEqualToSubtotal": totalPrice
                }
              },
              "customerSelection": {
                "all": true
              },
              "destination": {
                "all": true
              }
            }
          }

          let queryString =`mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
            discountCodeFreeShippingCreate(
              freeShippingCodeDiscount: $freeShippingCodeDiscount
            ) {
              codeDiscountNode {
                id
                codeDiscount {
                  ... on DiscountCodeFreeShipping {
                    title
                    startsAt
                    endsAt
                    maximumShippingPrice {
                      amount
                    }
                    customerSelection {
                      ... on DiscountCustomerAll {
                        allCustomers
                      }
                    }
                    destinationSelection {
                      ... on DiscountCountryAll {
                        allCountries
                      }
                    }
                    minimumRequirement {
                      ... on DiscountMinimumSubtotal {
                        greaterThanOrEqualToSubtotal {
                          amount
                        }
                      }
                    }
                    codes(first: 2) {
                      nodes {
                        code
                      }
                    }
                  }
                }
              }
              userErrors {
                field
                code
                message
              }
            }
          }`

          const response = await client.query({
            data: {
              query: queryString,
              variables: Input,
            },
          });
          // console.log(response)
         

          let bundleDiscountId = response.body.data.discountCodeFreeShippingCreate.codeDiscountNode.id
          const saveId = await discountIdModel.findOneAndUpdate({shop:shop},{shop:shop,discountId:bundleDiscountId},{upsert:true,new:true})
          if(saveId._id){
          //  console.log("response3",response)
       return  res.status(200).json({message:"SUCCESS!",response:bundleDiscountId,status:200})
          }else{
           return res.status(400).json({message:"SUCCESS!",error:"some error occuring in saving discount id",status:400})
          }



        }else{

          console.log("17 july")
          console.log(code)
          console.log(discountValue)
          console.log(totalPrice)
          let Input ={
            "basicCodeDiscount": {
              "appliesOncePerCustomer": false,
              "code":code,
              "combinesWith": {
                "productDiscounts": true,
                "shippingDiscounts": true
              },
              "customerGets": {
                "items": {
                  "products": {
                    "productVariantsToAdd": mergedArray
                  }
                },
                "value": {
                  "discountAmount": {
                    "amount": discountValue,
                    "appliesOnEachItem": false
                  }
                }
              },
              "customerSelection": {
                "all": true
              },
              "minimumRequirement": {
                "quantity": {
                  "greaterThanOrEqualToQuantity": quantityItem.toString()
                }
              },
           
              "startsAt": startDate,
              "title": code,
              "usageLimit": null
            }
          }
  
  
          let queryString =  `  mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
            discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
              codeDiscountNode {
                id
                codeDiscount {
                  ... on DiscountCodeBasic {
                    title
                    codes(first: 10) {
                      nodes {
                        code
                      }
                    }
                    startsAt
                    endsAt
                    customerSelection {
                      ... on DiscountCustomerAll {
                        allCustomers
                      }
                    }
                    customerGets {
                      value {
                        ... on DiscountPercentage {
                          percentage
                        }
                      }
                      items {
                        ... on AllDiscountItems {
                          allItems
                        }
                      }
                    }
                    appliesOncePerCustomer
                  }
                }
              }
              userErrors {
                field
                code
                message
              }
            }
          }`;
  
          const response = await client.query({
                    data: {
                      query: queryString,
                      variables: Input,
                    },
                  });
          // console.log(response.body.data.discountCodeBasicCreate.userErrors)
            let bundleDiscountId = response.body.data.discountCodeBasicCreate.codeDiscountNode.id
            const saveId = await discountIdModel.findOneAndUpdate({shop:shop},{shop:shop,discountId:bundleDiscountId},{upsert:true,new:true})
            if(saveId){
              return  res.status(200).json({message:"SUCCESS!",response:bundleDiscountId,status:200})
            }
        }
       
      }else{
        console.log("discount updating !!!!!")
        if(bundleType == "freeShipping"){

          let bundleDiscountId = response.body.data.codeDiscountNode.id
          console.log("update free shiping")
         let input=  {
         
          "freeShippingCodeDiscount": {
            "startsAt": startDate,
        
            "appliesOncePerCustomer": false,
            "title": code,
            "code": code,
            "minimumRequirement": {
              "subtotal": {
                "greaterThanOrEqualToSubtotal": totalPrice
              }
            },
            "customerSelection": {
              "all": true
            },
            "destination": {
              "all": true
            }
          },"id": bundleDiscountId
        }
        
        let queryString =`mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {
discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {
  codeDiscountNode {
    id
    codeDiscount {
      ... on DiscountCodeFreeShipping {
        title
        startsAt
        endsAt
        minimumRequirement {
          ... on DiscountMinimumSubtotal {
            greaterThanOrEqualToSubtotal {
              amount
              currencyCode
            }
          }
        }
        codes(first: 2) {
          nodes {
            code
          }
        }
      }
    }
  }
  userErrors {
    field
    code
    message
  }
}
}
`
const update = await client.query({
data: {
  query: queryString,
  variables: input,
},
});


let bundleShoppingDiscountId = update.body.data.discountCodeFreeShippingUpdate.codeDiscountNode.id
const saveId = await discountIdModel.findOneAndUpdate({shop:shop},{shop:shop,discountId:bundleShoppingDiscountId},{upsert:true,new:true})
if(saveId._id){

return  res.status(200).json({message:"SUCCESS!",response:bundleShoppingDiscountId,status:200})
}else{
return res.status(400).json({message:"SUCCESS!",error:"some error occuring in saving discount id",status:400})
}



        }else{
          console.log("bundle updating")
          let getDiscountProductArr = response.body.data.codeDiscountNode.codeDiscount.customerGets?.items.productVariants.edges ;
          getDiscountProductArr?.forEach((e)=>{
            productVariantsId.push(e.node.id)
          })
  
          const filteredArray = productVariantsId.filter((element) => !mergedArray.includes(element));
          let bundleDiscountId = response.body.data.codeDiscountNode.id
          
  
          let Input ={
            "basicCodeDiscount": {
              "appliesOncePerCustomer": false,
              "code": code,
              "combinesWith": {
                "productDiscounts": true,
                "shippingDiscounts": true
              },
              "customerGets": {
                "items": {
                  "products": {
                    "productVariantsToRemove" : filteredArray,
                    "productVariantsToAdd": mergedArray
                  }
                },
                "value": {
                  "discountAmount": {
                    "amount": discountValue,
                    "appliesOnEachItem": false
                  }
                }
              },
              "customerSelection": {
                "all": true
              },
              "minimumRequirement": {
                "quantity": {
                  "greaterThanOrEqualToQuantity": quantityItem.toString()
                }
              },
           
              "startsAt": startDate,
              "title": code,
              "usageLimit": null
            },
            "id":bundleDiscountId
          }
  
        let queryString =   `mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
          discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
            codeDiscountNode {
              codeDiscount {
                ... on DiscountCodeBasic {
                  title
                  codes(first: 10) {
                    nodes {
                      code
                    }
                  }
                  startsAt
                  endsAt
                  customerSelection {
                    ... on DiscountCustomerAll {
                      allCustomers
                    }
                  }
                  customerGets {
                    value {
                      ... on DiscountPercentage {
                        percentage
                      }
                    }
                    items {
                      ... on AllDiscountItems {
                        allItems
                      }
                    }
                  }
                  appliesOncePerCustomer
                }
              }
            }
            userErrors {
              field
              code
              message
            }
          }
        }
        `
        const update = await client.query({
          data: {
            query: queryString,
            variables: Input,
          },
        });
     
         
  
     
          return res.status(200).json({message:"SUCCESS!",response:bundleDiscountId,status:200,update:update})

        }
      
      
      }
    }else{
      console.log("creating new discount")
      if(bundleType == "freeShipping"){
        console.log("shipping")
        let Input ={
          "freeShippingCodeDiscount": {
            "startsAt": "2022-06-22T21:12:07.000Z",
        
            "appliesOncePerCustomer": false,
            "title": code,
            "code": code,
            "minimumRequirement": {
              "subtotal": {
                "greaterThanOrEqualToSubtotal": totalPrice
              }
            },
            "customerSelection": {
              "all": true
            },
            "destination": {
              "all": true
            }
          }
        }

        let queryString =`mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
          discountCodeFreeShippingCreate(
            freeShippingCodeDiscount: $freeShippingCodeDiscount
          ) {
            codeDiscountNode {
              id
              codeDiscount {
                ... on DiscountCodeFreeShipping {
                  title
                  startsAt
                  endsAt
                  maximumShippingPrice {
                    amount
                  }
                  customerSelection {
                    ... on DiscountCustomerAll {
                      allCustomers
                    }
                  }
                  destinationSelection {
                    ... on DiscountCountryAll {
                      allCountries
                    }
                  }
                  minimumRequirement {
                    ... on DiscountMinimumSubtotal {
                      greaterThanOrEqualToSubtotal {
                        amount
                      }
                    }
                  }
                  codes(first: 2) {
                    nodes {
                      code
                    }
                  }
                }
              }
            }
            userErrors {
              field
              code
              message
            }
          }
        }`

        const response = await client.query({
          data: {
            query: queryString,
            variables: Input,
          },
        });
        // console.log(response)
        let bundleDiscountId = response.body.data.discountCodeFreeShippingCreate.codeDiscountNode.id
        console.log(bundleDiscountId)
        const saveId = await discountIdModel.findOneAndUpdate({shop:shop},{shop:shop,discountId:bundleDiscountId},{upsert:true,new:true})
      

        if(saveId){
         console.log("response3",response)
     return  res.status(200).json({message:"SUCCESS!",response:bundleDiscountId,status:200})
        }else{
         return res.status(400).json({message:"SUCCESS!",error:"some error occuring in saving discount id",status:400})
        }
      }else{

        console.log("creating new bundle without id")
        let Input ={
          "basicCodeDiscount": {
            "appliesOncePerCustomer": false,
            "code":code,
            "combinesWith": {
              "productDiscounts": true,
              "shippingDiscounts": true
            },
            "customerGets": {
              "items": {
                "products": {
                  "productVariantsToAdd": mergedArray
                }
              },
              "value": {
                "discountAmount": {
                  "amount": discountValue,
                  "appliesOnEachItem": false
                }
              }
            },
            "customerSelection": {
              "all": true
            },
            "minimumRequirement": {
              "quantity": {
                "greaterThanOrEqualToQuantity": quantityItem.toString()
              }
            },
         
            "startsAt": startDate,
            "title": code,
            "usageLimit": null
          }
        }
  
  
        let queryString =  `  mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
          discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
            codeDiscountNode {
              id
              codeDiscount {
                ... on DiscountCodeBasic {
                  title
                  codes(first: 10) {
                    nodes {
                      code
                    }
                  }
                  startsAt
                  endsAt
                  customerSelection {
                    ... on DiscountCustomerAll {
                      allCustomers
                    }
                  }
                  customerGets {
                    value {
                      ... on DiscountPercentage {
                        percentage
                      }
                    }
                    items {
                      ... on AllDiscountItems {
                        allItems
                      }
                    }
                  }
                  appliesOncePerCustomer
                }
              }
            }
            userErrors {
              field
              code
              message
            }
          }
        }`;
  
        const response = await client.query({
                  data: {
                    query: queryString,
                    variables: Input,
                  },
                });
     
                console.log(response.body.data.discountCodeBasicCreate.userErrors)
          let bundleDiscountId = response.body.data.discountCodeBasicCreate.codeDiscountNode.id
                //  const saveId = await discountIdModel.findOneAndUpdate({shop:shop},{shop:shop,discountId:bundleDiscountId},{upsert:true,new:true})
                //  if(saveId._id){
               
                  
              return  res.status(200).json({message:"SUCCESS!",response:bundleDiscountId,status:200})
                //  }else{
                  // return res.status(400).json({message:"SUCCESS!",error:"some error occuring in saving discount id",status:400})
                //  }
      }
   
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

export async function deactivateRule (req,res){
  try{
    console.log("***************deactive**********************")
    const {shop,discountId} = req.body
    const shopInfo = await shopInfoModel.findOne({shop:shop})

    const client = new shopify.api.clients.Graphql({ session:  {
      shop:shop,
      accessToken:shopInfo.accessToken
    }});

    let Input ={
        "id":discountId
      }
    
  
    let queryString = `mutation discountCodeDeactivate($id: ID!) {
      discountCodeDeactivate(id: $id) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBasic {
              title
              status
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`
    const response = await client.query({
      data: {
        query: queryString,
        variables: Input,
      },
    });
    // console.log(response)
    return  res.status(200).json({message:"SUCCESS!",response:response})

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

export async function activateRule (req,res){
  try{
    // console.log(req.body)
    const {shop,discountId} = req.body
    const shopInfo = await shopInfoModel.findOne({shop:shop})

    const client = new shopify.api.clients.Graphql({ session:  {
      shop:shop,
      accessToken:shopInfo.accessToken
    }});

    let Input ={
        "id":discountId
      }
    
  
    let queryString = `mutation discountCodeActivate($id: ID!) {
      discountCodeActivate(id: $id) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBasic {
              title
              status
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`
    const response = await client.query({
      data: {
        query: queryString,
        variables: Input,
      },
    });
    // console.log(response)
    return  res.status(200).json({message:"SUCCESS!",response:response})

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


