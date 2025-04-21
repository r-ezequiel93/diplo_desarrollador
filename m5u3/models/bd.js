const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'diplo_martes'
});

const promisePool = pool.promise();
module.exports = promisePool;