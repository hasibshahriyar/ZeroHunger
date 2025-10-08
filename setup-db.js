const mysql = require('mysql2/promise');
const fs = require('fs').promises;
const path = require('path');

async function runSchema() {
  const connection = await mysql.createConnection({
    host: 'mysql.railway.internal',
    user: 'root',
    password: 'yTDsxTbxHmvSEjPvrvQLmNTvDIzUPKuP',
    database: 'railway',
    multipleStatements: true
  });

  try {
    const schema = await fs.readFile(path.join(__dirname, 'railway-schema.sql'), 'utf8');
    await connection.query(schema);
    console.log('Database schema created successfully!');
  } catch (error) {
    console.error('Error creating schema:', error);
  } finally {
    await connection.end();
  }
}

runSchema();