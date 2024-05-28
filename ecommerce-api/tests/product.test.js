const request = require('supertest');
const app = require('../src/app');
const sequelize = require('../src/config/database');
const Product = require('../src/models/product');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Product API', () => {
  it('should create a product', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({ name: 'Test Product', price: 10.99 })
      .set('Authorization', `Bearer ${yourValidJWT}`);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test Product');
  });

  // Add more tests for update, remove, getProduct
});
