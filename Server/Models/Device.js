const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  device: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 }
}, 
{ timestamps: true });

module.exports = mongoose.model('Device', deviceSchema);
