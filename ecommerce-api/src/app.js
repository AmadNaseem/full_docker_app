const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');
const authenticate = require('./middleware/auth');
const cors = require('cors'); // Import the cors middleware
const sequelize = require('./config/database');

const app = express();

// Add CORS middleware
app.use(cors());

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/api', authenticate, productRoutes);
app.use('/api', authenticate, orderRoutes);

sequelize.sync();

module.exports = app;
