const mysql = require("mysql2");
require("dotenv").config();
const connection = mysql.createConnection({
  host: 'mysql.render.internal',
  user: 'root',
  password: 'hasib',
  database: 'render',
  multipleStatements: true
});

// SQL statements to create tables
const createTablesSQL = `
CREATE TABLE IF NOT EXISTS foods (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(255) DEFAULT NULL,
  user_name varchar(255) DEFAULT NULL,
  user_photo varchar(255) DEFAULT NULL,
  status varchar(255) DEFAULT NULL,
  additional_notes text,
  expire_date int DEFAULT NULL,
  location varchar(255) DEFAULT NULL,
  quantity int DEFAULT NULL,
  food_name varchar(255) DEFAULT NULL,
  food_photo varchar(255) DEFAULT NULL,
  category varchar(255) DEFAULT NULL,
  category_image varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  userImage varchar(255) DEFAULT NULL,
  role varchar(50) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS manage_food (
  id int NOT NULL AUTO_INCREMENT,
  food_id int DEFAULT NULL,
  status varchar(255) DEFAULT NULL,
  deliveryStatus varchar(255) DEFAULT NULL,
  recipientEmail varchar(255) DEFAULT NULL,
  recipientName varchar(255) DEFAULT NULL,
  recipientImage varchar(255) DEFAULT NULL,
  requestDate varchar(255) DEFAULT NULL,
  donationMoney int DEFAULT NULL,
  additionalNotes text,
  PRIMARY KEY (id),
  KEY food_id (food_id),
  CONSTRAINT manage_food_ibfk_1 FOREIGN KEY (food_id) REFERENCES foods (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO users (username, email, password, userImage, role)
VALUES ('Likhon Sarker', 'likhonsarker@gmail.com', '$2b$10$TvfMYUi8Muba1Z0nf6fDLe3amvkpohSPP6tpFTcExcEHdcQYiUUfK', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'admin');
`;

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected successfully");
    // Create tables if they don't exist
    connection.query(createTablesSQL, (err) => {
      if (err) {
        console.error("Error creating tables:", err);
      } else {
        console.log("Database tables created/verified successfully");
      }
    });
  }
});

// Wrap the connection's query method to match the expected format
const db = {
  query: (sql, params, callback) => {
    connection.query(sql, params, callback);
  },
};

module.exports = db;
