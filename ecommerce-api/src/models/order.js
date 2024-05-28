const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product');

const Order = sequelize.define('Order', {
  // Order specific fields
});

const OrderProduct = sequelize.define('OrderProduct', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Order.belongsToMany(Product, { through: OrderProduct });
Product.belongsToMany(Order, { through: OrderProduct });

module.exports = { Order, OrderProduct };
