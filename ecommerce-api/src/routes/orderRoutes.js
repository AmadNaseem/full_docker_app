const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Add routes for updateOrder, getOrder
router.post('/orders', orderController.createOrder);
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.deleteOrder);
router.get('/orders/:id', orderController.getOrder);
router.get('/orders', orderController.getAllOrder);

module.exports = router;
