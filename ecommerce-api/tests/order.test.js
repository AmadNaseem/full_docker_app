const request = require('supertest');
const app = require('../src/app');
const sequelize = require('../src/config/database');
const Product = require('../src/models/product');
const Order = require('../src/models/order');

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await Product.create({ name: 'Test Product', price: 10.99 });
});

describe('Order API', () => {
  it('should create an order with a product', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({ products: [{ id: 1, quantity: 2 }] })
      .set('Authorization', `Bearer ${yourValidJWT}`);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  // Add more tests for update, getOrder
});
