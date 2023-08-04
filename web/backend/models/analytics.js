import mongoose, { isObjectIdOrHexString } from "mongoose"


const analyticsSchema = new mongoose.Schema({
  shop: {
    type: String,
    required: true
  },
  bundleId:{
  type:mongoose.Schema.Types.ObjectId
  },
  bundleClick:{
    type : Number
  },
  bundleSold:{
    type:Number
  },
  bundleSalesValue:{
    type:Number
  },
  bundleViews:{
    type:Number
  }

});

const analyticsModel = mongoose.model('analytics', analyticsSchema);
export default analyticsModel ;
