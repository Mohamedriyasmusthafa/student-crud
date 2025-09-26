const express = require('express');
const mysql = require('mysql2');  // use mysql2 instead of mysql
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',           // your MySQL username
    password: '',           // your MySQL password
    database: 'school'
});

db.connect(err => {
    if(err) throw err;
    console.log('MySQL Connected...');
});

// Get all students
app.get('/students', (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

// Get single student
app.get('/students/:id', (req, res) => {
    db.query("SELECT * FROM students WHERE id = ?", [req.params.id], (err, result) => {
        if(err) throw err;
        res.send(result[0]);
    });
});

// Add student
app.post('/students', (req, res) => {
    const { roll_no, student_name, section, overall_marks } = req.body;
    db.query(
        "INSERT INTO students (roll_no, student_name, section, overall_marks) VALUES (?, ?, ?, ?)",
        [roll_no, student_name, section, overall_marks],
        (err, result) => {
            if(err) throw err;
            res.send({ message: 'Student added', id: result.insertId });
        }
    );
});

// Update student
app.put('/students/:id', (req, res) => {
    const { roll_no, student_name, section, overall_marks } = req.body;
    db.query(
        "UPDATE students SET roll_no=?, student_name=?, section=?, overall_marks=? WHERE id=?",
        [roll_no, student_name, section, overall_marks, req.params.id],
        (err, result) => {
            if(err) throw err;
            res.send({ message: 'Student updated' });
        }
    );
});

// Delete student
app.delete('/students/:id', (req, res) => {
    db.query("DELETE FROM students WHERE id=?", [req.params.id], (err, result) => {
        if(err) throw err;
        res.send({ message: 'Student deleted' });
    });
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
