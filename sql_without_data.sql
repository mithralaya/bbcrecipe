SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `bbcrecipe` ;
CREATE SCHEMA IF NOT EXISTS `bbcrecipe` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `bbcrecipe` ;

-- -----------------------------------------------------
-- Table `bbcrecipe`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bbcrecipe`.`User` ;

CREATE TABLE IF NOT EXISTS `bbcrecipe`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbcrecipe`.`Recipe`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bbcrecipe`.`Recipe` ;

CREATE TABLE IF NOT EXISTS `bbcrecipe`.`Recipe` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(80) NOT NULL,
  `desc` VARCHAR(255) NULL,
  `imageUrl` VARCHAR(255) NULL,
  `method` BLOB NULL,
  `cookingTime` INT NULL,
  `likes` INT NOT NULL DEFAULT 0,
  `createdBy` INT NOT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_Recipe_User_idx` (`createdBy` ASC),
  CONSTRAINT `fk_Recipe_User`
    FOREIGN KEY (`createdBy`)
    REFERENCES `bbcrecipe`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbcrecipe`.`Star`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bbcrecipe`.`Star` ;

CREATE TABLE IF NOT EXISTS `bbcrecipe`.`Star` (
  `userId` INT NOT NULL,
  `recipeId` INT NOT NULL,
  `timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteDate` DATETIME NULL,
  PRIMARY KEY (`userId`, `recipeId`),
  INDEX `fk_User_has_Recipe_Recipe1_idx` (`recipeId` ASC),
  INDEX `fk_User_has_Recipe_User1_idx` (`userId` ASC),
  CONSTRAINT `fk_User_has_Recipe_User1`
    FOREIGN KEY (`userId`)
    REFERENCES `bbcrecipe`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_Recipe_Recipe1`
    FOREIGN KEY (`recipeId`)
    REFERENCES `bbcrecipe`.`Recipe` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbcrecipe`.`Ingredient`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bbcrecipe`.`Ingredient` ;

CREATE TABLE IF NOT EXISTS `bbcrecipe`.`Ingredient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbcrecipe`.`RecipeIngredient`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bbcrecipe`.`RecipeIngredient` ;

CREATE TABLE IF NOT EXISTS `bbcrecipe`.`RecipeIngredient` (
  `recipeId` INT NOT NULL,
  `ingredientId` INT NOT NULL,
  `quantity` INT NOT NULL,
  `unit` VARCHAR(45) NULL,
  PRIMARY KEY (`recipeId`, `ingredientId`),
  INDEX `fk_Recipe_has_Ingredients_Ingredients1_idx` (`ingredientId` ASC),
  INDEX `fk_Recipe_has_Ingredients_Recipe1_idx` (`recipeId` ASC),
  CONSTRAINT `fk_Recipe_has_Ingredients_Recipe1`
    FOREIGN KEY (`recipeId`)
    REFERENCES `bbcrecipe`.`Recipe` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recipe_has_Ingredients_Ingredients1`
    FOREIGN KEY (`ingredientId`)
    REFERENCES `bbcrecipe`.`Ingredient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `bbcrecipe` ;

-- -----------------------------------------------------
-- Placeholder table for view `bbcrecipe`.`RecipeCreatedByExtended`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbcrecipe`.`RecipeCreatedByExtended` (`userId` INT, `userName` INT, `email` INT, `recipeId` INT, `recipeName` INT, `description` INT, `imageUrl` INT, `method` INT, `cookingTime` INT, `likes` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bbcrecipe`.`RecipeStarExtended`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbcrecipe`.`RecipeStarExtended` (`recipeId` INT, `recipeName` INT, `description` INT, `imageUrl` INT, `method` INT, `cookingTime` INT, `likes` INT, `userId` INT, `deleteDate` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bbcrecipe`.`RecipeIngredientExtended`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbcrecipe`.`RecipeIngredientExtended` (`recipeId` INT, `recipeName` INT, `description` INT, `imageUrl` INT, `method` INT, `cookingTime` INT, `likes` INT, `quantity` INT, `unit` INT, `ingredientId` INT, `ingredientName` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bbcrecipe`.`RecipeExtended`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbcrecipe`.`RecipeExtended` (`userId` INT, `userName` INT, `email` INT, `recipeId` INT, `recipeName` INT, `description` INT, `imageUrl` INT, `method` INT, `cookingTime` INT, `likes` INT, `quantity` INT, `unit` INT, `ingredientId` INT, `ingredientName` INT);

-- -----------------------------------------------------
-- View `bbcrecipe`.`RecipeCreatedByExtended`
-- -----------------------------------------------------
DROP VIEW IF EXISTS `bbcrecipe`.`RecipeCreatedByExtended` ;
DROP TABLE IF EXISTS `bbcrecipe`.`RecipeCreatedByExtended`;
USE `bbcrecipe`;
CREATE  OR REPLACE VIEW `RecipeCreatedByExtended` AS
SELECT U.id AS userId, U.name AS userName, U.email AS email,
R.id AS recipeId, R.name AS recipeName, R.desc AS description, R.imageUrl AS imageUrl, R.method AS method, R.cookingTime AS cookingTime, R.likes AS likes  FROM User U
INNER JOIN Recipe R
ON R.createdBy = U.id
;

-- -----------------------------------------------------
-- View `bbcrecipe`.`RecipeStarExtended`
-- -----------------------------------------------------
DROP VIEW IF EXISTS `bbcrecipe`.`RecipeStarExtended` ;
DROP TABLE IF EXISTS `bbcrecipe`.`RecipeStarExtended`;
USE `bbcrecipe`;
CREATE  OR REPLACE VIEW `RecipeStarExtended` AS
SELECT R.id AS recipeId, R.name AS recipeName, R.desc AS description, R.imageUrl AS imageUrl, R.method AS method, R.cookingTime as cookingTime, R.likes AS likes,
S.userId AS userId, S.deleteDate AS deleteDate FROM Recipe R
INNER JOIN Star S
ON S.recipeId = R.id
;

-- -----------------------------------------------------
-- View `bbcrecipe`.`RecipeIngredientExtended`
-- -----------------------------------------------------
DROP VIEW IF EXISTS `bbcrecipe`.`RecipeIngredientExtended` ;
DROP TABLE IF EXISTS `bbcrecipe`.`RecipeIngredientExtended`;
USE `bbcrecipe`;
CREATE  OR REPLACE VIEW `RecipeIngredientExtended` AS
SELECT R.id AS recipeId, R.name AS recipeName, R.desc AS description, R.imageUrl AS imageUrl, R.method AS method, R.cookingTime AS cookingTime, R.likes AS likes,
RI.quantity AS quantity, RI.unit AS unit,
I.id AS ingredientId, I.name AS ingredientName FROM Recipe R
INNER JOIN RecipeIngredient RI
ON RI.recipeId = R.id
INNER JOIN Ingredient I
ON I.id = RI.ingredientId;

-- -----------------------------------------------------
-- View `bbcrecipe`.`RecipeExtended`
-- -----------------------------------------------------
DROP VIEW IF EXISTS `bbcrecipe`.`RecipeExtended` ;
DROP TABLE IF EXISTS `bbcrecipe`.`RecipeExtended`;
USE `bbcrecipe`;
CREATE  OR REPLACE VIEW `RecipeExtended` AS
SELECT U.id AS userId, U.name AS userName, U.email AS email,
R.id AS recipeId, R.name AS recipeName, R.desc AS description, R.imageUrl AS imageUrl, R.method AS method, R.cookingTime AS cookingTime, R.likes AS likes,
RI.quantity AS quantity, RI.unit AS unit, I.id AS ingredientId, I.name AS ingredientName FROM User U
LEFT JOIN Recipe R
ON R.createdBy = U.id
LEFT JOIN RecipeIngredient RI
ON RI.recipeId = R.id
LEFT JOIN Ingredient I
ON I.id = RI.ingredientId;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
