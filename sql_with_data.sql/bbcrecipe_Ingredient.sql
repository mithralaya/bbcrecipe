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
-- Table structure for table `Ingredient`
--

DROP TABLE IF EXISTS `Ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ingredient` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ingredient`
--

LOCK TABLES `Ingredient` WRITE;
/*!40000 ALTER TABLE `Ingredient` DISABLE KEYS */;
INSERT INTO `Ingredient` VALUES (1,'olive oil','2015-08-09 11:51:03'),(2,'chicken breast','2015-08-09 11:51:04'),(3,'lemon juice','2015-08-09 11:51:04'),(4,'white wine','2015-08-09 11:51:04'),(5,'butter','2015-08-09 11:51:04'),(6,'flour','2015-08-09 11:51:04'),(7,'salt','2015-08-09 11:51:04'),(8,'black pepper','2015-08-09 11:51:04'),(9,'beef fillet','2015-08-09 13:48:33'),(10,'paprika','2015-08-09 13:48:33'),(11,'onion','2015-08-09 13:48:33'),(12,'mushrooms','2015-08-09 13:48:33'),(13,'sunflower oil','2015-08-09 13:48:34'),(14,'soured cream','2015-08-09 13:48:34'),(15,'parsley leaves','2015-08-09 13:48:34'),(16,'sourdough bread','2015-08-09 16:10:42'),(17,'garlic clove','2015-08-09 16:10:42'),(18,'Cos lettuce','2015-08-09 16:10:43'),(19,'parmesan cheese','2015-08-09 16:10:43'),(20,'egg yolk','2015-08-09 16:10:43'),(21,'anchovies','2015-08-09 16:10:43'),(22,'clear honey','2015-08-09 16:23:33'),(23,'cardamom pods','2015-08-09 16:23:33'),(24,'coarse oatmeal','2015-08-09 16:23:33'),(25,'raspberries','2015-08-09 16:23:33'),(26,'double cream','2015-08-09 16:23:33'),(27,'malt whisky','2015-08-09 16:23:33'),(28,'rosewater','2015-08-09 16:23:34'),(29,'free-range egg','2015-08-09 16:57:51'),(30,'cornflour','2015-08-09 16:57:51'),(31,'sea salt','2015-08-09 16:57:51'),(32,'groundnut oil','2015-08-09 16:57:51'),(33,'onion','2015-08-09 16:57:51'),(34,'yellow pepper','2015-08-09 16:57:51'),(35,'red pepper','2015-08-09 16:57:52'),(36,'chicken stock','2015-08-09 16:57:52'),(37,'light soy sauce','2015-08-09 16:57:52'),(38,'spring onions','2015-08-09 16:57:52'),(39,'roasted cashew nuts','2015-08-09 16:57:52'),(40,'steamed jasmine rice','2015-08-09 16:57:52'),(41,'self-raising flour','2015-08-09 17:24:11'),(42,'baking powder','2015-08-09 17:24:11'),(43,'Walnuts','2015-08-09 17:24:11'),(44,'Butter','2015-08-09 17:24:11'),(45,'caster sugar','2015-08-09 17:24:11'),(46,'free-range eggs','2015-08-09 17:24:11'),(47,'vanilla extract','2015-08-09 17:24:11'),(48,'Eggs','2015-08-09 17:31:21'),(49,'Caster Sugar','2015-08-09 17:31:21'),(50,'Plain flour','2015-08-09 17:31:22'),(51,'Icing Sugar','2015-08-09 17:31:22'),(52,'Mascarpone','2015-08-09 17:31:22'),(53,'Vanilla Extract','2015-08-09 17:31:22'),(54,'Diagonal Sibatta Slices','2015-08-09 17:43:05'),(55,'Olive Oil','2015-08-09 17:43:05'),(56,'Garlic','2015-08-09 17:43:05'),(57,'Dried Chillies','2015-08-09 17:43:05'),(58,'Onion ','2015-08-09 17:43:05'),(59,'Spinach','2015-08-09 17:43:05'),(60,'Salt','2015-08-09 17:43:05'),(61,'Kidney Beans','2015-08-09 17:43:05'),(62,'soy sauce','2015-08-09 17:45:02'),(63,'mirin','2015-08-09 17:45:02'),(64,'hoisin sauce','2015-08-09 17:45:02'),(65,'sesame oil','2015-08-09 17:45:03'),(66,'dired chilli flakes','2015-08-09 17:45:03'),(67,'pork fillet','2015-08-09 17:45:03'),(68,'sunflower oil','2015-08-09 17:45:03'),(69,'garlic cloves','2015-08-09 17:45:03'),(70,'red chillies','2015-08-09 17:45:03'),(71,'spring onions','2015-08-09 17:45:03'),(72,'green beans','2015-08-09 17:55:50'),(73,'free range eggs','2015-08-09 17:55:51'),(74,'beans','2015-08-09 17:55:51'),(75,'cherry tomatoes','2015-08-09 17:55:51'),(76,'spring onions','2015-08-09 17:55:51'),(77,'tuna steak','2015-08-09 17:55:51'),(78,'extra virgin olive oil','2015-08-09 17:55:51'),(79,'red wine vinegar','2015-08-09 17:55:52'),(80,'Dijon mustard','2015-08-09 17:55:52'),(81,'sea salt','2015-08-09 17:56:15'),(82,'rice noodles','2015-08-09 18:09:24'),(83,'mangoes','2015-08-09 18:09:26'),(84,'mangetout','2015-08-09 18:09:26'),(85,'spring onions','2015-08-09 18:09:26'),(86,'fresh coriander','2015-08-09 18:09:26'),(87,'mint','2015-08-09 18:09:26'),(88,'zest','2015-08-09 18:09:26'),(89,'honey','2015-08-09 18:09:26'),(90,'ginger','2015-08-09 18:09:26'),(91,'fish sauce','2015-08-09 18:09:26'),(92,'sunflower oil','2015-08-09 18:09:27'),(93,'sesame oil','2015-08-09 18:09:27'),(94,'sesame seeds','2015-08-09 18:09:27'),(95,'black pepper','2015-08-09 18:09:27'),(96,'egg','2015-08-09 18:20:24'),(97,'ricotta','2015-08-09 18:20:24'),(98,'plain flour','2015-08-09 18:20:24'),(99,'sambuca liqueur','2015-08-09 18:20:24'),(100,'sugar','2015-08-09 18:20:24'),(101,'orange','2015-08-09 18:20:25'),(102,'corn oil','2015-08-09 18:20:25'),(103,'icing sugar','2015-08-09 18:20:25'),(104,'Cocoa powder','2015-08-09 18:41:41'),(105,'sugar','2015-08-09 18:41:41'),(106,'boiling water','2015-08-09 18:41:42'),(107,'unsalted water','2015-08-09 18:41:42'),(108,'caster sugar','2015-08-09 18:41:42'),(109,'plain flour','2015-08-09 18:41:42'),(110,'baking powder','2015-08-09 18:41:42'),(111,'bicorbonate soda','2015-08-09 18:41:42'),(112,'vanilla extract','2015-08-09 18:41:42'),(113,'free range eggs','2015-08-09 18:41:42');
/*!40000 ALTER TABLE `Ingredient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-08-11  2:54:41
