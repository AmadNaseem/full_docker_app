require('dotenv').config(); // Ensure this is the first line
const app = require('./app');
const sequelize = require('./config/database'); // Importing sequelize to check the connection

const PORT = process.env.PORT || 5000;

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
