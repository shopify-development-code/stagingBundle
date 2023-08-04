import mongoose from "mongoose"


const pageDataSchema = new mongoose.Schema({
  shop: {
    type: String,
    required: true
  },
pageId :{
    type:Number
}

});

const pageDataModel = mongoose.model('pageData', pageDataSchema);
export default pageDataModel ;
