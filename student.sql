CREATE DATABASE IF NOT EXISTS school;


USE school;


CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    roll_no INT NOT NULL,
    student_name VARCHAR(100) NOT NULL,
    section VARCHAR(5),
    overall_marks INT
);


INSERT INTO students (roll_no, student_name, section, overall_marks) VALUES
(1, 'Mohamed Riyas', 'A', 88),
(2, 'Ayesha Khan', 'B', 92),
(3, 'Arjun Kumar', 'A', 78),
(4, 'Chandruu', 'A', 99),
(5, 'Adhi', 'B', 80),
(6, 'Joe', 'A', 0);
