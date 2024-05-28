const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add routes for updateProduct, removeProduct, getProduct
router.post('/products', productController.addProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.removeProduct);
router.get('/products/:id', productController.getProduct);
router.get('/products', productController.getAllProduct);

module.exports = router;
