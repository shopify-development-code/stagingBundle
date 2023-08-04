import mongoose from "mongoose"


const discountBundleIdSchema = new mongoose.Schema({
  shop: {
    type: String,
    required: true
  },
discountId :{
    type:String
}

});

const discountIdModel = mongoose.model('discountId', discountBundleIdSchema);
export default discountIdModel ;
