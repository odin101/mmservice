const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  profileImage: String,
  password: String,
  githubID: String,
  googleID: String,
  offerStep:Number,
  date: { type: Date, default: Date.now },
  Offers: [{ type: Schema.Types.ObjectId, ref: 'offers' }],
  PostedBy: [{ type: Schema.Types.ObjectId, ref: 'offers' }],
},{ timestamps: true });
  
const User = mongoose.model('users', userSchema);

module.exports = User;