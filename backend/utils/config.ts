require('dotenv').config();

module.exports = {
  POSTGRES_CONN_URI: process.env.POSTGRES_CONN_URI,
  PORT: process.env.PORT || 3001,
};
