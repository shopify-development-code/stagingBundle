import mongoose from "mongoose"


const pricingPlanSchema = new mongoose.Schema({
  shop: {
    type: String,
    required: true
  },
plan :{
    type:String
},
interval :{
    type:String
}
,
Price :{
    type:String
}
,
ChargeId :{
    type:String
}

},{
    timestamps:true
  });

const pricingPlanModel = mongoose.model('pricingPlan', pricingPlanSchema);
export default pricingPlanModel ;
