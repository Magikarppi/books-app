require('dotenv').config();
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize(process.env.POSTGRES_CONN_URI!, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
