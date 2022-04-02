/* eslint-disable no-undef */
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  FILE_HOST,
  FILE_PORT
} = process.env;
