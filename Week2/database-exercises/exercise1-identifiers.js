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