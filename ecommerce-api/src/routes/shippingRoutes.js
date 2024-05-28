const express = require('express');
const router = express.Router();
const shippingController = require('../controllers/shippingController');

router.get('/shipping-cost', shippingController.getShippingCost);

module.exports = router;
