const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const connection = mysql.createConnection({
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'yTDsxTbxHmvSEjPvrvQLmNTvDIzUPKuP',
  database: 'railway',
  multipleStatements: true
});

const schemaPath = path.join(__dirname, 'railway-complete-schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to Railway MySQL database');

  connection.query(schema, (err, results) => {
    if (err) {
      console.error('Error executing schema:', err);
    } else {
      console.log('Schema imported successfully');
    }
    connection.end();
  });
});