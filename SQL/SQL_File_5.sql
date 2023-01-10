SELECT * 
 FROM schools
;

UPDATE schools
   SET skl_level = 'K-4'
 WHERE skl_level = 'Elementary'
;

UPDATE schools
   SET skl_level = '5-8'
 WHERE skl_level = 'Middle'
;

UPDATE schools
   SET skl_level = '9-12'
 WHERE skl_level = 'High'
;

UPDATE schools
   SET skl_level = 'K-12'
 WHERE skl_level = 'All levels'
;