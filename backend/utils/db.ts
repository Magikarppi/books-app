import { Sequelize } from 'sequelize';
const { POSTGRES_CONN_URI } = require('./config');

const sequelize = new Sequelize(POSTGRES_CONN_URI!, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('connected to database');
  } catch (error) {
    console.log('connecting to database failed');
    return process.exit(1);
  }

  return null;
};

module.exports = { connectToDatabase, sequelize };
