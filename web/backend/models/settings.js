import mongoose from "mongoose"


const settingSchema = new mongoose.Schema({
  shop: {
    type: String,
    required: true
  },
   discountLabel:{
    type:String
   }

});

const settingModel = mongoose.model('settings', settingSchema);
export default settingModel ;
