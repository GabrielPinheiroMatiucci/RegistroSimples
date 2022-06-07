const mysqlPromise = require('mysql2/promise');
require('dotenv').config();

const {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_DATABASE,
} = process.env;

const connection = mysqlPromise.createPool({
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  host: MYSQL_HOST,
  database: MYSQL_DATABASE,
});

module.exports = connection;
