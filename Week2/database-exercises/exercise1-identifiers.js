// ------------      WITH ASYNC-AWAIT --- EXERCISE-1      ----------------

const mysql = require('mysql');
const {
  employees
} = require('./exercises-data.js');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword'
});

const connect = util.promisify(connection.connect.bind(connection));
const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabase = async () => {
  try {
    await connect();
    await execQuery('CREATE DATABASE IF NOT EXISTS new_company_2');
    await execQuery('USE new_company_2');

    // Create a table, called employee. 
    // Give it the following fields: (employee_no(Primary Key), full_name, salary, address)
    await execQuery(`CREATE TABLE IF NOT EXISTS employees (
      employee_no INT PRIMARY KEY AUTO_INCREMENT, 
      full_name VARCHAR(100), 
      salary INT, 
      address VARCHAR(200), 
      manager INT, 
      department_no INT, 
      FOREIGN KEY(manager) REFERENCES employees(employee_no))`);

    // Insert 20 rows in this table
    employees.forEach(async employee => {
      await execQuery(`INSERT INTO employees SET ?`, employee);
    });

    // For using SQL Dump: 
    // mysqldump -u hyfuser -p new_company_2 > new_company_2.sql

    await execQuery('ALTER TABLE employees ADD Constraint FOREIGN KEY(department_no) REFERENCES departments(dept_no)');

  } catch (err) {
    console.error(err);
  } finally {
    connection.end();
  }
};

seedDatabase();

// ------------   WITH EXPRESS --- EXERCISE-1   ----------------

const express = require('express');
const mysql = require('mysql');
const {
  employees
} = require('./exercises-data.js');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('mysql connected...');
});

app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE IF NOT EXISTS new_company_2';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Database created...');
  });
});

app.get('/use-new_company-2-Database', (req, res) => {
  let sql = 'USE new_company_2';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Changed to new_company-2 Database...');
  });
});

app.get('/createEmployeeTable', (req, res) => {
  let sql = `CREATE TABLE IF NOT EXISTS employees (
    employee_no INT PRIMARY KEY AUTO_INCREMENT, 
    full_name VARCHAR(100), 
    salary INT, 
    address VARCHAR(200), 
    manager INT, 
    department_no INT, 
    FOREIGN KEY(manager) REFERENCES employees(employee_no))`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
    res.send('Employees table created...');
  });
});

employees.forEach(employee => {
  let sql = `INSERT INTO employees SET ?`;
  db.query(sql, employee, (err, result) => {
    if (err) {
      throw err;
    }
    console.table(result);
  });
});

app.get('/addForeignKey', (req, res) => {
  let sql = 'ALTER TABLE employees ADD Constraint FOREIGN KEY(department_no) REFERENCES departments(dept_no)';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
    res.send('Foreign Key Added...');
  });
});

app.listen('3000', () => {
  console.log('Server started on port 3000');
});