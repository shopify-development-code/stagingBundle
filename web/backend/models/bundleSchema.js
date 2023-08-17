import mongoose from "mongoose"


const bundleSchema = new mongoose.Schema({
  shop: {
    type: String,
    required: true
  },
  type:{
       type:String
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  status: {
    type: String,
    enum : ["active","draft"],
    default: 'draft'
  },
  currencyCode:{
    type:String
  },
  bundleDetail:{
    type:Object
  },
  startdate:{
    type:String
  },
  endDate:{
    type:String
  },
  timeZone:{
    type:String
  }
 
},{
  timestamps:true
});


bundleSchema.index({ shop: 1 },function(err, result) {
  if(err) {
     console.log(err);

  } else {
    console.log(result);
 } 
});

const bundleModel = mongoose.model('bundleData', bundleSchema);
export default bundleModel ;