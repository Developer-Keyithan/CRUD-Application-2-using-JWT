const Device = require('../Models/Device');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.SECRET_KEY;

const generateToken = (device) => {
  return jwt.sign({ id: device._id, email: device.email }, JWT_SECRET, { expiresIn: '1h' });
};

exports.addDevice = async (req, res) => {
  const { device, description, price } = req.body;

  try {
    const newDevice = await Device.create({ device, description, price });
    res.status(201).json({ message: 'Device added successfully', newDevice });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getDeviceById = async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) return res.status(404).json({ error: 'Device not found' });
    res.status(200).json(device);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDevice = async (req, res) => {
  try {
    const device = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!device) return res.status(404).json({ error: 'Device not found' });
    res.status(200).json(device);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDevice = async (req, res) => {
  try {
    const device = await Device.findByIdAndDelete(req.params.id);
    if (!device) return res.status(404).json({ error: 'Device not found' });
    res.status(200).json({ message: 'Device deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
