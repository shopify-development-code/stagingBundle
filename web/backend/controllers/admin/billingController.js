import shopify from "../../../shopify.js";
import planModel from "../../models/plan.js";
import shopInfoModel from "../../models/shopInfoSchema.js";


export async function recurringBiling(req, res) {
    try {
  
      const { plan, interval, price } = req.body;
      const session = res.locals.shopify.session;
      const shop = session.shop 
      const API_KEY = process.env.SHOPIFY_API_KEY;
      const client = new shopify.api.clients.Graphql({session});
      let testCharge;
      if (
        shop == "nezuko-komada.myshopify.com" || shop=='pallavitesting.myshopify.com'
      ) {
        testCharge = true;
      }
      const recurringString = `mutation CreateSubscription {
              appSubscriptionCreate(
                  name: "${plan}",
        returnUrl: "https://${shop}/admin/apps/${API_KEY}/plans"
                  test : ${testCharge}
                  lineItems: [{
                      plan: {
            appRecurringPricingDetails: {
              price: { amount: ${price}, currencyCode: USD }
              interval: EVERY_30_DAYS
                          }
                      }
                  }]
              ){
                  userErrors {
                      field
                      message
                  }
                  confirmationUrl    
                  appSubscription {
                      id
                  }
              }
          }`;
  
      const response = await client.request(recurringString);
      res.status(200).send(response);
    } catch (err) {
      return res.json({ message: "INTERNAL_SERVER_ERROR", err: err.message });
    }
  }
  
  /****************************Billing Success***************************************** */

export async function recurringBilingSelected(req,res){
  try {
    const { charge_id } = req.body; 
    const session = res.locals.shopify.session; 
    const shop = session.shop; 
    const client = new shopify.api.clients.Graphql({ session });
    // GraphQL query to fetch active subscriptions
    const GetActiveSubsquery = `query GetActiveSubscriptions {
      app {
        installation {
          activeSubscriptions {
            id
            name
            status
            currentPeriodEnd
            createdAt
            lineItems {
              id
              plan {
                pricingDetails {
                  ... on AppRecurringPricing {
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`;

   
    const response = await client.request(GetActiveSubsquery);

    // Extract subscriptions
    const subscriptions =
      response?.data?.app?.installation?.activeSubscriptions || [];

    if (!subscriptions.length) {
      return res.json({
        message: "No active subscriptions found.",
        result: 0,
      });
    }

    // Find the specific subscription using charge_id
    const activeSubscription = subscriptions.find(
      (sub) => sub.id === `gid://shopify/AppSubscription/${charge_id}`
    );

    if (!activeSubscription) {
      return res.json({
        message: "Subscription not found.",
        result: 0,
        charge_id,
      });
    }

    // Find the line item using charge_id
    const lineItem = activeSubscription.lineItems.find(
      (item) =>
        item.id === `gid://shopify/AppSubscriptionLineItem/${charge_id}?v=1&index=0`
    );

    if (!lineItem || !lineItem?.plan?.pricingDetails) {
      return res.json({
        message: "No pricing details found for the subscription line item.",
        result: 0,
      });
    }

 
    const pricingDetails = lineItem.plan.pricingDetails;

    // Check if the subscription status is ACTIVE
    if (activeSubscription.status === "ACTIVE" && pricingDetails) {
      // Update billing plan in the database
      const updatePlan = await planModel.findOneAndUpdate(
        { shop },
        {
          chargeId:charge_id,
          plan: activeSubscription.name,
          price: pricingDetails.price.amount,
          interval: "MONTHLY",
        },
        {
          chargeId:charge_id,
          plan: activeSubscription.name,
          price: pricingDetails.price.amount,
          interval: "MONTHLY",
        },
        { upsert: true, new: true }
      );


      if (!updatePlan) {
        return res.json({
          message: "something went wrong!!!",
          result: 0,
        });
      }

      return res
      .status(202)
      .json({ message: "Updated Successfully", result: 1, plan: activeSubscription.name });
    }

   
    res.status(499).json({message : "Payment status is pending!!!", result : 0})
   
  } catch (err) {
    return res.json({ message: "INTERNAL_SERVER_ERROR", err: err.message });
  }
}
      

  export async function getPlans(req,res){
    try {
      const shop = res.locals.shopify.session.shop
      const response = await planModel.findOne({shop:shop})
      console.log("check getplans response",response);
      if(response){
        res.status(200).json({message:"success",data:response,status:"200"})
      }
    } catch (error) {
      console.log(error)
    }
  }

  export async function freePlans (req,res){
    try {
      console.log(req.body)
      const {plan} = req.body
      const shop = res.locals.shopify.session.shop ;
      const response = await planModel.findOneAndUpdate({ shop }, { charge_id:"", plan: plan, price: "0", interval: "MONTHLY" },
      { upsert: true, new: true })
      if(response){
        res.status(200).json({message:"success",data:response,status:"200"})
      }
    } catch (error) {
      console.log(error)
    }
  }


export async function createPlan (req,res){
const shopData = await shopInfoModel.find({},{shop:1})
var ops = []
shopData.forEach(item => {
                ops.push(
                    {
                        updateOne: {
                            filter: { shop:  item.shop },
                            update:{ shop:item.shop,interval:"MONTHLY",plan:"free",price:"0",chargeId:""},
                            upsert: true
                        }
                    }
                )
            })
           
      const createPlan =await  planModel.bulkWrite(ops, { ordered: false })
      console.log(createPlan)
      res.send("success")

}