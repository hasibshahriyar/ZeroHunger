const mysql = require("mysql2");
require("dotenv").config();
<<<<<<< HEAD

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'food_donation',
  connectTimeout: 10000,
  acquireTimeout: 10000,
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    console.log("💡 Make sure MySQL is running and database 'food_donation' exists");
  } else {
    console.log("✅ Database connected successfully");
  }
});

// Handle connection errors
connection.on('error', (err) => {
  console.error('Database error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.log('Database connection lost. Attempting to reconnect...');
=======
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected successfully");
>>>>>>> origin/main
  }
});

// Wrap the connection's query method to match the expected format
const db = {
  query: (sql, params, callback) => {
    connection.query(sql, params, callback);
  },
};

module.exports = db;
