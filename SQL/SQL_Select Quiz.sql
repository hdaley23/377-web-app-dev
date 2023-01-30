-- =================================================================================================
-- SQL SELECT Quiz
--
-- Each question is worth 3 points for a total of 24 possible points. The bonus question is also
-- worth 3 points.
-- =================================================================================================

-- *************************************************************************************************
-- #1: Write a query to return the homeroom number, first name, last name, and gender of
--     all active students in first grade; sort the results by homeroom, last name, first name.
-- *************************************************************************************************

SELECT stu_homeroom, stu_first_name, stu_last_name, stu_gender
  FROM students
 WHERE stu_grade_level = '01'
 ORDER BY stu_homeroom, stu_last_name, stu_first_name
;

-- *************************************************************************************************
-- #2: Update the query from question 1 to include each student's school's name as the
--     first column; sort the results first by the school name than all the other sort fields
--     listed in question 1.
-- *************************************************************************************************

SELECT skl_name, stu_homeroom, stu_first_name, stu_last_name, stu_gender
  FROM students
  JOIN schools ON skl_id = stu_skl_id
 WHERE stu_grade_level = '01'
 ORDER BY skl_name, stu_homeroom, stu_last_name, stu_first_name
;

-- *************************************************************************************************
-- #3: Write a query to find the number of active students in homeroom 04 at Hancock Elementary
--     School.
-- *************************************************************************************************

SELECT COUNT(*) 
 FROM students
WHERE stu_homeroom = '04' 
 AND stu_status = 'Active'
 AND stu_skl_id = 'sklX2000000008'
;

-- *************************************************************************************************
-- #4: Write a query to find the first and last name of the homeroom teacher for the students in
--     question 3.
-- *************************************************************************************************



-- *************************************************************************************************
-- #5: Write a query to list the active students at Washington High School who have either Kristen
--     McDonnell or Laura Giordano as a guidance counselor. Show columns for: counselor, grade
--     level, first name, and last name; sort the results by counselor, grade level, last name,
--     first name.
-- *************************************************************************************************



-- *************************************************************************************************
-- #6: Write a query to list the transcript records for student Grace Brewer since 2016. Show
--     columns for the school year, course name, final grade, and credits; sort the results by
--     school year and course name.
-- *************************************************************************************************



-- *************************************************************************************************
-- #7: Write a query to list the classes taught by Catherine Bennett (exclude any courses named
--     'DST'). Show the course name, section number, meeting times, and room number; sort the
--     results by meeting time.
-- *************************************************************************************************



-- *************************************************************************************************
-- BONUS: Write a query to list the rosters for each of Catherine Bennett's classes. Show the
--        course name, section number, and the student's first/last names. Sort the results by
--        those same columns.
-- *************************************************************************************************

-- SELECT cls_course, cls_section, stu_first_name, stu_last_name
-- FROM classes
-- JOIN teachers ON cls_

