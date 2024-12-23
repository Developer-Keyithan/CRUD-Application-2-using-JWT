const Order = require('../Models/Order');
const Device = require('../Models/Device');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.SECRET_KEY;

const generateToken = (order) => {
  return jwt.sign({ id: order._id, email: order.email }, JWT_SECRET, { expiresIn: '1h' });
};

exports.placeOrder = async (req, res) => {
  const { userId, deviceId, quantity } = req.body;

  try {
    const device = await Device.findById(deviceId);
    if (!device) return res.status(404).json({ error: 'Device not found' });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const totalPrice = device.price * quantity;

    const order = await Order.create({
      user: userId,
      device: deviceId,
      price: device.price,
      quantity
    });

    res.status(201).json({ message: 'Order placed successfully', order, totalPrice });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'userName email')
      .populate('device', 'name price');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};