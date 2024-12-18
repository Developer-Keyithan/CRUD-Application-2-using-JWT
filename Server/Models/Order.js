const mongoose = require('mongoose');
const User = require('./User');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
  price: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
  quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
