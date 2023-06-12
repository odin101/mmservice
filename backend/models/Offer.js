
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  Game: { type: String, required: true },
  product: { type: String, required: false },
  price:{required:false,  type:Number },
  stock:{required:false,  type:Number },
  title:{ type: String, required: false },
  desc:{ type: String, required: false },
  deliveryDetails:{ type: String, required: false },
  delivery:{ type: String, required: false },
  duration:{ type: String, required: false }, 
  PostedBy:{type:Schema.Types.ObjectId, ref: 'users'},
  creating:{type:Boolean, required:true},
  Image:{type:String},
  date: { type: Date, default: Date.now }
},{ timestamps: true });
  
const Offer = mongoose.model('offers', offerSchema);

module.exports = Offer;