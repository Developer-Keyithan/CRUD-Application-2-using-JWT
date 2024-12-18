const express = require('express');
const { placeOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require('../Controllers/orderController');
const { protect } = require('../Middleware/auth');

const router = express.Router();

router.post('/', placeOrder);
router.get('/', protect, getAllOrders);
router.get('/:id', protect, getOrderById);
router.put('/:id', protect, updateOrder);
router.delete('/:id', protect, deleteOrder);

module.exports = router;