-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sql9374391
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sql9374391
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sql9374391` DEFAULT CHARACTER SET latin1 ;
USE `sql9374391` ;

-- -----------------------------------------------------
-- Table `sql9374391`.`Types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql9374391`.`Types` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Name` VARCHAR(45) NOT NULL,
  `Type_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) VISIBLE,
  INDEX `fk_Types_Types1_idx` (`Type_id` ASC) VISIBLE,
  CONSTRAINT `fk_Types_Types1`
    FOREIGN KEY (`Type_id`)
    REFERENCES `sql9374391`.`Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 421
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `sql9374391`.`Emojis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql9374391`.`Emojis` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(500) NULL DEFAULT NULL,
  `Code` VARCHAR(2) NOT NULL,
  `Type_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) VISIBLE,
  UNIQUE INDEX `Code_UNIQUE` (`Code` ASC) VISIBLE,
  INDEX `fk_Emojis_Types1_idx` (`Type_id` ASC) VISIBLE,
  CONSTRAINT `fk_Emojis_Types1`
    FOREIGN KEY (`Type_id`)
    REFERENCES `sql9374391`.`Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `sql9374391`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql9374391`.`Users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `FirstName` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `DOB` DATETIME NULL DEFAULT NULL,
  `Password` VARCHAR(45) NULL DEFAULT NULL,
  `User_Type` INT(11) NOT NULL,
  `LikedPost` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Users_Types1_idx` (`User_Type` ASC) VISIBLE,
  INDEX `fk_Liked_idx` (`LikedPost` ASC) VISIBLE,
  CONSTRAINT `fk_Liked`
    FOREIGN KEY (`LikedPost`)
    REFERENCES `sql9374391`.`Emojis` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Users_Types1`
    FOREIGN KEY (`User_Type`)
    REFERENCES `sql9374391`.`Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `sql9374391`.`Posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql9374391`.`Posts` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `URL` VARCHAR(2048) NULL DEFAULT NULL,
  `Text` VARCHAR(4000) NULL DEFAULT NULL,
  `Media_Type` VARCHAR(45) NOT NULL DEFAULT 'none',
  `Privacy_Setting` INT(11) NULL DEFAULT NULL COMMENT '0 - hidden\\n1 - only me\\n2 - only friends\\n4 - public',
  `Owner_id` INT(11) NOT NULL,
  `ExerciseName` VARCHAR(45) NOT NULL DEFAULT 'none',
  `LocationName` VARCHAR(45) NULL DEFAULT 'none',
  `Time` TIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Posts_Users1_idx` (`Owner_id` ASC) VISIBLE,
  CONSTRAINT `fk_Posts_Users1`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `sql9374391`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `sql9374391`.`Comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql9374391`.`Comments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Text` VARCHAR(4000) NULL DEFAULT NULL,
  `Post_id` INT(11) NOT NULL,
  `Owner_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Comments_Posts1_idx` (`Post_id` ASC) VISIBLE,
  INDEX `fk_Comments_Users1_idx` (`Owner_id` ASC) VISIBLE,
  CONSTRAINT `fk_Comments_Posts1`
    FOREIGN KEY (`Post_id`)
    REFERENCES `sql9374391`.`Posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comments_Users1`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `sql9374391`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `sql9374391`.`ContactMethods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql9374391`.`ContactMethods` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Type` VARCHAR(45) NOT NULL,
  `Value` VARCHAR(45) NOT NULL,
  `IsPrimary` BIT(1) NOT NULL DEFAULT b'0',
  `CanSpam` BIT(1) NOT NULL DEFAULT b'0',
  `User_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ContactMethods_Users_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_ContactMethod_Type_idx` (`Type` ASC) VISIBLE,
  CONSTRAINT `fk_ContactMethods_Users`
    FOREIGN KEY (`User_id`)
    REFERENCES `sql9374391`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ContactMethod_Type`
    FOREIGN KEY (`Type`)
    REFERENCES `sql9374391`.`Types` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `sql9374391`.`Friends`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql9374391`.`Friends` (
  `id` INT(11) NOT NULL,
  `Following` VARCHAR(45) NULL DEFAULT NULL,
  `Liked` VARCHAR(45) NULL DEFAULT NULL,
  `Requested` VARCHAR(45) NULL DEFAULT NULL,
  `UserId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `SpecificUser`
    FOREIGN KEY (`id`)
    REFERENCES `sql9374391`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `sql9374391`.`Reactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql9374391`.`Reactions` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Emoji` VARCHAR(2) NULL DEFAULT NULL,
  `Post_id` INT(11) NOT NULL,
  `Owner_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Comments_Posts1_idx` (`Post_id` ASC) VISIBLE,
  INDEX `fk_Comments_Users1_idx` (`Owner_id` ASC) VISIBLE,
  CONSTRAINT `fk_Comments_Posts10`
    FOREIGN KEY (`Post_id`)
    REFERENCES `sql9374391`.`Posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comments_Users10`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `sql9374391`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
