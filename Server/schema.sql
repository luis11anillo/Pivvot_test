/* Create the DataBase */
CREATE DATABASE dbnotes_api;

USE dbnotes_api;

/* Create the Table */
CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
)

/* Insert information / Creating 4 notes */
INSERT INTO `notes` (`title`, `description`) VALUES ('First register', 'Im the first note of that list');
INSERT INTO `notes` (`title`, `description`) VALUES ('Second ', 'im the second one, this text is a little bit longer that the previous one');
INSERT INTO `notes` (`title`, `description`) VALUES ('Note number 3 ', 'im the shortest');
INSERT INTO `notes` (`title`, `description`) VALUES ('last one', 'this is the last one description and the fourth paragraph in the note list');