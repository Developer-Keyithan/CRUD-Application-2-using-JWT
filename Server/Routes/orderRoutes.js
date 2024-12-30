const express = require('express');
const { placeOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require('../Controllers/orderController');
const { protect } = require('../Middleware/auth');

const router = express.Router();

router.post('/', placeOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;