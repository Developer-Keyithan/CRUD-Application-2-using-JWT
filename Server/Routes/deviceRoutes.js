const express = require('express');
const { addDevice, getAllDevices, getDeviceById, updateDevice, deleteDevice } = require('../Controllers/deviceController');
const { protect } = require('../Middleware/auth');

const router = express.Router();

router.post('/', addDevice);
router.get('/', protect, getAllDevices);
router.get('/:id', protect, getDeviceById);
router.put('/:id', protect, updateDevice);
router.delete('/:id', protect, deleteDevice);

module.exports = router;