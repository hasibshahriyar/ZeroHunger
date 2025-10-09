const { Pool } = require('pg');
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://food_donation_db_vf7r_user:8AqH7lC1Pw6oYCa8MjSEhf99LdjBtoLd@dpg-d3jf07mr433s73990te0-a.singapore-postgres.render.com/food_donation_db_vf7r?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

// SQL statements to create tables
const createTablesSQL = `
CREATE TABLE IF NOT EXISTS foods (
  id SERIAL PRIMARY KEY,
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
  category_image varchar(255) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  userImage varchar(255) DEFAULT NULL,
  role varchar(50) NOT NULL,
  UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS manage_food (
  id SERIAL PRIMARY KEY,
  food_id int DEFAULT NULL,
  status varchar(255) DEFAULT NULL,
  deliveryStatus varchar(255) DEFAULT NULL,
  recipientEmail varchar(255) DEFAULT NULL,
  recipientName varchar(255) DEFAULT NULL,
  recipientImage varchar(255) DEFAULT NULL,
  donorName varchar(255) DEFAULT NULL,
  donorEmail varchar(255) DEFAULT NULL,
  donorImage varchar(255) DEFAULT NULL,
  additional_notes text,
  expire_date int DEFAULT NULL,
  location varchar(255) DEFAULT NULL,
  quantity int DEFAULT NULL,
  food_name varchar(255) DEFAULT NULL,
  food_photo varchar(255) DEFAULT NULL,
  category varchar(255) DEFAULT NULL,
  category_image varchar(255) DEFAULT NULL
);

INSERT INTO foods (id, email, user_name, user_photo, status, additional_notes, expire_date, location, quantity, food_name, food_photo, category, category_image) VALUES
(1, 'john1@gmail.com', 'John Smith', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'Delicious biryani made with fragrant basmati rice, tender meat, and aromatic spices.', 4, '123 Main Street, Cityville', 9, 'Biryani', 'https://i.ibb.co/Xyc8z1L/biriyani.jpg', 'rice', 'https://i.ibb.co/RB9bDKt/ricee.jpg'),
(2, 'jane2@gmail.com', 'Jane Doe', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'Mouth-watering beef bhuna cooked with onions, tomatoes, and green chilies.', 3, '456 Elm Street, Townville', 7, 'Beef Bhuna', 'https://i.ibb.co/8xsbR9D/beef.jpg', 'beef', 'https://i.ibb.co/Qd4Dg2b/beef.jpg'),
(4, 'emily4@gmail.com', 'Emily Brown', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'Authentic fish bharta made with mashed fish, onions, and spices.', 2, '101 Pine Street, Hamletville', 8, 'Fish Bharta', 'https://i.ibb.co/4jTm5Yw/fish-varta.jpg', 'fish', 'https://i.ibb.co/5xk1HZ7/fish.jpg'),
(15, 'carol6@gmail.com', 'Carol Johnson', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'Succulent grilled chicken with a tangy BBQ glaze.', 5, '456 Pine Avenue, Townville', 8, 'BBQ Chicken', 'https://i.ibb.co/LNPhqPB/chicken-bbq.webp', 'chicken', 'https://i.ibb.co/0qQ0QxQ/chickennn.webp'),
(16, 'charlie7@gmail.com', 'Charlie Brown', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'Spicy chicken wings served with a side of ranch dressing.', 2, '789 Elm Street, Villageton', 10, 'Chicken Wings', ' https://i.ibb.co/yQpVVT8/BBQ-Wings-Overhead.jpg', 'chicken', 'https://i.ibb.co/0qQ0QxQ/chickennn.webp'),
(19, 'olivia10@gmail.com', 'Olivia Garcia', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'Treat yourself to the creamy goodness of Tiramisu, a classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.', 3, '707 Elmwood Avenue, Riverside', 6, 'Tiramisu', 'https://i.ibb.co/3vRyQXv/tiramisu-square.jpg', 'dessert', 'https://i.ibb.co/kB6H4qt/dessert.jpg'),
(20, 'olivia10@gmail.com', 'Olivia Garcia', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'Satisfy your sweet tooth with a slice of New York Cheesecake, rich and creamy with a buttery graham cracker crust.', 4, '707 Elmwood Avenue, Riverside', 4, 'New York Cheesecake', 'https://i.ibb.co/312Nnkk/oreo-cheesecake-recipe-SQUARE.webp', 'dessert', 'https://i.ibb.co/kB6H4qt/dessert.jpg'),
(39, 'eti@gmail.com', 'Afsana Mimi Eti', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'It is fresh', 4, 'Dhaka', 5, 'mutton curry', 'https://i.ibb.co/H2G2BTQ/437185013-1620518175389723-7136772685513024537-n-1.jpg', 'mutton', 'https://i.ibb.co/jTTmD2W/mutton.jpg'),
(40, 'eti@gmail.com', 'Afsana Mimi Eti', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'It is very tasty', 6, 'Dhaka', 6, 'Fish Curry', 'https://i.ibb.co/ncY6w3P/437205618-1640722806684555-1701830971204341659-n-1.jpg', 'fish', 'https://i.ibb.co/5xk1HZ7/fish.jpg'),
(52, 'nahi@gmail.com', 'Nahi', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'I have extra food to donate.', 10, 'Haji Camp, Airport, Dhaka', 3, 'Bashmati', 'https://i.ibb.co/rKJVpfr3/OIP.webp', 'rice', 'https://i.ibb.co/RB9bDKt/ricee.jpg')
ON CONFLICT (id) DO NOTHING;

INSERT INTO users (id, username, email, password, userImage, role) VALUES
(2, 'Chandler', 'chandler@gmail.com', '$2b$10$mVudWeikmA1GJc1MLwVxcu36zFrCz3UcTYjekpIh042zABGi2Lply', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor'),
(3, 'Yeasin', 'yeasin@gmail.com', '$2b$10$pGeoVTXfehZMaXscLqevPuKiE8tYB8c38xp5peVouW4UtMavIjGWG', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor'),
(4, 'Afsana Mimi Eti', 'eti@gmail.com', '$2b$10$sswsyM/E1sTwwlFnQShtwOjMETmZBfSHWQSS/OStix3nnpyS/i2EC', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor'),
(5, 'Likhon Sarker', 'likhonsarker@gmail.com', '$2b$10$TvfMYUi8Muba1Z0nf6fDLe3amvkpohSPP6tpFTcExcEHdcQYiUUfK', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'admin'),
(11, 'hasib', 'shasib212085@bscse.uiu.ac.bd', '$2b$10$nwzVsfUoys49fVk65zo4fO/K3Tz5g2dhPN/AGuJAlGe5LTaicJzX2', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'admin'),
(12, 'Nahi', 'nahi@gmail.com', '$2b$10$9EAEPhQ6VWEIHsXTH3UXAe03JP4pdr18Bzv3ChrTwBvJALRlyPCD6', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor')
ON CONFLICT (id) DO NOTHING;

INSERT INTO manage_food (id, food_id, status, deliveryStatus, recipientEmail, recipientName, recipientImage, donorName, donorEmail, donorImage, additional_notes, expire_date, location, quantity, food_name, food_photo, category, category_image) VALUES
(1, 1, 'requested', 'pending', 'chandler@gmail.com', 'Chandler', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'John Smith', 'john1@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Delicious biryani made with fragrant basmati rice, tender meat, and aromatic spices.', 4, '123 Main Street, Cityville', 9, 'Biryani', 'https://i.ibb.co/Xyc8z1L/biriyani.jpg', 'rice', 'https://i.ibb.co/RB9bDKt/ricee.jpg'),
(20, 40, 'requested', 'pending', 'yeasin@gmail.com', 'Yeasin', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Afsana Mimi Eti', 'eti@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'It is very tasty', 6, 'Dhaka', 6, 'Fish Curry', 'https://i.ibb.co/ncY6w3P/437205618-1640722806684555-1701830971204341659-n-1.jpg', 'fish', 'https://i.ibb.co/5xk1HZ7/fish.jpg')
ON CONFLICT (id) DO NOTHING;
`;

pool.connect()
  .then(() => {
    console.log("Database connected successfully");
    // Create tables if they don't exist
    return pool.query(createTablesSQL);
  })
  .then(() => {
    console.log("Database tables created/verified successfully");
  })
  .catch(err => {
    console.error("Database connection failed:", err);
  });

// Wrap the pool's query method to match the expected format
const db = {
  query: (sql, params) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, params)
        .then(result => resolve(result.rows))
        .catch(err => reject(err));
    });
  },
};

module.exports = db;
