const { Pool } = require('pg');

const pool = new Pool({
  user: 'yourUsername', // replace with your database username
  host: 'localhost', // replace with your database host
  database: 'mydatabase', // replace with your database name
  password: 'yourPassword', // replace with your database password
  port: 5432, // replace with your database port
});

module.exports = pool;