-- ZeroHunger Database Schema for Railway
USE railway;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Table structure for table `foods`
CREATE TABLE `foods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_photo` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `additional_notes` text DEFAULT NULL,
  `expire_date` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `food_name` varchar(255) DEFAULT NULL,
  `food_photo` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `category_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `manage_food`
CREATE TABLE `manage_food` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `food_id` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `deliveryStatus` varchar(255) DEFAULT NULL,
  `recipientEmail` varchar(255) DEFAULT NULL,
  `recipientName` varchar(255) DEFAULT NULL,
  `recipientImage` varchar(255) DEFAULT NULL,
  `donorName` varchar(255) DEFAULT NULL,
  `donorEmail` varchar(255) DEFAULT NULL,
  `donorImage` varchar(255) DEFAULT NULL,
  `additional_notes` text DEFAULT NULL,
  `expire_date` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `food_name` varchar(255) DEFAULT NULL,
  `food_photo` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `category_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `rating`
CREATE TABLE `rating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `feedback` text DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `ratingValue` int(11) DEFAULT NULL,
  `suggestion` text DEFAULT NULL,
  `userImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `users`
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `userImage` varchar(255) DEFAULT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert users data
INSERT INTO users VALUES
(2, 'Chandler', 'chandler@gmail.com', '$2b$10$mVudWeikmA1GJc1MLwVxcu36zFrCz3UcTYjekpIh042zABGi2Lply', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor'),
(3, 'Yeasin', 'yeasin@gmail.com', '$2b$10$pGeoVTXfehZMaXscLqevPuKiE8tYB8c38xp5peVouW4UtMavIjGWG', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor'),
(4, 'Afsana Mimi Eti', 'eti@gmail.com', '$2b$10$sswsyM/E1sTwwlFnQShtwOjMETmZBfSHWQSS/OStix3nnpyS/i2EC', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor'),
(5, 'Likhon Sarker', 'likhonsarker@gmail.com', '$2b$10$TvfMYUi8Muba1Z0nf6fDLe3amvkpohSPP6tpFTcExcEHdcQYiUUfK', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor'),
(6, 'Chandler', 'chandlerbing@gmail.com', '$2b$10$MfJUBBMM5MEiV75I0PdGiOJWTNI8wFlkJ4uDk31dEKbQmPjW7810O', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'user'),
(7, 'Mahbub', 'mahbub@gmail.com', '$2b$10$2AQplV4xTBAqhZ1EBQ/XmOfYRswkJk03c0d4A8YtPF8mxN3b82da2', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor'),
(8, 'Rahim', 'rahim12@gmail.com', '$2b$10$gvLfFOmJHGjwGxM5VLA1vOy4ImU9eFDa.QL6NJ/yo/eULYLLtxOgG', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor'),
(10, 'Mahbub', 'mahbub1@gmail.com', '$2b$10$BUa3cReDQZSRUOQnxps5UOqZqT.yrA1xp3CkGg/l5DF.h0slVYe4u', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor'),
(11, 'hasib', 'shasib212085@bscse.uiu.ac.bd', '$2b$10$nwzVsfUoys49fVk65zo4fO/K3Tz5g2dhPN/AGuJAlGe5LTaicJzX2', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'admin'),
(12, 'Nahi', 'nahi@gmail.com', '$2b$10$9EAEPhQ6VWEIHsXTH3UXAe03JP4pdr18Bzv3ChrTwBvJALRlyPCD6', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'donor'),
(13, 'Niloy', 'niloy@gmail.com', '$2b$10$FphTqQvoY10z5SiytLWu/.MohCQcfsR.Eege1a00NEcuLHjk1Q/vq', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'user');

-- Insert foods data
INSERT INTO foods (id, email, user_name, user_photo, status, additional_notes, expire_date, location, quantity, food_name, food_photo, category, category_image) VALUES
(1, 'john1@gmail.com', 'John Smith', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'Delicious biryani made with fragrant basmati rice, tender meat, and aromatic spices.', 4, '123 Main Street, Cityville', 9, 'Biryani', 'https://i.ibb.co/Xyc8z1L/biriyani.jpg', 'rice', 'https://i.ibb.co/RB9bDKt/ricee.jpg'),
(2, 'jane2@gmail.com', 'Jane Doe', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'Mouth-watering beef bhuna cooked with onions, tomatoes, and green chilies.', 3, '456 Elm Street, Townville', 7, 'Beef Bhuna', 'https://i.ibb.co/8xsbR9D/beef.jpg', 'beef', 'https://i.ibb.co/Qd4Dg2b/beef.jpg'),
(4, 'emily4@gmail.com', 'Emily Brown', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'Authentic fish bharta made with mashed fish, onions, and spices.', 2, '101 Pine Street, Hamletville', 8, 'Fish Bharta', 'https://i.ibb.co/4jTm5Yw/fish-varta.jpg', 'fish', 'https://i.ibb.co/5xk1HZ7/fish.jpg'),
(5, 'chris5@gmail.com', 'Chris Wilson', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'Succulent mutton rogan josh cooked in a rich gravy.', 1, '202 Maple Drive, Suburbia', 10, 'Mutton Rogan Josh', 'https://i.ibb.co/nPjF4rN/mutton-rogan-josh.jpg', 'mutton', 'https://i.ibb.co/jTTmD2W/mutton.jpg'),
(6, 'sarah6@gmail.com', 'Sarah Taylor', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'Tasty panta bhat served with fried fish, a traditional Bengali breakfast.', 3, '303 Cedar Lane, Countryside', 5, 'Panta Bhat', 'https://i.ibb.co/HX2kCkX/panta-vat.jpg', 'rice', 'https://i.ibb.co/RB9bDKt/ricee.jpg'),
(7, 'alex7@gmail.com', 'Alex Martinez', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'Spicy fuchka filled with chickpeas, potatoes, and tangy tamarind water.', 2, '404 Birch Street, Lakeside', 7, 'Fuchka', 'https://i.ibb.co/x7C68M9/fuchka.jpg', 'street food', 'https://i.ibb.co/2SSpwTL/Street-food-in-Dhaka-Chop-1.jpg'),
(8, 'lisa8@gmail.com', 'Lisa Rodriguez', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'Creamy kachchi biryani layered with marinated raw meat and fragrant rice.', 4, '505 Oakwood Drive, Mountainside', 6, 'Kachchi Biryani', 'https://i.ibb.co/bdrB7H2/kacchi.jpg', 'rice', 'https://i.ibb.co/RB9bDKt/ricee.jpg'),
(9, 'ryan9@gmail.com', 'Ryan Thompson', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'Satisfying khichuri made with rice, lentils, and a variety of spices.', 5, '606 Pinecrest Road, Hilltop', 4, 'Khichuri', 'https://i.ibb.co/1z9myY6/khichuri.jpg', 'rice', 'https://i.ibb.co/RB9bDKt/ricee.jpg'),
(10, 'olivia10@gmail.com', 'Olivia Garcia', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'Refreshing falooda dessert with vermicelli, rose syrup, and ice cream.', 3, '707 Elmwood Avenue, Riverside', 5, 'Falooda', 'https://i.ibb.co/QCZn19h/faluda.jpg', 'dessert', 'https://i.ibb.co/kB6H4qt/dessert.jpg'),
(11, 'john1@gmail.com', 'John Smith', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'Delicious beef dish made with tender meat and aromatic spices.', 4, '123 Main Street, Cityville', 9, 'Beef Dish', 'https://i.ibb.co/gvHpkwj/beef-dish.webp', 'beef', 'https://i.ibb.co/Qd4Dg2b/beef.jpg'),
(12, 'mike3@gmail.com', 'Mike Johnson', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'Savory beef curry with a blend of traditional spices.', 5, '789 Oak Avenue, Villageton', 6, 'Beef Curry', 'https://i.ibb.co/2FswTFB/beef-curry.webp', 'beef', 'https://i.ibb.co/Qd4Dg2b/beef.jpg'),
(30, 'chandler@gmail.com', 'Chandler', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'delivered', 'It is fresh', 7, 'Dhaka', 4, 'Beef Kala Bhuna', 'https://i.ibb.co/qkxCYv8/beef.jpg', 'beef', 'https://i.ibb.co/Qd4Dg2b/beef.jpg'),
(31, 'chandler@gmail.com', 'Chandler', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'delivered', 'It is fresh', 1, 'Dhaka', 4, 'Mutton Keema', 'https://i.ibb.co/DWdNcrG/mutton.jpg', 'mutton', 'https://i.ibb.co/jTTmD2W/mutton.jpg'),
(32, 'chandler@gmail.com', 'Chandler', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'delivered', 'It is very fresh', 6, 'Dhaka', 4, 'Fish Dopiaza', 'https://i.ibb.co/wWxjhF8/fish.jpg', 'fish', 'https://i.ibb.co/5xk1HZ7/fish.jpg'),
(39, 'eti@gmail.com', 'Afsana Mimi Eti', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'It is fresh', 4, 'Dhaka', 5, 'mutton curry', 'https://i.ibb.co/H2G2BTQ/437185013-1620518175389723-7136772685513024537-n-1.jpg', 'mutton', 'https://i.ibb.co/jTTmD2W/mutton.jpg'),
(40, 'eti@gmail.com', 'Afsana Mimi Eti', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'requested', 'It is very tasty', 6, 'Dhaka', 6, 'Fish Curry', 'https://i.ibb.co/ncY6w3P/437205618-1640722806684555-1701830971204341659-n-1.jpg', 'fish', 'https://i.ibb.co/5xk1HZ7/fish.jpg'),
(41, 'eti@gmail.com', 'Afsana Mimi Eti', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'delivered', 'It is fresh', 8, 'Dhaka', 4, 'Mutton Korma', 'https://i.ibb.co/5877JvT/437175726-7430565647060076-8453634043442182238-n.jpg', 'mutton', 'https://i.ibb.co/jTTmD2W/mutton.jpg'),
(50, 'chandler@gmail.com', 'Chandler', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Available', 'It is very tasty', 1, 'Dhaka', 4, 'Haleem', 'https://i.ibb.co/3TwZjXX/halim.jpg', 'street food', 'https://i.ibb.co/2SSpwTL/Street-food-in-Dhaka-Chop-1.jpg');

-- Insert manage_food data
INSERT INTO manage_food (id, food_id, status, deliveryStatus, recipientEmail, recipientName, recipientImage, donorName, donorEmail, donorImage, additional_notes, expire_date, location, quantity, food_name, food_photo, category, category_image) VALUES
(1, 1, 'requested', 'pending', 'chandler@gmail.com', 'Chandler', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'John Smith', 'john1@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Delicious biryani made with fragrant basmati rice, tender meat, and aromatic spices.', 4, '123 Main Street, Cityville', 9, 'Biryani', 'https://i.ibb.co/Xyc8z1L/biriyani.jpg', 'rice', 'https://i.ibb.co/RB9bDKt/ricee.jpg'),
(4, 30, 'rejected', 'pending', 'yeasin@gmail.com', 'Yeasin', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Chandler', 'chandler@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'It is fresh', 7, 'Dhaka', 4, 'Beef Kala Bhuna', 'https://i.ibb.co/qkxCYv8/beef.jpg', 'beef', 'https://i.ibb.co/Qd4Dg2b/beef.jpg'),
(5, 5, 'requested', 'pending', 'yeasin@gmail.com', 'Yeasin', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Chris Wilson', 'chris5@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Succulent mutton rogan josh cooked in a rich gravy.', 1, '202 Maple Drive, Suburbia', 10, 'Mutton Rogan Josh', 'https://i.ibb.co/nPjF4rN/mutton-rogan-josh.jpg', 'mutton', 'https://i.ibb.co/jTTmD2W/mutton.jpg'),
(6, 31, 'delivered', 'delivered', 'yeasin@gmail.com', 'Yeasin', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Chandler', 'chandler@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'It is fresh', 1, 'Dhaka', 4, 'Mutton Keema', 'https://i.ibb.co/DWdNcrG/mutton.jpg', 'mutton', 'https://i.ibb.co/jTTmD2W/mutton.jpg'),
(7, 32, 'delivered', 'delivered', 'yeasin@gmail.com', 'Yeasin', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Chandler', 'chandler@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'It is very fresh', 6, 'Dhaka', 4, 'Fish Dopiaza', 'https://i.ibb.co/wWxjhF8/fish.jpg', 'fish', 'https://i.ibb.co/5xk1HZ7/fish.jpg'),
(9, 35, 'delivered', 'delivered', 'eti@gmail.com', 'Afsana Mimi Eti', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Chandler', 'chandler@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'It is very tasty', 5, 'Dhaka', 3, 'Fish Grill', 'https://i.ibb.co/mGgvQD2/440113005-461813836281711-3974196350310569016-n.gif', 'fish', 'https://i.ibb.co/5xk1HZ7/fish.jpg'),
(13, 2, 'requested', 'pending', 'eti@gmail.com', 'Afsana Mimi Eti', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Jane Doe', 'jane2@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Mouth-watering beef bhuna cooked with onions, tomatoes, and green chilies.', 3, '456 Elm Street, Townville', 7, 'Beef Bhuna', 'https://i.ibb.co/8xsbR9D/beef.jpg', 'beef', 'https://i.ibb.co/Qd4Dg2b/beef.jpg'),
(17, 42, 'delivered', 'delivered', 'yeasin@gmail.com', 'Yeasin', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Afsana Mimi Eti', 'eti@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'It is very tasty', 4, 'Dhaka', 1, 'Beef Curry', 'https://i.ibb.co/Nm2p8dY/beef.jpg', 'beef', 'https://i.ibb.co/Qd4Dg2b/beef.jpg'),
(20, 40, 'requested', 'pending', 'yeasin@gmail.com', 'Yeasin', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Afsana Mimi Eti', 'eti@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'It is very tasty', 6, 'Dhaka', 6, 'Fish Curry', 'https://i.ibb.co/ncY6w3P/437205618-1640722806684555-1701830971204341659-n-1.jpg', 'fish', 'https://i.ibb.co/5xk1HZ7/fish.jpg'),
(22, 8, 'requested', 'pending', 'mahbub@gmail.com', 'Mahbub', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Lisa Rodriguez', 'lisa8@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Creamy kachchi biryani layered with marinated raw meat and fragrant rice.', 4, '505 Oakwood Drive, Mountainside', 6, 'Kachchi Biryani', 'https://i.ibb.co/bdrB7H2/kacchi.jpg', 'rice', 'https://i.ibb.co/RB9bDKt/ricee.jpg'),
(24, 9, 'requested', 'pending', 'chandler@gmail.com', 'Chandler', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Ryan Thompson', 'ryan9@gmail.com', 'https://i.ibb.co/5cxvxkf/userr.jpg', 'Satisfying khichuri made with rice, lentils, and a variety of spices.', 5, '606 Pinecrest Road, Hilltop', 4, 'Khichuri', 'https://i.ibb.co/1z9myY6/khichuri.jpg', 'rice', 'https://i.ibb.co/RB9bDKt/ricee.jpg');

-- Insert rating data
INSERT INTO rating (id, date, email, feedback, name, ratingValue, suggestion, userImage) VALUES
(11, '2025-09-27 20:02:00', 'nahi@gmail.com', 'Best Site', 'Nahi', 4, 'Good', 'https://i.ibb.co/5cxvxkf/userr.jpg');