-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: food_donation
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `foods`
--

DROP TABLE IF EXISTS `foods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_photo` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `additional_notes` text,
  `expire_date` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `food_name` varchar(255) DEFAULT NULL,
  `food_photo` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `category_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foods`
--

LOCK TABLES `foods` WRITE;
/*!40000 ALTER TABLE `foods` DISABLE KEYS */;
INSERT INTO `foods` VALUES (1,'john1@gmail.com','John Smith','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Delicious biryani made with fragrant basmati rice, tender meat, and aromatic spices.',4,'123 Main Street, Cityville',9,'Biryani','https://i.ibb.co/Xyc8z1L/biriyani.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(2,'jane2@gmail.com','Jane Doe','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Mouth-watering beef bhuna cooked with onions, tomatoes, and green chilies.',3,'456 Elm Street, Townville',7,'Beef Bhuna','https://i.ibb.co/8xsbR9D/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(3,'mike3@gmail.com','Mike Johnson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Savory chicken curry with a blend of traditional Bangladeshi spices.',5,'789 Oak Avenue, Villageton',6,'Chicken Curry','https://i.ibb.co/pypcKrg/chickenn-curry.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(4,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Authentic fish bharta made with mashed fish, onions, and spices.',2,'101 Pine Street, Hamletville',8,'Fish Bharta','https://i.ibb.co/4jTm5Yw/fish-varta.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(5,'chris5@gmail.com','Chris Wilson','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Succulent mutton rogan josh cooked in a rich gravy.',1,'202 Maple Drive, Suburbia',10,'Mutton Rogan Josh','https://i.ibb.co/nPjF4rN/mutton-rogan-josh.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(6,'sarah6@gmail.com','Sarah Taylor','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Tasty panta bhat served with fried fish, a traditional Bengali breakfast.',3,'303 Cedar Lane, Countryside',5,'Panta Bhat','https://i.ibb.co/HX2kCkX/panta-vat.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(7,'alex7@gmail.com','Alex Martinez','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Spicy fuchka filled with chickpeas, potatoes, and tangy tamarind water.',2,'404 Birch Street, Lakeside',7,'Fuchka','https://i.ibb.co/x7C68M9/fuchka.jpg','street food','https://i.ibb.co/2SSpwTL/Street-food-in-Dhaka-Chop-1.jpg'),(8,'lisa8@gmail.com','Lisa Rodriguez','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Creamy kachchi biryani layered with marinated raw meat and fragrant rice.',4,'505 Oakwood Drive, Mountainside',6,'Kachchi Biryani','https://i.ibb.co/bdrB7H2/kacchi.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(9,'ryan9@gmail.com','Ryan Thompson','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Satisfying khichuri made with rice, lentils, and a variety of spices.',5,'606 Pinecrest Road, Hilltop',4,'Khichuri','https://i.ibb.co/1z9myY6/khichuri.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(10,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Refreshing falooda dessert with vermicelli, rose syrup, and ice cream.',3,'707 Elmwood Avenue, Riverside',5,'Falooda','https://i.ibb.co/QCZn19h/faluda.jpg','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(11,'john1@gmail.com','John Smith','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Delicious beef dish made with tender meat and aromatic spices.',4,'123 Main Street, Cityville',9,'Beef Dish','https://i.ibb.co/gvHpkwj/beef-dish.webp','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(12,'mike3@gmail.com','Mike Johnson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Savory beef curry with a blend of traditional spices.',5,'789 Oak Avenue, Villageton',6,'Beef Curry','https://i.ibb.co/2FswTFB/beef-curry.webp','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(13,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Authentic beef stir-fry made with fresh vegetables and savory sauce.',2,'101 Pine Street, Hamletville',8,'Beef Stir-Fry','https://i.ibb.co/jrMQXR8/Beef-Stir-Fry.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(14,'newuser@gmail.com','New User','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Juicy beef burger with melted cheese and crispy bacon.',6,'345 Oak Street, Villageville',4,'Beef Burger','https://i.ibb.co/t2QtmsL/beef-burger.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(15,'carol6@gmail.com','Carol Johnson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Succulent grilled chicken with a tangy BBQ glaze.',5,'456 Pine Avenue, Townville',8,'BBQ Chicken','https://i.ibb.co/LNPhqPB/chicken-bbq.webp','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(16,'charlie7@gmail.com','Charlie Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Spicy chicken wings served with a side of ranch dressing.',2,'789 Elm Street, Villageton',10,'Chicken Wings',' https://i.ibb.co/yQpVVT8/BBQ-Wings-Overhead.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(17,'chloe8@gmail.com','Chloe Davis','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Homemade chicken soup made with fresh vegetables and hearty broth.',4,'101 Maple Avenue, Hamletville',4,'Chicken Soup','https://i.ibb.co/z5Qtyc4/hot-and-sour-chicken-soup-1.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(18,'carter9@gmail.com','Carter Wilson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Tender chicken tikka marinated in a blend of spices and grilled to perfection.',6,'345 Cedar Street, Villageville',7,'Chicken Tikka','https://i.ibb.co/2jQpk7C/chicken-tikka-kebab-recipe.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(19,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Treat yourself to the creamy goodness of Tiramisu, a classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.',3,'707 Elmwood Avenue, Riverside',6,'Tiramisu','https://i.ibb.co/3vRyQXv/tiramisu-square.jpg','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(20,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Satisfy your sweet tooth with a slice of New York Cheesecake, rich and creamy with a buttery graham cracker crust.',4,'707 Elmwood Avenue, Riverside',4,'New York Cheesecake','https://i.ibb.co/312Nnkk/oreo-cheesecake-recipe-SQUARE.webp','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(21,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Indulge in the heavenly flavors of a classic Apple Pie, with a flaky crust and warm, cinnamon-spiced apple filling.',5,'707 Elmwood Avenue, Riverside',3,'Apple Pie','https://i.ibb.co/Jsv8YGx/best-apple-pie-from-scratch.jpg','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(22,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Enjoy the rich and decadent taste of Chocolate Lava Cake, with a warm, gooey center that oozes with chocolate.',6,'707 Elmwood Avenue, Riverside',5,'Chocolate Lava Cake','https://i.ibb.co/3YqYD8b/flemings-steakhouses-chocolate-lava-cake-bb91b15554590c4fd2e7e550f585f0ae.png','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(23,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Savor the taste of authentic fish bharta made with mashed fish, onions, and spices.',3,'101 Pine Street, Hamletville',8,'Fish Pasta','https://i.ibb.co/KWxvM0j/Fish-Pasta.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(26,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Enjoy the crispy goodness of Fish Fingers, perfect as a snack or appetizer.',6,'101 Pine Street, Hamletville',10,'Crispy Fish Fingers','https://i.ibb.co/d4cWTYh/Crispy-Fish-Finger.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(30,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is fresh',7,'Dhaka',4,'Beef Kala Bhuna','https://i.ibb.co/qkxCYv8/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(31,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is fresh',1,'Dhaka',4,'Mutton Keema','https://i.ibb.co/DWdNcrG/mutton.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(32,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is very fresh',6,'Dhaka',4,'Fish Dopiaza','https://i.ibb.co/wWxjhF8/fish.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(33,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',3,'Dhaka',5,' beef curry','https://i.ibb.co/RDqs2YR/437334009-730944382585345-6509630626426653569-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(34,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',9,'Dhaka',4,'Roasted beef grill','https://i.ibb.co/tqcZfxR/437205618-1640722806684555-1701830971204341659-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(35,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is very tasty',5,'Dhaka',3,'Fish Grill','https://i.ibb.co/mGgvQD2/440113005-461813836281711-3974196350310569016-n.gif','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(36,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is fresh',6,'Dhaka',4,'Mutton Korma','https://i.ibb.co/rpDD5Tb/437185013-1620518175389723-7136772685513024537-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(37,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',5,'Dhaka',4,'Mutton Rezala','https://i.ibb.co/W5L28gw/435091279-1154731818895671-3440045438222042738-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(38,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',5,'Dhaka',4,'Fish Rezala','https://i.ibb.co/jh9jd38/440145293-1509783372934080-3433806451538128625-n.gif','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(39,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is fresh',4,'Dhaka',5,'mutton curry','https://i.ibb.co/H2G2BTQ/437185013-1620518175389723-7136772685513024537-n-1.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(40,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','requested','It is very tasty',6,'Dhaka',6,'Fish Curry','https://i.ibb.co/ncY6w3P/437205618-1640722806684555-1701830971204341659-n-1.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(41,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is fresh',8,'Dhaka',4,'Mutton Korma','https://i.ibb.co/5877JvT/437175726-7430565647060076-8453634043442182238-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(42,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is very tasty',4,'Dhaka',1,'Beef Curry','https://i.ibb.co/Nm2p8dY/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(45,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',2,'Dhaka',4,'Biriyani','https://i.ibb.co/HFFn1w2/biriyani.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(46,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is fresh',5,'Dhaka',3,'Fish Rezala','https://i.ibb.co/3fPjGJy/fish.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(48,'user@example.com','John Doe','https://example.com/user-photo.jpg','available','Updated notes about the food item',NULL,'456 Elm Street, Foodtown',10,'Lasagna','https://example.com/updated-food-photo.jpg','Italian','https://example.com/updated-category-image.jpg'),(49,'user@example.com','John Doe','https://example.com/user-photo.jpg','available','Fresh and home-cooked',4,'123 Main Street, Cityville',5,'Pasta','https://example.com/food-photo.jpg','Italian','https://example.com/category-image.jpg'),(50,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',1,'Dhaka',4,'Haleem','https://i.ibb.co/3TwZjXX/halim.jpg','street food','https://i.ibb.co/2SSpwTL/Street-food-in-Dhaka-Chop-1.jpg');
/*!40000 ALTER TABLE `foods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manage_food`
--

DROP TABLE IF EXISTS `manage_food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manage_food` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food_id` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `deliveryStatus` varchar(255) DEFAULT NULL,
  `recipientEmail` varchar(255) DEFAULT NULL,
  `recipientName` varchar(255) DEFAULT NULL,
  `recipientImage` varchar(255) DEFAULT NULL,
  `donorName` varchar(255) DEFAULT NULL,
  `donorEmail` varchar(255) DEFAULT NULL,
  `donorImage` varchar(255) DEFAULT NULL,
  `additional_notes` text,
  `expire_date` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `food_name` varchar(255) DEFAULT NULL,
  `food_photo` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `category_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manage_food`
--

LOCK TABLES `manage_food` WRITE;
/*!40000 ALTER TABLE `manage_food` DISABLE KEYS */;
INSERT INTO `manage_food` VALUES (1,1,'requested','pending','chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','John Smith','john1@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Delicious biryani made with fragrant basmati rice, tender meat, and aromatic spices.',4,'123 Main Street, Cityville',9,'Biryani','https://i.ibb.co/Xyc8z1L/biriyani.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(4,30,'rejected','pending','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',7,'Dhaka',4,'Beef Kala Bhuna','https://i.ibb.co/qkxCYv8/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(5,5,'requested','pending','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chris Wilson','chris5@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Succulent mutton rogan josh cooked in a rich gravy.',1,'202 Maple Drive, Suburbia',10,'Mutton Rogan Josh','https://i.ibb.co/nPjF4rN/mutton-rogan-josh.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(6,31,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',1,'Dhaka',4,'Mutton Keema','https://i.ibb.co/DWdNcrG/mutton.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(7,32,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very fresh',6,'Dhaka',4,'Fish Dopiaza','https://i.ibb.co/wWxjhF8/fish.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(9,35,'delivered','delivered','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',5,'Dhaka',3,'Fish Grill','https://i.ibb.co/mGgvQD2/440113005-461813836281711-3974196350310569016-n.gif','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(10,30,'delivered','delivered','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',7,'Dhaka',4,'Beef Kala Bhuna','https://i.ibb.co/qkxCYv8/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(11,33,'rejected','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',3,'Dhaka',5,' beef curry','https://i.ibb.co/RDqs2YR/437334009-730944382585345-6509630626426653569-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(12,34,'rejected','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',9,'Dhaka',4,'Roasted beef grill','https://i.ibb.co/tqcZfxR/437205618-1640722806684555-1701830971204341659-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(13,2,'requested','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Jane Doe','jane2@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Mouth-watering beef bhuna cooked with onions, tomatoes, and green chilies.',3,'456 Elm Street, Townville',7,'Beef Bhuna','https://i.ibb.co/8xsbR9D/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(17,42,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Afsana Mimi Eti','eti@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',4,'Dhaka',1,'Beef Curry','https://i.ibb.co/Nm2p8dY/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(18,41,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Afsana Mimi Eti','eti@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',8,'Dhaka',4,'Mutton Korma','https://i.ibb.co/5877JvT/437175726-7430565647060076-8453634043442182238-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(20,40,'requested','pending','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Afsana Mimi Eti','eti@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',6,'Dhaka',6,'Fish Curry','https://i.ibb.co/ncY6w3P/437205618-1640722806684555-1701830971204341659-n-1.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(22,8,'requested','pending','mahbub@gmail.com','Mahbub','https://i.ibb.co/5cxvxkf/userr.jpg','Lisa Rodriguez','lisa8@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Creamy kachchi biryani layered with marinated raw meat and fragrant rice.',4,'505 Oakwood Drive, Mountainside',6,'Kachchi Biryani','https://i.ibb.co/bdrB7H2/kacchi.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(23,6,'requested','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Sarah Taylor','sarah6@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Tasty panta bhat served with fried fish, a traditional Bengali breakfast.',3,'303 Cedar Lane, Countryside',5,'Panta Bhat','https://i.ibb.co/HX2kCkX/panta-vat.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(24,9,'requested','pending','chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Ryan Thompson','ryan9@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Satisfying khichuri made with rice, lentils, and a variety of spices.',5,'606 Pinecrest Road, Hilltop',4,'Khichuri','https://i.ibb.co/1z9myY6/khichuri.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg');
/*!40000 ALTER TABLE `manage_food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `feedback` text,
  `name` varchar(255) DEFAULT NULL,
  `ratingValue` int DEFAULT NULL,
  `suggestion` text,
  `userImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (9,'2025-01-18 23:59:45','chandler@gmail.com','Consider adding a feature to allow donors to connect with each other.','Chandler',4,'Consider adding a feature to allow donors to connect with each other.','https://i.ibb.co/5cxvxkf/userr.jpg'),(10,'2025-01-19 00:00:06','chandler@gmail.com','It is the best. ','Chandler',4,'It is the best','https://i.ibb.co/5cxvxkf/userr.jpg');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `userImage` varchar(255) DEFAULT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Chandler','chandler@gmail.com','$2b$10$mVudWeikmA1GJc1MLwVxcu36zFrCz3UcTYjekpIh042zABGi2Lply','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(3,'Yeasin','yeasin@gmail.com','$2b$10$pGeoVTXfehZMaXscLqevPuKiE8tYB8c38xp5peVouW4UtMavIjGWG','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(4,'Afsana Mimi Eti','eti@gmail.com','$2b$10$sswsyM/E1sTwwlFnQShtwOjMETmZBfSHWQSS/OStix3nnpyS/i2EC','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(5,'Likhon Sarker','likhonsarker@gmail.com','$2b$10$TvfMYUi8Muba1Z0nf6fDLe3amvkpohSPP6tpFTcExcEHdcQYiUUfK','https://i.ibb.co/5cxvxkf/userr.jpg','admin'),(6,'Chandler','chandlerbing@gmail.com','$2b$10$MfJUBBMM5MEiV75I0PdGiOJWTNI8wFlkJ4uDk31dEKbQmPjW7810O','https://i.ibb.co/5cxvxkf/userr.jpg','user'),(7,'Mahbub','mahbub@gmail.com','$2b$10$2AQplV4xTBAqhZ1EBQ/XmOfYRswkJk03c0d4A8YtPF8mxN3b82da2','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(8,'Rahim','rahim12@gmail.com','$2b$10$gvLfFOmJHGjwGxM5VLA1vOy4ImU9eFDa.QL6NJ/yo/eULYLLtxOgG','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(10,'Mahbub','mahbub1@gmail.com','$2b$10$BUa3cReDQZSRUOQnxps5UOqZqT.yrA1xp3CkGg/l5DF.h0slVYe4u','https://i.ibb.co/5cxvxkf/userr.jpg','donor');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-09  1:24:37

-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `foods`
--

DROP TABLE IF EXISTS `foods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_photo` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `additional_notes` text,
  `expire_date` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `food_name` varchar(255) DEFAULT NULL,
  `food_photo` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `category_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foods`
--

LOCK TABLES `foods` WRITE;
/*!40000 ALTER TABLE `foods` DISABLE KEYS */;
INSERT INTO `foods` VALUES (1,'john1@gmail.com','John Smith','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Delicious biryani made with fragrant basmati rice, tender meat, and aromatic spices.',4,'123 Main Street, Cityville',9,'Biryani','https://i.ibb.co/Xyc8z1L/biriyani.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(2,'jane2@gmail.com','Jane Doe','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Mouth-watering beef bhuna cooked with onions, tomatoes, and green chilies.',3,'456 Elm Street, Townville',7,'Beef Bhuna','https://i.ibb.co/8xsbR9D/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(3,'mike3@gmail.com','Mike Johnson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Savory chicken curry with a blend of traditional Bangladeshi spices.',5,'789 Oak Avenue, Villageton',6,'Chicken Curry','https://i.ibb.co/pypcKrg/chickenn-curry.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(4,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Authentic fish bharta made with mashed fish, onions, and spices.',2,'101 Pine Street, Hamletville',8,'Fish Bharta','https://i.ibb.co/4jTm5Yw/fish-varta.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(5,'chris5@gmail.com','Chris Wilson','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Succulent mutton rogan josh cooked in a rich gravy.',1,'202 Maple Drive, Suburbia',10,'Mutton Rogan Josh','https://i.ibb.co/nPjF4rN/mutton-rogan-josh.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(6,'sarah6@gmail.com','Sarah Taylor','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Tasty panta bhat served with fried fish, a traditional Bengali breakfast.',3,'303 Cedar Lane, Countryside',5,'Panta Bhat','https://i.ibb.co/HX2kCkX/panta-vat.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(7,'alex7@gmail.com','Alex Martinez','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Spicy fuchka filled with chickpeas, potatoes, and tangy tamarind water.',2,'404 Birch Street, Lakeside',7,'Fuchka','https://i.ibb.co/x7C68M9/fuchka.jpg','street food','https://i.ibb.co/2SSpwTL/Street-food-in-Dhaka-Chop-1.jpg'),(8,'lisa8@gmail.com','Lisa Rodriguez','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Creamy kachchi biryani layered with marinated raw meat and fragrant rice.',4,'505 Oakwood Drive, Mountainside',6,'Kachchi Biryani','https://i.ibb.co/bdrB7H2/kacchi.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(9,'ryan9@gmail.com','Ryan Thompson','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Satisfying khichuri made with rice, lentils, and a variety of spices.',5,'606 Pinecrest Road, Hilltop',4,'Khichuri','https://i.ibb.co/1z9myY6/khichuri.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(10,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Refreshing falooda dessert with vermicelli, rose syrup, and ice cream.',3,'707 Elmwood Avenue, Riverside',5,'Falooda','https://i.ibb.co/QCZn19h/faluda.jpg','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(11,'john1@gmail.com','John Smith','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Delicious beef dish made with tender meat and aromatic spices.',4,'123 Main Street, Cityville',9,'Beef Dish','https://i.ibb.co/gvHpkwj/beef-dish.webp','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(12,'mike3@gmail.com','Mike Johnson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Savory beef curry with a blend of traditional spices.',5,'789 Oak Avenue, Villageton',6,'Beef Curry','https://i.ibb.co/2FswTFB/beef-curry.webp','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(13,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Authentic beef stir-fry made with fresh vegetables and savory sauce.',2,'101 Pine Street, Hamletville',8,'Beef Stir-Fry','https://i.ibb.co/jrMQXR8/Beef-Stir-Fry.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(14,'newuser@gmail.com','New User','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Juicy beef burger with melted cheese and crispy bacon.',6,'345 Oak Street, Villageville',4,'Beef Burger','https://i.ibb.co/t2QtmsL/beef-burger.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(15,'carol6@gmail.com','Carol Johnson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Succulent grilled chicken with a tangy BBQ glaze.',5,'456 Pine Avenue, Townville',8,'BBQ Chicken','https://i.ibb.co/LNPhqPB/chicken-bbq.webp','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(16,'charlie7@gmail.com','Charlie Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Spicy chicken wings served with a side of ranch dressing.',2,'789 Elm Street, Villageton',10,'Chicken Wings',' https://i.ibb.co/yQpVVT8/BBQ-Wings-Overhead.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(17,'chloe8@gmail.com','Chloe Davis','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Homemade chicken soup made with fresh vegetables and hearty broth.',4,'101 Maple Avenue, Hamletville',4,'Chicken Soup','https://i.ibb.co/z5Qtyc4/hot-and-sour-chicken-soup-1.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(18,'carter9@gmail.com','Carter Wilson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Tender chicken tikka marinated in a blend of spices and grilled to perfection.',6,'345 Cedar Street, Villageville',7,'Chicken Tikka','https://i.ibb.co/2jQpk7C/chicken-tikka-kebab-recipe.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(19,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Treat yourself to the creamy goodness of Tiramisu, a classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.',3,'707 Elmwood Avenue, Riverside',6,'Tiramisu','https://i.ibb.co/3vRyQXv/tiramisu-square.jpg','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(20,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Satisfy your sweet tooth with a slice of New York Cheesecake, rich and creamy with a buttery graham cracker crust.',4,'707 Elmwood Avenue, Riverside',4,'New York Cheesecake','https://i.ibb.co/312Nnkk/oreo-cheesecake-recipe-SQUARE.webp','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(21,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Indulge in the heavenly flavors of a classic Apple Pie, with a flaky crust and warm, cinnamon-spiced apple filling.',5,'707 Elmwood Avenue, Riverside',3,'Apple Pie','https://i.ibb.co/Jsv8YGx/best-apple-pie-from-scratch.jpg','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(22,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Enjoy the rich and decadent taste of Chocolate Lava Cake, with a warm, gooey center that oozes with chocolate.',6,'707 Elmwood Avenue, Riverside',5,'Chocolate Lava Cake','https://i.ibb.co/3YqYD8b/flemings-steakhouses-chocolate-lava-cake-bb91b15554590c4fd2e7e550f585f0ae.png','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(23,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Savor the taste of authentic fish bharta made with mashed fish, onions, and spices.',3,'101 Pine Street, Hamletville',8,'Fish Pasta','https://i.ibb.co/KWxvM0j/Fish-Pasta.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(26,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Enjoy the crispy goodness of Fish Fingers, perfect as a snack or appetizer.',6,'101 Pine Street, Hamletville',10,'Crispy Fish Fingers','https://i.ibb.co/d4cWTYh/Crispy-Fish-Finger.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(30,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is fresh',7,'Dhaka',4,'Beef Kala Bhuna','https://i.ibb.co/qkxCYv8/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(31,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is fresh',1,'Dhaka',4,'Mutton Keema','https://i.ibb.co/DWdNcrG/mutton.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(32,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is very fresh',6,'Dhaka',4,'Fish Dopiaza','https://i.ibb.co/wWxjhF8/fish.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(33,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',3,'Dhaka',5,' beef curry','https://i.ibb.co/RDqs2YR/437334009-730944382585345-6509630626426653569-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(34,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',9,'Dhaka',4,'Roasted beef grill','https://i.ibb.co/tqcZfxR/437205618-1640722806684555-1701830971204341659-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(35,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is very tasty',5,'Dhaka',3,'Fish Grill','https://i.ibb.co/mGgvQD2/440113005-461813836281711-3974196350310569016-n.gif','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(36,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is fresh',6,'Dhaka',4,'Mutton Korma','https://i.ibb.co/rpDD5Tb/437185013-1620518175389723-7136772685513024537-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(37,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',5,'Dhaka',4,'Mutton Rezala','https://i.ibb.co/W5L28gw/435091279-1154731818895671-3440045438222042738-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(38,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',5,'Dhaka',4,'Fish Rezala','https://i.ibb.co/jh9jd38/440145293-1509783372934080-3433806451538128625-n.gif','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(39,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is fresh',4,'Dhaka',5,'mutton curry','https://i.ibb.co/H2G2BTQ/437185013-1620518175389723-7136772685513024537-n-1.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(40,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','requested','It is very tasty',6,'Dhaka',6,'Fish Curry','https://i.ibb.co/ncY6w3P/437205618-1640722806684555-1701830971204341659-n-1.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(41,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is fresh',8,'Dhaka',4,'Mutton Korma','https://i.ibb.co/5877JvT/437175726-7430565647060076-8453634043442182238-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(42,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is very tasty',4,'Dhaka',1,'Beef Curry','https://i.ibb.co/Nm2p8dY/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(45,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',2,'Dhaka',4,'Biriyani','https://i.ibb.co/HFFn1w2/biriyani.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(46,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is fresh',5,'Dhaka',3,'Fish Rezala','https://i.ibb.co/3fPjGJy/fish.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(48,'user@example.com','John Doe','https://example.com/user-photo.jpg','available','Updated notes about the food item',NULL,'456 Elm Street, Foodtown',10,'Lasagna','https://example.com/updated-food-photo.jpg','Italian','https://example.com/updated-category-image.jpg'),(49,'user@example.com','John Doe','https://example.com/user-photo.jpg','available','Fresh and home-cooked',4,'123 Main Street, Cityville',5,'Pasta','https://example.com/food-photo.jpg','Italian','https://example.com/category-image.jpg'),(50,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',1,'Dhaka',4,'Haleem','https://i.ibb.co/3TwZjXX/halim.jpg','street food','https://i.ibb.co/2SSpwTL/Street-food-in-Dhaka-Chop-1.jpg');
/*!40000 ALTER TABLE `foods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manage_food`
--

DROP TABLE IF EXISTS `manage_food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manage_food` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food_id` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `deliveryStatus` varchar(255) DEFAULT NULL,
  `recipientEmail` varchar(255) DEFAULT NULL,
  `recipientName` varchar(255) DEFAULT NULL,
  `recipientImage` varchar(255) DEFAULT NULL,
  `donorName` varchar(255) DEFAULT NULL,
  `donorEmail` varchar(255) DEFAULT NULL,
  `donorImage` varchar(255) DEFAULT NULL,
  `additional_notes` text,
  `expire_date` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `food_name` varchar(255) DEFAULT NULL,
  `food_photo` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `category_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manage_food`
--

LOCK TABLES `manage_food` WRITE;
/*!40000 ALTER TABLE `manage_food` DISABLE KEYS */;
INSERT INTO `manage_food` VALUES (1,1,'requested','pending','chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','John Smith','john1@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Delicious biryani made with fragrant basmati rice, tender meat, and aromatic spices.',4,'123 Main Street, Cityville',9,'Biryani','https://i.ibb.co/Xyc8z1L/biriyani.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(4,30,'rejected','pending','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',7,'Dhaka',4,'Beef Kala Bhuna','https://i.ibb.co/qkxCYv8/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(5,5,'requested','pending','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chris Wilson','chris5@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Succulent mutton rogan josh cooked in a rich gravy.',1,'202 Maple Drive, Suburbia',10,'Mutton Rogan Josh','https://i.ibb.co/nPjF4rN/mutton-rogan-josh.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(6,31,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',1,'Dhaka',4,'Mutton Keema','https://i.ibb.co/DWdNcrG/mutton.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(7,32,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very fresh',6,'Dhaka',4,'Fish Dopiaza','https://i.ibb.co/wWxjhF8/fish.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(9,35,'delivered','delivered','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',5,'Dhaka',3,'Fish Grill','https://i.ibb.co/mGgvQD2/440113005-461813836281711-3974196350310569016-n.gif','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(10,30,'delivered','delivered','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',7,'Dhaka',4,'Beef Kala Bhuna','https://i.ibb.co/qkxCYv8/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(11,33,'rejected','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',3,'Dhaka',5,' beef curry','https://i.ibb.co/RDqs2YR/437334009-730944382585345-6509630626426653569-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(12,34,'rejected','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',9,'Dhaka',4,'Roasted beef grill','https://i.ibb.co/tqcZfxR/437205618-1640722806684555-1701830971204341659-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(13,2,'requested','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Jane Doe','jane2@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Mouth-watering beef bhuna cooked with onions, tomatoes, and green chilies.',3,'456 Elm Street, Townville',7,'Beef Bhuna','https://i.ibb.co/8xsbR9D/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(17,42,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Afsana Mimi Eti','eti@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',4,'Dhaka',1,'Beef Curry','https://i.ibb.co/Nm2p8dY/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(18,41,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Afsana Mimi Eti','eti@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',8,'Dhaka',4,'Mutton Korma','https://i.ibb.co/5877JvT/437175726-7430565647060076-8453634043442182238-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(20,40,'requested','pending','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Afsana Mimi Eti','eti@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',6,'Dhaka',6,'Fish Curry','https://i.ibb.co/ncY6w3P/437205618-1640722806684555-1701830971204341659-n-1.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(22,8,'requested','pending','mahbub@gmail.com','Mahbub','https://i.ibb.co/5cxvxkf/userr.jpg','Lisa Rodriguez','lisa8@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Creamy kachchi biryani layered with marinated raw meat and fragrant rice.',4,'505 Oakwood Drive, Mountainside',6,'Kachchi Biryani','https://i.ibb.co/bdrB7H2/kacchi.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(23,6,'requested','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Sarah Taylor','sarah6@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Tasty panta bhat served with fried fish, a traditional Bengali breakfast.',3,'303 Cedar Lane, Countryside',5,'Panta Bhat','https://i.ibb.co/HX2kCkX/panta-vat.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(24,9,'requested','pending','chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Ryan Thompson','ryan9@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Satisfying khichuri made with rice, lentils, and a variety of spices.',5,'606 Pinecrest Road, Hilltop',4,'Khichuri','https://i.ibb.co/1z9myY6/khichuri.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg');
/*!40000 ALTER TABLE `manage_food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `feedback` text,
  `name` varchar(255) DEFAULT NULL,
  `ratingValue` int DEFAULT NULL,
  `suggestion` text,
  `userImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (9,'2025-01-18 23:59:45','chandler@gmail.com','Consider adding a feature to allow donors to connect with each other.','Chandler',4,'Consider adding a feature to allow donors to connect with each other.','https://i.ibb.co/5cxvxkf/userr.jpg'),(10,'2025-01-19 00:00:06','chandler@gmail.com','It is the best. ','Chandler',4,'It is the best','https://i.ibb.co/5cxvxkf/userr.jpg');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `userImage` varchar(255) DEFAULT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Chandler','chandler@gmail.com','$2b$10$mVudWeikmA1GJc1MLwVxcu36zFrCz3UcTYjekpIh042zABGi2Lply','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(3,'Yeasin','yeasin@gmail.com','$2b$10$pGeoVTXfehZMaXscLqevPuKiE8tYB8c38xp5peVouW4UtMavIjGWG','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(4,'Afsana Mimi Eti','eti@gmail.com','$2b$10$sswsyM/E1sTwwlFnQShtwOjMETmZBfSHWQSS/OStix3nnpyS/i2EC','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(5,'Likhon Sarker','likhonsarker@gmail.com','$2b$10$TvfMYUi8Muba1Z0nf6fDLe3amvkpohSPP6tpFTcExcEHdcQYiUUfK','https://i.ibb.co/5cxvxkf/userr.jpg','admin'),(6,'Chandler','chandlerbing@gmail.com','$2b$10$MfJUBBMM5MEiV75I0PdGiOJWTNI8wFlkJ4uDk31dEKbQmPjW7810O','https://i.ibb.co/5cxvxkf/userr.jpg','user'),(7,'Mahbub','mahbub@gmail.com','$2b$10$2AQplV4xTBAqhZ1EBQ/XmOfYRswkJk03c0d4A8YtPF8mxN3b82da2','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(8,'Rahim','rahim12@gmail.com','$2b$10$gvLfFOmJHGjwGxM5VLA1vOy4ImU9eFDa.QL6NJ/yo/eULYLLtxOgG','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(10,'Mahbub','mahbub1@gmail.com','$2b$10$BUa3cReDQZSRUOQnxps5UOqZqT.yrA1xp3CkGg/l5DF.h0slVYe4u','https://i.ibb.co/5cxvxkf/userr.jpg','donor');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-09  1:24:37

-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `foods`
--

DROP TABLE IF EXISTS `foods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_photo` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `additional_notes` text,
  `expire_date` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `food_name` varchar(255) DEFAULT NULL,
  `food_photo` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `category_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foods`
--

LOCK TABLES `foods` WRITE;
/*!40000 ALTER TABLE `foods` DISABLE KEYS */;
INSERT INTO `foods` VALUES (1,'john1@gmail.com','John Smith','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Delicious biryani made with fragrant basmati rice, tender meat, and aromatic spices.',4,'123 Main Street, Cityville',9,'Biryani','https://i.ibb.co/Xyc8z1L/biriyani.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(2,'jane2@gmail.com','Jane Doe','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Mouth-watering beef bhuna cooked with onions, tomatoes, and green chilies.',3,'456 Elm Street, Townville',7,'Beef Bhuna','https://i.ibb.co/8xsbR9D/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(3,'mike3@gmail.com','Mike Johnson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Savory chicken curry with a blend of traditional Bangladeshi spices.',5,'789 Oak Avenue, Villageton',6,'Chicken Curry','https://i.ibb.co/pypcKrg/chickenn-curry.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(4,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Authentic fish bharta made with mashed fish, onions, and spices.',2,'101 Pine Street, Hamletville',8,'Fish Bharta','https://i.ibb.co/4jTm5Yw/fish-varta.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(5,'chris5@gmail.com','Chris Wilson','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Succulent mutton rogan josh cooked in a rich gravy.',1,'202 Maple Drive, Suburbia',10,'Mutton Rogan Josh','https://i.ibb.co/nPjF4rN/mutton-rogan-josh.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(6,'sarah6@gmail.com','Sarah Taylor','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Tasty panta bhat served with fried fish, a traditional Bengali breakfast.',3,'303 Cedar Lane, Countryside',5,'Panta Bhat','https://i.ibb.co/HX2kCkX/panta-vat.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(7,'alex7@gmail.com','Alex Martinez','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Spicy fuchka filled with chickpeas, potatoes, and tangy tamarind water.',2,'404 Birch Street, Lakeside',7,'Fuchka','https://i.ibb.co/x7C68M9/fuchka.jpg','street food','https://i.ibb.co/2SSpwTL/Street-food-in-Dhaka-Chop-1.jpg'),(8,'lisa8@gmail.com','Lisa Rodriguez','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Creamy kachchi biryani layered with marinated raw meat and fragrant rice.',4,'505 Oakwood Drive, Mountainside',6,'Kachchi Biryani','https://i.ibb.co/bdrB7H2/kacchi.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(9,'ryan9@gmail.com','Ryan Thompson','https://i.ibb.co/5cxvxkf/userr.jpg','requested','Satisfying khichuri made with rice, lentils, and a variety of spices.',5,'606 Pinecrest Road, Hilltop',4,'Khichuri','https://i.ibb.co/1z9myY6/khichuri.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(10,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Refreshing falooda dessert with vermicelli, rose syrup, and ice cream.',3,'707 Elmwood Avenue, Riverside',5,'Falooda','https://i.ibb.co/QCZn19h/faluda.jpg','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(11,'john1@gmail.com','John Smith','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Delicious beef dish made with tender meat and aromatic spices.',4,'123 Main Street, Cityville',9,'Beef Dish','https://i.ibb.co/gvHpkwj/beef-dish.webp','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(12,'mike3@gmail.com','Mike Johnson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Savory beef curry with a blend of traditional spices.',5,'789 Oak Avenue, Villageton',6,'Beef Curry','https://i.ibb.co/2FswTFB/beef-curry.webp','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(13,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Authentic beef stir-fry made with fresh vegetables and savory sauce.',2,'101 Pine Street, Hamletville',8,'Beef Stir-Fry','https://i.ibb.co/jrMQXR8/Beef-Stir-Fry.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(14,'newuser@gmail.com','New User','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Juicy beef burger with melted cheese and crispy bacon.',6,'345 Oak Street, Villageville',4,'Beef Burger','https://i.ibb.co/t2QtmsL/beef-burger.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(15,'carol6@gmail.com','Carol Johnson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Succulent grilled chicken with a tangy BBQ glaze.',5,'456 Pine Avenue, Townville',8,'BBQ Chicken','https://i.ibb.co/LNPhqPB/chicken-bbq.webp','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(16,'charlie7@gmail.com','Charlie Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Spicy chicken wings served with a side of ranch dressing.',2,'789 Elm Street, Villageton',10,'Chicken Wings',' https://i.ibb.co/yQpVVT8/BBQ-Wings-Overhead.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(17,'chloe8@gmail.com','Chloe Davis','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Homemade chicken soup made with fresh vegetables and hearty broth.',4,'101 Maple Avenue, Hamletville',4,'Chicken Soup','https://i.ibb.co/z5Qtyc4/hot-and-sour-chicken-soup-1.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(18,'carter9@gmail.com','Carter Wilson','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Tender chicken tikka marinated in a blend of spices and grilled to perfection.',6,'345 Cedar Street, Villageville',7,'Chicken Tikka','https://i.ibb.co/2jQpk7C/chicken-tikka-kebab-recipe.jpg','chicken','https://i.ibb.co/0qQ0QxQ/chickennn.webp'),(19,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Treat yourself to the creamy goodness of Tiramisu, a classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.',3,'707 Elmwood Avenue, Riverside',6,'Tiramisu','https://i.ibb.co/3vRyQXv/tiramisu-square.jpg','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(20,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Satisfy your sweet tooth with a slice of New York Cheesecake, rich and creamy with a buttery graham cracker crust.',4,'707 Elmwood Avenue, Riverside',4,'New York Cheesecake','https://i.ibb.co/312Nnkk/oreo-cheesecake-recipe-SQUARE.webp','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(21,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Indulge in the heavenly flavors of a classic Apple Pie, with a flaky crust and warm, cinnamon-spiced apple filling.',5,'707 Elmwood Avenue, Riverside',3,'Apple Pie','https://i.ibb.co/Jsv8YGx/best-apple-pie-from-scratch.jpg','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(22,'olivia10@gmail.com','Olivia Garcia','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Enjoy the rich and decadent taste of Chocolate Lava Cake, with a warm, gooey center that oozes with chocolate.',6,'707 Elmwood Avenue, Riverside',5,'Chocolate Lava Cake','https://i.ibb.co/3YqYD8b/flemings-steakhouses-chocolate-lava-cake-bb91b15554590c4fd2e7e550f585f0ae.png','dessert','https://i.ibb.co/kB6H4qt/dessert.jpg'),(23,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Savor the taste of authentic fish bharta made with mashed fish, onions, and spices.',3,'101 Pine Street, Hamletville',8,'Fish Pasta','https://i.ibb.co/KWxvM0j/Fish-Pasta.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(26,'emily4@gmail.com','Emily Brown','https://i.ibb.co/5cxvxkf/userr.jpg','Available','Enjoy the crispy goodness of Fish Fingers, perfect as a snack or appetizer.',6,'101 Pine Street, Hamletville',10,'Crispy Fish Fingers','https://i.ibb.co/d4cWTYh/Crispy-Fish-Finger.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(30,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is fresh',7,'Dhaka',4,'Beef Kala Bhuna','https://i.ibb.co/qkxCYv8/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(31,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is fresh',1,'Dhaka',4,'Mutton Keema','https://i.ibb.co/DWdNcrG/mutton.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(32,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is very fresh',6,'Dhaka',4,'Fish Dopiaza','https://i.ibb.co/wWxjhF8/fish.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(33,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',3,'Dhaka',5,' beef curry','https://i.ibb.co/RDqs2YR/437334009-730944382585345-6509630626426653569-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(34,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',9,'Dhaka',4,'Roasted beef grill','https://i.ibb.co/tqcZfxR/437205618-1640722806684555-1701830971204341659-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(35,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is very tasty',5,'Dhaka',3,'Fish Grill','https://i.ibb.co/mGgvQD2/440113005-461813836281711-3974196350310569016-n.gif','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(36,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is fresh',6,'Dhaka',4,'Mutton Korma','https://i.ibb.co/rpDD5Tb/437185013-1620518175389723-7136772685513024537-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(37,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',5,'Dhaka',4,'Mutton Rezala','https://i.ibb.co/W5L28gw/435091279-1154731818895671-3440045438222042738-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(38,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',5,'Dhaka',4,'Fish Rezala','https://i.ibb.co/jh9jd38/440145293-1509783372934080-3433806451538128625-n.gif','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(39,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is fresh',4,'Dhaka',5,'mutton curry','https://i.ibb.co/H2G2BTQ/437185013-1620518175389723-7136772685513024537-n-1.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(40,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','requested','It is very tasty',6,'Dhaka',6,'Fish Curry','https://i.ibb.co/ncY6w3P/437205618-1640722806684555-1701830971204341659-n-1.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(41,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is fresh',8,'Dhaka',4,'Mutton Korma','https://i.ibb.co/5877JvT/437175726-7430565647060076-8453634043442182238-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(42,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','delivered','It is very tasty',4,'Dhaka',1,'Beef Curry','https://i.ibb.co/Nm2p8dY/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(45,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',2,'Dhaka',4,'Biriyani','https://i.ibb.co/HFFn1w2/biriyani.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(46,'eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is fresh',5,'Dhaka',3,'Fish Rezala','https://i.ibb.co/3fPjGJy/fish.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(48,'user@example.com','John Doe','https://example.com/user-photo.jpg','available','Updated notes about the food item',NULL,'456 Elm Street, Foodtown',10,'Lasagna','https://example.com/updated-food-photo.jpg','Italian','https://example.com/updated-category-image.jpg'),(49,'user@example.com','John Doe','https://example.com/user-photo.jpg','available','Fresh and home-cooked',4,'123 Main Street, Cityville',5,'Pasta','https://example.com/food-photo.jpg','Italian','https://example.com/category-image.jpg'),(50,'chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Available','It is very tasty',1,'Dhaka',4,'Haleem','https://i.ibb.co/3TwZjXX/halim.jpg','street food','https://i.ibb.co/2SSpwTL/Street-food-in-Dhaka-Chop-1.jpg');
/*!40000 ALTER TABLE `foods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manage_food`
--

DROP TABLE IF EXISTS `manage_food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manage_food` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food_id` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `deliveryStatus` varchar(255) DEFAULT NULL,
  `recipientEmail` varchar(255) DEFAULT NULL,
  `recipientName` varchar(255) DEFAULT NULL,
  `recipientImage` varchar(255) DEFAULT NULL,
  `donorName` varchar(255) DEFAULT NULL,
  `donorEmail` varchar(255) DEFAULT NULL,
  `donorImage` varchar(255) DEFAULT NULL,
  `additional_notes` text,
  `expire_date` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `food_name` varchar(255) DEFAULT NULL,
  `food_photo` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `category_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manage_food`
--

LOCK TABLES `manage_food` WRITE;
/*!40000 ALTER TABLE `manage_food` DISABLE KEYS */;
INSERT INTO `manage_food` VALUES (1,1,'requested','pending','chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','John Smith','john1@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Delicious biryani made with fragrant basmati rice, tender meat, and aromatic spices.',4,'123 Main Street, Cityville',9,'Biryani','https://i.ibb.co/Xyc8z1L/biriyani.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(4,30,'rejected','pending','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',7,'Dhaka',4,'Beef Kala Bhuna','https://i.ibb.co/qkxCYv8/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(5,5,'requested','pending','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chris Wilson','chris5@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Succulent mutton rogan josh cooked in a rich gravy.',1,'202 Maple Drive, Suburbia',10,'Mutton Rogan Josh','https://i.ibb.co/nPjF4rN/mutton-rogan-josh.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(6,31,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',1,'Dhaka',4,'Mutton Keema','https://i.ibb.co/DWdNcrG/mutton.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(7,32,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very fresh',6,'Dhaka',4,'Fish Dopiaza','https://i.ibb.co/wWxjhF8/fish.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(9,35,'delivered','delivered','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',5,'Dhaka',3,'Fish Grill','https://i.ibb.co/mGgvQD2/440113005-461813836281711-3974196350310569016-n.gif','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(10,30,'delivered','delivered','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',7,'Dhaka',4,'Beef Kala Bhuna','https://i.ibb.co/qkxCYv8/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(11,33,'rejected','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',3,'Dhaka',5,' beef curry','https://i.ibb.co/RDqs2YR/437334009-730944382585345-6509630626426653569-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(12,34,'rejected','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Chandler','chandler@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',9,'Dhaka',4,'Roasted beef grill','https://i.ibb.co/tqcZfxR/437205618-1640722806684555-1701830971204341659-n.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(13,2,'requested','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Jane Doe','jane2@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Mouth-watering beef bhuna cooked with onions, tomatoes, and green chilies.',3,'456 Elm Street, Townville',7,'Beef Bhuna','https://i.ibb.co/8xsbR9D/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(17,42,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Afsana Mimi Eti','eti@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',4,'Dhaka',1,'Beef Curry','https://i.ibb.co/Nm2p8dY/beef.jpg','beef','https://i.ibb.co/Qd4Dg2b/beef.jpg'),(18,41,'delivered','delivered','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Afsana Mimi Eti','eti@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is fresh',8,'Dhaka',4,'Mutton Korma','https://i.ibb.co/5877JvT/437175726-7430565647060076-8453634043442182238-n.jpg','mutton','https://i.ibb.co/jTTmD2W/mutton.jpg'),(20,40,'requested','pending','yeasin@gmail.com','Yeasin','https://i.ibb.co/5cxvxkf/userr.jpg','Afsana Mimi Eti','eti@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','It is very tasty',6,'Dhaka',6,'Fish Curry','https://i.ibb.co/ncY6w3P/437205618-1640722806684555-1701830971204341659-n-1.jpg','fish','https://i.ibb.co/5xk1HZ7/fish.jpg'),(22,8,'requested','pending','mahbub@gmail.com','Mahbub','https://i.ibb.co/5cxvxkf/userr.jpg','Lisa Rodriguez','lisa8@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Creamy kachchi biryani layered with marinated raw meat and fragrant rice.',4,'505 Oakwood Drive, Mountainside',6,'Kachchi Biryani','https://i.ibb.co/bdrB7H2/kacchi.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(23,6,'requested','pending','eti@gmail.com','Afsana Mimi Eti','https://i.ibb.co/5cxvxkf/userr.jpg','Sarah Taylor','sarah6@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Tasty panta bhat served with fried fish, a traditional Bengali breakfast.',3,'303 Cedar Lane, Countryside',5,'Panta Bhat','https://i.ibb.co/HX2kCkX/panta-vat.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg'),(24,9,'requested','pending','chandler@gmail.com','Chandler','https://i.ibb.co/5cxvxkf/userr.jpg','Ryan Thompson','ryan9@gmail.com','https://i.ibb.co/5cxvxkf/userr.jpg','Satisfying khichuri made with rice, lentils, and a variety of spices.',5,'606 Pinecrest Road, Hilltop',4,'Khichuri','https://i.ibb.co/1z9myY6/khichuri.jpg','rice','https://i.ibb.co/RB9bDKt/ricee.jpg');
/*!40000 ALTER TABLE `manage_food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `feedback` text,
  `name` varchar(255) DEFAULT NULL,
  `ratingValue` int DEFAULT NULL,
  `suggestion` text,
  `userImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (9,'2025-01-18 23:59:45','chandler@gmail.com','Consider adding a feature to allow donors to connect with each other.','Chandler',4,'Consider adding a feature to allow donors to connect with each other.','https://i.ibb.co/5cxvxkf/userr.jpg'),(10,'2025-01-19 00:00:06','chandler@gmail.com','It is the best. ','Chandler',4,'It is the best','https://i.ibb.co/5cxvxkf/userr.jpg');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `userImage` varchar(255) DEFAULT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Chandler','chandler@gmail.com','$2b$10$mVudWeikmA1GJc1MLwVxcu36zFrCz3UcTYjekpIh042zABGi2Lply','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(3,'Yeasin','yeasin@gmail.com','$2b$10$pGeoVTXfehZMaXscLqevPuKiE8tYB8c38xp5peVouW4UtMavIjGWG','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(4,'Afsana Mimi Eti','eti@gmail.com','$2b$10$sswsyM/E1sTwwlFnQShtwOjMETmZBfSHWQSS/OStix3nnpyS/i2EC','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(5,'Likhon Sarker','likhonsarker@gmail.com','$2b$10$TvfMYUi8Muba1Z0nf6fDLe3amvkpohSPP6tpFTcExcEHdcQYiUUfK','https://i.ibb.co/5cxvxkf/userr.jpg','admin'),(6,'Chandler','chandlerbing@gmail.com','$2b$10$MfJUBBMM5MEiV75I0PdGiOJWTNI8wFlkJ4uDk31dEKbQmPjW7810O','https://i.ibb.co/5cxvxkf/userr.jpg','user'),(7,'Mahbub','mahbub@gmail.com','$2b$10$2AQplV4xTBAqhZ1EBQ/XmOfYRswkJk03c0d4A8YtPF8mxN3b82da2','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(8,'Rahim','rahim12@gmail.com','$2b$10$gvLfFOmJHGjwGxM5VLA1vOy4ImU9eFDa.QL6NJ/yo/eULYLLtxOgG','https://i.ibb.co/5cxvxkf/userr.jpg','donor'),(10,'Mahbub','mahbub1@gmail.com','$2b$10$BUa3cReDQZSRUOQnxps5UOqZqT.yrA1xp3CkGg/l5DF.h0slVYe4u','https://i.ibb.co/5cxvxkf/userr.jpg','donor');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-09  1:24:37
