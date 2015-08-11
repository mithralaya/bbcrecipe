CREATE DATABASE  IF NOT EXISTS `bbcrecipe` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `bbcrecipe`;
-- MySQL dump 10.13  Distrib 5.6.13, for osx10.6 (i386)
--
-- Host: bbcrecipe.cgwi22ojphnb.eu-west-1.rds.amazonaws.com    Database: bbcrecipe
-- ------------------------------------------------------
-- Server version	5.6.23-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Recipe`
--

DROP TABLE IF EXISTS `Recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Recipe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `method` blob,
  `cookingTime` int(11) DEFAULT NULL,
  `likes` int(11) NOT NULL DEFAULT '0',
  `createdBy` int(11) NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_Recipe_User_idx` (`createdBy`),
  CONSTRAINT `fk_Recipe_User` FOREIGN KEY (`createdBy`) REFERENCES `User` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Recipe`
--

LOCK TABLES `Recipe` WRITE;
/*!40000 ALTER TABLE `Recipe` DISABLE KEYS */;
INSERT INTO `Recipe` VALUES (1,'Lemon Chicken','Whip up a lemon butter sauce in next to no time to make something special of simple fried chicken breasts.','1.jpg',NULL,30,0,1,'2015-08-09 11:52:49'),(3,'Beef stroganoff','Rick Stein cooks up a classic Russian beef stroganoff recipe, and reveals his incredibly moreish matchstick potatoes.','2.jpg',NULL,30,0,2,'2015-08-09 13:46:45'),(4,'Caesar salad','This easy Caesar salad recipe uses all the ingredients you’d expect to find, but varies the method to make it lighter.','3.jpg',NULL,20,0,4,'2015-08-09 16:02:28'),(5,'Scottish cranachan','Originally, the traditional Scottish cranachan celebrated the harvest, but now it is enjoyed year-round. There are many variations, but in all of them the trick is the slow toasting of the oatmeal; this is then mixed into the dish at the last minute so th','4.jpg',NULL,25,0,5,'2015-08-09 16:21:47'),(7,'Chicken and cashew nut stir-fry','Crisp fried chicken with stir-fried vegetables and cashew nuts. Serve with steamed jasmine rice.','5.jpg',NULL,30,0,6,'2015-08-09 17:04:56'),(9,'Stir-fried chilli pork','Quick and easy, this stir-fried pork recipe is great if you need a tasty dinner on the table in a matter of minutes.','6.jpg',NULL,15,0,7,'2015-08-09 17:07:42'),(10,'Frosted walnut layer cake','Mary Berry\'s spectacular walnut cake is perfect for special occasions - with three layers there\'s sure to be a slice for everyone!\nMary Berry\'s spectacular walnut cake is perfect for special occasions - with three layers there\'s sure to be a slice for eve','7.jpg',NULL,35,0,8,'2015-08-09 17:29:27'),(11,'Tiramisu','Why, you may ask, do we need another recipe for tiramisu? It is now as common as apple crumble. But I was particularly taken by this one in Venice, which had elevated the pudding to a fine-dining level simply by putting it in a cocktail glass and using a ','8.jpg',NULL,30,0,2,'2015-08-09 17:29:27'),(12,'Spicy  Beans on Toast','Looking for something a bit different for brunch this weekend? Try beans on toast with a spicy Italian twist.','9.jpg',NULL,30,0,1,'2015-08-09 17:40:33'),(13,'Mango and mangotout noodle','Perfect for family Sunday brunch. This dish is a celebration of flavours and healthy ','11.jpg',NULL,15,0,10,'2015-08-09 18:06:40'),(14,'Tuna Bean Salad','Similar to a tuna Nicoise, this salad has the addition of canned beans for extra fibre. Use drained and rinsed red kidney beans if you can’t find mixed beans.\nWith a GI of 50 this meal is high protein, low GI and provides 390 kcal per portion','10.jpg',NULL,15,0,9,'2015-08-09 17:52:04'),(15,'Sambuca Kisses','It’s hard to explain the precise nature of these: they are light, almost like doughnuts, but made of scented, sweet air rather than batter. Strictly speaking, you shouldn’t leave them to stand, once they’ve been made. But pleasurable though it is to eat t','11.jpg',NULL,45,0,11,'0000-00-00 00:00:00'),(16,'Devil\'s food cake','Forget the name, this cake is heavenly. The crumb is tender, the filling and frosting luscious.','12.jpg',NULL,60,0,11,'2015-08-09 18:37:28');
/*!40000 ALTER TABLE `Recipe` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-08-11  2:54:39
