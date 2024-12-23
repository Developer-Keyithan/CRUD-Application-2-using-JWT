const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
  price: { type: Number, required: true }, // Store price directly
  quantity: { type: Number, required: true, min: 1 } // Ensure quantity is at least 1
}, 
{ timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Order', orderSchema);
