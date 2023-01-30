-- 1. to delete a student, first identify its ID
SELECT *
  FROM students
 WHERE stu_first_name LIKE 'Matt%'
;

SELECT * 
 FROM students
WHERE stu_id = 'STD0000003QhS1'
;

-- 2. delete the student itself
DELETE 
  FROM students
 WHERE stu_id = 'STD0000003QhS1'
;

-- 3. delete all the children records to eliminate orhpans
SELECT * FROM attendance WHERE att_stu_id = 'stdX2000001008';
DELETE FROM attendance WHERE att_stu_id = 'stdX2000001008';

SELECT * FROM transcripts WHERE trn_stu_id = 'stdX2000001008';
DELETE FROM transcripts WHERE trn_stu_id = 'stdX2000001008';

SELECT * FROM schedules WHERE ssc_stu_id = 'stdX2000001008';
 
-- 4. see if there are any orphaned attendance records 

-- work with a subset of students to make it easier to see results
SELECT * 
 FROM students 
WHERE stu_last_name LIKE 'Le%'
 AND stu_grade_level = '12'
;

-- perfect attendance
SELECT stu_id, stu_first_name, stu_last_name
 FROM students 
LEFT OUTER JOIN attendance ON stu_id = att_stu_id
WHERE stu_last_name LIKE 'Le%'
 AND stu_grade_level = '12'
 AND att_stu_id IS NULL
;

SELECT stu_id, stu_first_name, stu_last_name, COUNT(*) 
 FROM students 
LEFT OUTER JOIN attendance ON stu_id = att_stu_id
WHERE stu_last_name LIKE 'Le%'
 AND stu_grade_level = '12'
GROUP BY stu_id, stu_first_name, stu_last_name
;

DELETE FROM students WHERE stu_last_name LIKE 'Y%';

-- perfect attendance
SELECT * 
  FROM students 
LEFT OUTER JOIN attendance ON att_stu_id = stu_id
  WHERE att_stu_id IS NULL
;

-- orphaned attendance
SELECT * 
  FROM attendance 
  LEFT OUTER JOIN students 
    ON att_stu_id = stu_id
  WHERE stu_id IS NULL
;

-- should work, but takes too long to execute
DELETE attendance
  FROM attendance 
  LEFT OUTER JOIN students 
    ON att_stu_id = stu_id
  WHERE stu_id IS NULL
;

-- need another way to identify (then delete) orphans

-- standard in operator 
SELECT * 
  FROM students
 WHERE stu_grade_level IN ('01', '02')
;

-- using IN operator based on sub-select (finds all students in an elementary school)
SELECT * 
  FROM students
 WHERE stu_skl_id IN (SELECT skl_id FROM schools WHERE skl_name LIKE '%Elementary%')
;

-- using IN operator based on sub-select (finds all students NOT in an elementary school)
SELECT * 
  FROM students
 WHERE stu_skl_id NOT IN (SELECT skl_id FROM schools WHERE skl_name LIKE '%Elementary%')
;

-- identify the orphaned attendance records using a sub-select (IN) clause 
SELECT * 
  FROM attendance
  WHERE att_stu_id NOT IN (SELECT stu_id FROM students)
;

-- deleting the orphaned attendance records using a sub-select (IN) clause 
DELETE 
  FROM attendance
  WHERE att_stu_id NOT IN (SELECT stu_id FROM students)
;

