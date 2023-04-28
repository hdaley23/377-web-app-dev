USE dpw_park_permits;

TRUNCATE parks;
TRUNCATE park_areas;

INSERT INTO parks (par_id, par_name) VALUES (1, 'Briggs Field');
INSERT INTO parks (par_id, par_name) VALUES (2, 'Ceurvels Field');
INSERT INTO parks (par_id, par_name) VALUES (3, 'Calvin J. Ellis Field');
INSERT INTO parks (par_id, par_name) VALUES (4, 'Forge Pond Park');
INSERT INTO parks (par_id, par_name) VALUES (5, 'Amos Gallant Field');
INSERT INTO parks (par_id, par_name) VALUES (6, 'B Everett Hall');

INSERT INTO park_areas (pka_par_id, pka_name) VALUES (1, 'T-Ball');

INSERT INTO park_areas (pka_par_id, pka_name) VALUES (2, 'Full-size Baseball');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (2, 'Little League');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (2, 'Softball');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (2, 'Lacrosse');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (2, 'Soccer');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (2, 'Basketball');

INSERT INTO park_areas (pka_par_id, pka_name) VALUES (3, 'Little League #1');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (3, 'Little League #2');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (3, 'Little League #3');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (3, 'Field #4');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (3, 'Soccer');

INSERT INTO park_areas (pka_par_id, pka_name) VALUES (4, 'Little League #1');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (4, 'Little League #2');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (4, 'Little League #3');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (4, 'Softball #4');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (4, 'Softball #5');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (4, 'Softball #6');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (4, 'Multi-use Soccer');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (4, 'Multi-use Lacrosse');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (4, 'Multi-use Other');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (4, 'Pavilion');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (4, 'Kitchen & Pavilion');

INSERT INTO park_areas (pka_par_id, pka_name) VALUES (5, 'Main Field');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (6, 'Full-size Baseball');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (6, 'Little League');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (6, 'Basketball #1');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (6, 'Basketball #2');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (6, 'Football');
INSERT INTO park_areas (pka_par_id, pka_name) VALUES (6, 'Street Hockey Rink');