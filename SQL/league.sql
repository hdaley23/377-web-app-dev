CREATE DATABASE league;

USE league;

DROP TABLE teams;
CREATE TABLE teams (
  tms_id INT NOT NULL AUTO_INCREMENT,
  tms_city VARCHAR(45) NOT NULL,
  tms_name VARCHAR(45) NOT NULL,
  tms_coach VARCHAR(100) NULL,
  tms_logo BLOB NULL,
  PRIMARY KEY (tms_id),
  UNIQUE INDEX tms_name_UNIQUE (tms_name ASC) VISIBLE);

INSERT INTO teams (tms_city, tms_name) VALUE ('Hanover', 'Hawks');
INSERT INTO teams (tms_city, tms_name) VALUE ('Scituate', 'Sailors');
INSERT INTO teams (tms_city, tms_name) VALUE ('Hingham', 'Harbormen');
INSERT INTO teams (tms_city, tms_name) VALUE ('Duxbury', 'Dragons');
INSERT INTO teams (tms_id, tms_city, tms_name) VALUE (11, 'Weymouth', 'Wildcats');
INSERT INTO teams (tms_city, tms_name) VALUE ('Abington', 'Green Wave');

SELECT * FROM teams;

SELECT * 
  FROM teams 
 WHERE substr(tms_city, 1, 1) = substr(tms_name, 1, 1)
;

DROP TABLE players;
CREATE TABLE players (
  pla_id INT NOT NULL AUTO_INCREMENT,
  pla_tms_id INT NOT NULL,
  pla_first_name VARCHAR(45) NOT NULL,
  pla_last_name VARCHAR(45) NOT NULL,
  pla_number INT NULL,
  pla_position VARCHAR(45),
  pla_dob DATETIME,
  PRIMARY KEY (pla_id),
  INDEX pla_tms_id_FK (pla_tms_id ASC) VISIBLE);
  
INSERT INTO players (pla_tms_id, pla_first_name, pla_last_name, pla_number, pla_position, pla_dob) 
      VALUE (1, 'Jacob', 'Demong', 9, 'Quarterback', '2005-08-08');
INSERT INTO players (pla_tms_id, pla_first_name, pla_last_name, pla_number, pla_position, pla_dob) 
      VALUE (1, 'Hayden', 'Daley', 24, 'Point Guard', '2004-12-16');
INSERT INTO players (pla_tms_id, pla_first_name, pla_last_name, pla_number, pla_position, pla_dob) 
      VALUE (2, 'Eric', 'Cartman', 3, 'Nose Tackle', '2014-03-14');
INSERT INTO players (pla_tms_id, pla_first_name, pla_last_name, pla_number, pla_position, pla_dob) 
      VALUE (2, 'Stan', 'Marsh', 4, 'Running Back', '2014-06-28');
      
      
SELECT * FROM players;

SELECT * 
  FROM teams
  LEFT OUTER JOIN players ON pla_tms_id = tms_id
  WHERE pla_id IS NULL
;

