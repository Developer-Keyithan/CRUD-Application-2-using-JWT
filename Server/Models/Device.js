const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  device: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true }
});

module.exports = mongoose.model('Device', deviceSchema);
