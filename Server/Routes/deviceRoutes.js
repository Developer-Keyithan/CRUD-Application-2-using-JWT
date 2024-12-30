const express = require('express');
const { addDevice, getAllDevices, getDeviceById, updateDevice, deleteDevice } = require('../Controllers/deviceController');
const { protect } = require('../Middleware/auth');

const router = express.Router();

router.post('/', addDevice);
router.get('/',  getAllDevices);
router.get('/:id',  getDeviceById);
router.put('/:id',  updateDevice);
router.delete('/:id',  deleteDevice);

module.exports = router;