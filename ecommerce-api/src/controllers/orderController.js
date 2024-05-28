const { Order, OrderProduct } = require('../models/order');
const Product = require('../models/product');

exports.createOrder = async (req, res) => {
  const { products } = req.body; // products should be an array of { id, quantity }

  try {
    const order = await Order.create();
    for (const product of products) {
      const productData = await Product.findByPk(product.id);
      await order.addProduct(productData, { through: { quantity: product.quantity } });
    }
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const { products } = req.body; // updated products

  try {
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Clear existing products associated with the order
    await order.setProducts([]);

    // Add updated products to the order
    for (const product of products) {
      const productData = await Product.findByPk(product.id);
      await order.addProduct(productData, { through: { quantity: product.quantity } });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllOrder = async (req, res) => {

  try {
    const order = await Order.findAll();
    if (!order.length) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    await order.destroy();
    res.json({ message: 'Order removed successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByPk(id, { include: Product });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
