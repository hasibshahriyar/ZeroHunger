-- ZeroHunger Database Schema
-- Clean version for MySQL import

DROP DATABASE IF EXISTS food_donation;
CREATE DATABASE food_donation;
USE food_donation;

-- Table structure for table foods
DROP TABLE IF EXISTS foods;
CREATE TABLE foods (
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
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table users
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  userImage varchar(255) DEFAULT NULL,
  role varchar(50) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email (email)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert admin user Likhon Sarker
INSERT INTO users VALUES (5,'Likhon Sarker','likhonsarker@gmail.com','$2b$10$TvfMYUi8Muba1Z0nf6fDLe3amvkpohSPP6tpFTcExcEHdcQYiUUfK','https://i.ibb.co/5cxvxkf/userr.jpg','admin');

-- Table structure for table manage_food
DROP TABLE IF EXISTS manage_food;
CREATE TABLE manage_food (
  id int NOT NULL AUTO_INCREMENT,
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
  category_image varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table rating
DROP TABLE IF EXISTS rating;
CREATE TABLE rating (
  id int NOT NULL AUTO_INCREMENT,
  date datetime DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  feedback text,
  name varchar(255) DEFAULT NULL,
  ratingValue int DEFAULT NULL,
  suggestion text,
  userImage varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
