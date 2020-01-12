// ------------      WITH ASYNC-AWAIT --- EXERCISE-1      ----------------

const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "company"
});

const connect = util.promisify(connection.connect.bind(connection));
const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabase = async () => {
  try {
    await connect();

    // Instead of adding a "skills" column in the employee table,
    // We need to create two tables.
    // First skills table,
    // Then employee-skills table.
    // And we need to implement the relationships by adding foreign keys.

    await execQuery(`CREATE TABLE IF NOT EXISTS skills (
      skill_no INT PRIMARY KEY AUTO_INCREMENT, 
      skill_name VARCHAR(100))`);

    await execQuery(`CREATE TABLE IF NOT EXISTS employee_skills (
      employee_no INT, 
      skill_no INT, 
      FOREIGN KEY(employee_no) REFERENCES Employees(emp_no),
      FOREIGN KEY(skill_no) REFERENCES skills(skill_no))`);

    const skills = [
      {
        skill_name: "JavaScript"
      },
      {
        skill_name: "Python"
      },
      {
        skill_name: "Java"
      },
      {
        skill_name: "Ruby"
      },
      {
        skill_name: "C++"
      }
    ];

    skills.forEach(async skill => {
      await execQuery(`INSERT INTO skills SET ?`, skill);
    });
  } catch (err) {
    console.error(err);
  } finally {
    connection.end();
  }
};

seedDatabase();

// ------------   WITH EXPRESS --- EXERCISE-1   ----------------
/*
const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: "company"
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('mysql connected...');
});

app.get('/createSkillsTable', (req, res) => {
  let sql = `CREATE TABLE IF NOT EXISTS skills (
      skill_no INT PRIMARY KEY AUTO_INCREMENT, 
      skill_name VARCHAR(100))`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Skills Table created...');
  });
});

app.get('/createEmployee-skillsTable', (req, res) => {
  let sql = `CREATE TABLE IF NOT EXISTS employee-skills (
      employee_no INT, 
      skill_no INT, 
      FOREIGN KEY(employee_no) REFERENCES Employees(emp_no),
      FOREIGN KEY(skill_no) REFERENCES skills(skill_no))`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
    res.send('Employee-skills table created...');
  });
});

const skills = [
      {
        skill_name: "JavaScript"
      },
      {
        skill_name: "Python"
      },
      {
        skill_name: "Java"
      },
      {
        skill_name: "Ruby"
      },
      {
        skill_name: "C++"
      }
    ];

skills.forEach(skill => {
  let sql = `INSERT INTO skills SET ?`;
  db.query(sql, employee, (err, result) => {
    if (err) {
      throw err;
    }
    console.table(result);
  });
});

app.listen('3000', () => {
  console.log('Server started on port 3000');
});

// ------------      WITH PROMISE --- EXERCISE-1      ----------------

const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: "company"
});

const connect = util.promisify(connection.connect.bind(connection));
const execQuery = util.promisify(connection.query.bind(connection));

connect()
  .then(() => {
    return execQuery(`CREATE TABLE IF NOT EXISTS skills (
      skill_no INT PRIMARY KEY AUTO_INCREMENT, 
      skill_name VARCHAR(100))`);
  })
  .then(() => {
    return execQuery(`CREATE TABLE IF NOT EXISTS employee-skills (
      employee_no INT, 
      skill_no INT, 
      FOREIGN KEY(employee_no) REFERENCES Employees(emp_no),
      FOREIGN KEY(skill_no) REFERENCES skills(skill_no))`);
  }).then(() => {
    return skills.forEach(skill => {
      execQuery("INSERT INTO skills SET ?", skill);
    });
  })
  .catch(err => {
    console.error('error: ', err);
  })
  .finally(() => {
    connection.end();
  });
  */
