-- MySQL dump 10.13  Distrib 8.0.18, for Linux (x86_64)
--
-- Host: localhost    Database: new_company_2
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `dept_no` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`dept_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (111,'Callback Cats','Lorem ipsum dolor sit amet, consectetur adipiscing elit','1175  Dale Avenue, New York'),(112,'Data Pirates','sed do eiusmod tempor incididunt ut labore et dolore','2847  James Martin Circle, New York'),(113,'Hypertext Assassins','incididunt ut labore et dolore magna aliqua','1421  Bagwell Avenue, New York'),(114,'Software Chasers','Ut enim ad minim veniam','3820  Goodwin Avenue, New York'),(115,'Query Language Spies','quis nostrud exercitation ullamco','3238  McVaney Road, New York'),(116,'Binary Beasts','laboris nisi ut aliquip ex ea commodo consequat','870  Carriage Court, Washington'),(117,'App Monsters','Duis aute irure dolor in reprehenderit','4334  Tyler Avenue, Washington'),(118,'Pseudo Program Nerds','voluptate velit esse cillum dolore eu fugiat nulla pariatur','362  Dennison Street, Washington'),(119,'Algorithm Unlock','Excepteur sint occaecat cupidatat non proident','1468  Virginia Street, Washington'),(120,'Kernel Ponies','sunt in culpa qui officia deserunt mollit anim id est laborum','1143  Peck Street, Washington');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `employee_no` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `manager` int(11) DEFAULT NULL,
  `department_no` int(11) DEFAULT NULL,
  PRIMARY KEY (`employee_no`),
  KEY `fk_employees_1_idx` (`manager`),
  KEY `fk_employees_2_idx` (`department_no`),
  CONSTRAINT `fk_employees_1` FOREIGN KEY (`manager`) REFERENCES `employees` (`employee_no`),
  CONSTRAINT `fk_employees_2` FOREIGN KEY (`department_no`) REFERENCES `departments` (`dept_no`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'Linus Torvalds',6000,'2912  Davis Avenue, New York',NULL,NULL),(2,'Guido van Rossum',5000,'1180  My Drive, Washington',1,NULL),(3,'Niklaus Wirth',4000,'1913  Union Street,  Michigan',2,NULL),(4,'James Arthur Gosling',3000,'4863  Oakridge Farm Lane, Wisconsin',3,111),(5,'Donald Ervin Knuth',3000,'3426  Davis Court, Metropolis',3,111),(6,'Kenneth Lane Thompson',3000,'3904  Parkway Drive, Arizona',3,112),(7,'Brian Wilson Kernighan',3000,'4828  Hart Country Lane, Georgia',3,112),(8,'Bill Gates',3000,'2963  Dovetail Drive, Illinois',3,112),(9,'Ada Lovelace',4000,'2317  Collins Avenue, North Carolina',2,NULL),(10,'Tim Berners-Lee',3000,'2334  Shearwood Forest Drive, Iowa',9,114),(11,'Christopher E. Willingham',3000,'3659  Argonne Street, Delaware',9,114),(12,'Peter Reeves',3000,'616  Del Dew Drive, Maryland',9,115),(13,'Nellie S. Dye',3000,'2445  Viking Drive, Texas',9,115),(14,'Sharon B. Wakefield',3000,'945  Post Avenue, Ohio',9,115),(15,'Steven P. Lewis',4000,'2046  Baker Avenue, Texas',2,NULL),(16,'Theodore C. Moore',3000,'2470  Sunrise Road, Nevada',15,116),(17,'Hazel D. Ellis',3000,'2479  Stuart Street, Pennsylvania',15,117),(18,'Eric J. Heller',3000,'3457  Layman Court, Alabama',15,118),(19,'Joyce J. Bills',3000,'4569  Renwick Drive, Pennsylvania',15,119),(20,'Donna M. Quirk',3000,'884  Fieldcrest Road, New York',15,120);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-21 16:20:46
