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
-- Table structure for table `RecipeIngredient`
--

DROP TABLE IF EXISTS `RecipeIngredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RecipeIngredient` (
  `recipeId` int(11) NOT NULL,
  `ingredientId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`recipeId`,`ingredientId`),
  KEY `fk_Recipe_has_Ingredients_Ingredients1_idx` (`ingredientId`),
  KEY `fk_Recipe_has_Ingredients_Recipe1_idx` (`recipeId`),
  CONSTRAINT `fk_Recipe_has_Ingredients_Ingredients1` FOREIGN KEY (`ingredientId`) REFERENCES `Ingredient` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recipe_has_Ingredients_Recipe1` FOREIGN KEY (`recipeId`) REFERENCES `Recipe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RecipeIngredient`
--

LOCK TABLES `RecipeIngredient` WRITE;
/*!40000 ALTER TABLE `RecipeIngredient` DISABLE KEYS */;
INSERT INTO `RecipeIngredient` VALUES (1,1,2,'tbsp'),(1,2,1,'x'),(1,3,1,NULL),(1,4,5,'tbsp'),(1,5,30,'g'),(1,6,5,'g'),(1,7,5,'g'),(1,8,10,'x'),(3,3,2,'tbsp'),(3,5,65,'g'),(3,7,5,'g'),(3,9,675,'g'),(3,10,2,'tbsp'),(3,11,1,'large'),(3,12,350,'g'),(3,13,3,'tbsp'),(3,14,300,'ml'),(3,15,20,'x'),(4,1,1,'tbsp'),(4,16,3,'slices'),(4,17,1,'x'),(4,18,2,'x'),(4,19,1,'tbsp'),(4,20,1,'x'),(4,21,4,'x'),(5,22,250,'g'),(5,23,20,'x'),(5,24,40,'g'),(5,25,200,'g'),(5,26,400,'ml'),(5,27,2,'tbsp'),(5,28,3,'tbsp'),(7,29,1,'x'),(7,30,1,'tbsp'),(7,31,1,'pinch'),(7,32,500,'g'),(7,33,300,'ml'),(7,34,1,'x'),(7,35,1,'x'),(7,36,1,'x'),(7,37,3,'tbsp'),(7,38,2,'large'),(7,39,3,'tbsp'),(7,40,1,'cup'),(9,62,1,'tbsp'),(9,63,2,'tbsp'),(9,64,2,'tbsp'),(9,65,2,'tbsp'),(9,66,1,'tbsp'),(9,67,800,'g'),(9,68,3,'tbsp'),(9,69,4,'x'),(9,70,3,'x'),(9,71,6,'x'),(10,41,225,'g'),(10,42,1,'tbsp'),(10,43,100,'g'),(10,44,225,'g'),(10,45,225,'g'),(10,46,4,'large'),(10,47,100,'g'),(11,48,3,'x'),(11,49,75,'g'),(11,50,75,'g'),(11,51,6,'x'),(11,52,600,'g'),(11,53,600,'g'),(12,54,2,'x'),(12,55,2,'tbsp'),(12,56,1,'clove'),(12,57,1,'tbsp'),(12,58,1,'tsp'),(12,59,100,'x'),(12,60,1,'tsp'),(12,61,55,'g'),(13,82,450,'g'),(13,83,2,'x'),(13,84,175,'g'),(13,85,6,'x'),(13,86,1,'stalk'),(13,87,1,'handful'),(13,88,2,'x'),(13,89,2,'tbsp'),(13,90,2,'tsp'),(13,91,1,'tbsp'),(13,92,6,'tbsp'),(13,93,1,'tbsp'),(13,94,3,'tbsp'),(13,95,1,'tsp'),(14,72,100,'g'),(14,73,2,'x'),(14,74,400,'g'),(14,75,100,'g'),(14,76,4,'x'),(14,77,160,'g'),(14,78,1,'tbsp'),(14,79,1,'tsp'),(14,80,1,'tsp'),(14,81,1,'tsp'),(15,96,1,'x'),(15,97,100,'g'),(15,98,40,'g'),(15,99,1,'tsp'),(15,100,2,'tsp'),(15,101,1,'tsp'),(15,102,1,'zest'),(15,103,1,'tbsp'),(16,104,50,'g'),(16,105,100,'g'),(16,106,250,'ml'),(16,107,125,'g'),(16,108,150,'g'),(16,109,225,'g'),(16,110,1,'tsp'),(16,111,1,'tsp'),(16,112,2,'tsp'),(16,113,2,'x');
/*!40000 ALTER TABLE `RecipeIngredient` ENABLE KEYS */;
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
