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

  pricingPlanSchema.index({ shop: 1 });
const pricingPlanModel = mongoose.model('pricingPlan', pricingPlanSchema);
export default pricingPlanModel ;
