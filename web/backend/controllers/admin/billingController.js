export async function recurringBiling(req, res) {
    try {
  
      const { shop, plan, interval, price } = req.body;
      const session = res.locals.shopify.session;
      const API_KEY = process.env.SHOPIFY_API_KEY;
      const client = new shopify.api.clients.Graphql({session});
      let testCharge;
      if (
        shop == "nahidp-store.myshopify.com" ||
        shop == "size-chart-test.myshopify.com"
      ) {
        testCharge = true;
      } else {
        testCharge = false;
      }
      const recurringString = `mutation CreateSubscription {
              appSubscriptionCreate(
                  name: "${plan}",
        returnUrl: "https://${shop}/admin/apps/${API_KEY}/pricing"
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
  
      const response = await client.query({
        data: recurringString,
      });
  
      res.status(200).send(response);
    } catch (err) {
      return res.json({ message: "INTERNAL_SERVER_ERROR", err: err.message });
    }
  }
  
  /****************************Billing Success***************************************** */
  export async function recurringBilingSelected(req, res) {
    try {
      const { shop, charge_id } = req.body;
     const verifyBilling = await shopify.api.rest.RecurringApplicationCharge.find({
       session : res.locals.shopify.session,
       id : charge_id
     })
  
     console.log(verifyBilling, "verify");
  
     if(verifyBilling.status === "active") {
      const updatePlan = await pandaBilling.findOneAndUpdate(
        { shop },
        { charge_id, plan: verifyBilling.name, price: verifyBilling.price, interval: "MONTHLY" },
        { upsert: true, new: true }
      );
  
      if (!updatePlan) {
        return res.json({
          message: "something went wrong!!!",
          result: 0,
        });
      } else {
        return res
          .status(202)
          .json({ message: "Updated Successfully", result: 1, plan: verifyBilling.name });
      }
     } else {
        res.status(499).json({message : "Payment status is pending!!!", result : 0})
     }
    } catch (err) {
      return res.json({ message: "INTERNAL_SERVER_ERROR", err: err.message });
    }
  }