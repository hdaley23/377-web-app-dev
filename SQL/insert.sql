-- inserting records into a table

INSERT INTO students(stu_id, stu_first_name, stu_last_name, stu_grade_level)
              VALUES('btc001',     'Brian',   '    Ciccolo',      '12')
;

SELECT * 
  FROM students
 WHERE stu_id = 'btc001'
;