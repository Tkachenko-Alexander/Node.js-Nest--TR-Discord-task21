const express = require('express');
const { Sequelize } = require('sequelize');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorHandler');
const { connectRabbitMQ } = require('./utils/rabbitmq');
require('dotenv').config();

const app = express();
app.use(express.json());

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

app.use('/auth', authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Auth service listening on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    await sequelize.sync();
    await connectRabbitMQ();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
