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
-- Temporary table structure for view `RecipeIngredientExtended`
--

DROP TABLE IF EXISTS `RecipeIngredientExtended`;
/*!50001 DROP VIEW IF EXISTS `RecipeIngredientExtended`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `RecipeIngredientExtended` (
  `recipeId` tinyint NOT NULL,
  `recipeName` tinyint NOT NULL,
  `description` tinyint NOT NULL,
  `imageUrl` tinyint NOT NULL,
  `method` tinyint NOT NULL,
  `cookingTime` tinyint NOT NULL,
  `likes` tinyint NOT NULL,
  `quantity` tinyint NOT NULL,
  `unit` tinyint NOT NULL,
  `ingredientId` tinyint NOT NULL,
  `ingredientName` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `RecipeStarExtended`
--

DROP TABLE IF EXISTS `RecipeStarExtended`;
/*!50001 DROP VIEW IF EXISTS `RecipeStarExtended`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `RecipeStarExtended` (
  `recipeId` tinyint NOT NULL,
  `recipeName` tinyint NOT NULL,
  `description` tinyint NOT NULL,
  `imageUrl` tinyint NOT NULL,
  `method` tinyint NOT NULL,
  `cookingTime` tinyint NOT NULL,
  `likes` tinyint NOT NULL,
  `userId` tinyint NOT NULL,
  `deleteDate` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `RecipeCreatedByExtended`
--

DROP TABLE IF EXISTS `RecipeCreatedByExtended`;
/*!50001 DROP VIEW IF EXISTS `RecipeCreatedByExtended`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `RecipeCreatedByExtended` (
  `userId` tinyint NOT NULL,
  `userName` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `recipeId` tinyint NOT NULL,
  `recipeName` tinyint NOT NULL,
  `description` tinyint NOT NULL,
  `imageUrl` tinyint NOT NULL,
  `method` tinyint NOT NULL,
  `cookingTime` tinyint NOT NULL,
  `likes` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `RecipeExtended`
--

DROP TABLE IF EXISTS `RecipeExtended`;
/*!50001 DROP VIEW IF EXISTS `RecipeExtended`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `RecipeExtended` (
  `userId` tinyint NOT NULL,
  `userName` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `recipeId` tinyint NOT NULL,
  `recipeName` tinyint NOT NULL,
  `description` tinyint NOT NULL,
  `imageUrl` tinyint NOT NULL,
  `method` tinyint NOT NULL,
  `cookingTime` tinyint NOT NULL,
  `likes` tinyint NOT NULL,
  `quantity` tinyint NOT NULL,
  `unit` tinyint NOT NULL,
  `ingredientId` tinyint NOT NULL,
  `ingredientName` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `RecipeIngredientExtended`
--

/*!50001 DROP TABLE IF EXISTS `RecipeIngredientExtended`*/;
/*!50001 DROP VIEW IF EXISTS `RecipeIngredientExtended`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `RecipeIngredientExtended` AS select `R`.`id` AS `recipeId`,`R`.`name` AS `recipeName`,`R`.`desc` AS `description`,`R`.`imageUrl` AS `imageUrl`,`R`.`method` AS `method`,`R`.`cookingTime` AS `cookingTime`,`R`.`likes` AS `likes`,`RI`.`quantity` AS `quantity`,`RI`.`unit` AS `unit`,`I`.`id` AS `ingredientId`,`I`.`name` AS `ingredientName` from ((`Recipe` `R` join `RecipeIngredient` `RI` on((`RI`.`recipeId` = `R`.`id`))) join `Ingredient` `I` on((`I`.`id` = `RI`.`ingredientId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `RecipeStarExtended`
--

/*!50001 DROP TABLE IF EXISTS `RecipeStarExtended`*/;
/*!50001 DROP VIEW IF EXISTS `RecipeStarExtended`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `RecipeStarExtended` AS select `R`.`id` AS `recipeId`,`R`.`name` AS `recipeName`,`R`.`desc` AS `description`,`R`.`imageUrl` AS `imageUrl`,`R`.`method` AS `method`,`R`.`cookingTime` AS `cookingTime`,`R`.`likes` AS `likes`,`S`.`userId` AS `userId`,`S`.`deleteDate` AS `deleteDate` from (`Recipe` `R` join `Star` `S` on((`S`.`recipeId` = `R`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `RecipeCreatedByExtended`
--

/*!50001 DROP TABLE IF EXISTS `RecipeCreatedByExtended`*/;
/*!50001 DROP VIEW IF EXISTS `RecipeCreatedByExtended`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `RecipeCreatedByExtended` AS select `U`.`id` AS `userId`,`U`.`name` AS `userName`,`U`.`email` AS `email`,`R`.`id` AS `recipeId`,`R`.`name` AS `recipeName`,`R`.`desc` AS `description`,`R`.`imageUrl` AS `imageUrl`,`R`.`method` AS `method`,`R`.`cookingTime` AS `cookingTime`,`R`.`likes` AS `likes` from (`User` `U` join `Recipe` `R` on((`R`.`createdBy` = `U`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `RecipeExtended`
--

/*!50001 DROP TABLE IF EXISTS `RecipeExtended`*/;
/*!50001 DROP VIEW IF EXISTS `RecipeExtended`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `RecipeExtended` AS select `U`.`id` AS `userId`,`U`.`name` AS `userName`,`U`.`email` AS `email`,`R`.`id` AS `recipeId`,`R`.`name` AS `recipeName`,`R`.`desc` AS `description`,`R`.`imageUrl` AS `imageUrl`,`R`.`method` AS `method`,`R`.`cookingTime` AS `cookingTime`,`R`.`likes` AS `likes`,`RI`.`quantity` AS `quantity`,`RI`.`unit` AS `unit`,`I`.`id` AS `ingredientId`,`I`.`name` AS `ingredientName` from (((`User` `U` left join `Recipe` `R` on((`R`.`createdBy` = `U`.`id`))) left join `RecipeIngredient` `RI` on((`RI`.`recipeId` = `R`.`id`))) left join `Ingredient` `I` on((`I`.`id` = `RI`.`ingredientId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-08-11  2:54:42
