CREATE DATABASE school;

USE students_db;
CREATE TABLE students (
    id INT PRIMARY KEY,
    roll_no INT NOT NULL,
    student_name VARCHAR(100) NOT NULL,
    section VARCHAR(5),
    overall_marks INT
);


INSERT INTO students (id, roll_no, student_name, section, overall_marks) VALUES
(1, 1, 'Mohamed Riyas', 'A', 88),
(2, 2, 'Ayesha Khan', 'B', 92),
(3, 3, 'Arjun Kumar', 'A', 78),
(4, 4, 'chandruu', 'A', 99),
(5, 5, 'adhi', 'B', 80),
(6, 6, 'joe', 'A', 0);
