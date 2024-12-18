const Device = require('../Models/Device');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key';

const generateToken = (device) => {
  return jwt.sign({ id: device._id, email: device.email }, JWT_SECRET, { expiresIn: '1h' });
};

exports.addDevice = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const device = await Device.create({ userName, email, password });
    const token = generateToken(device);
    res.status(201).json({ device, token });
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
