const mysql = require('mysql');
const {
  employees,
  departments,
  projects
} = require('./exercise1-data.js');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});

const connect = util.promisify(connection.connect.bind(connection));
const execQuery = util.promisify(connection.query.bind(connection));

connect()
  .then(() => {
    return execQuery('CREATE DATABASE IF NOT EXISTS company');
  })
  .then(() => {
    return execQuery('USE company');
  })
  .then(() => {
    return execQuery(`CREATE TABLE IF NOT EXISTS Employees (emp_no INT PRIMARY KEY AUTO_INCREMENT, emp_name VARCHAR(50), 
    salary INT, reports_to INT)`);
  })
  .then(() => {
    return execQuery(`CREATE TABLE IF NOT EXISTS Departments (dept_no INT PRIMARY KEY, dept_name VARCHAR(50), 
    manager VARCHAR (200))`);
  })
  .then(() => {
    return execQuery(`CREATE TABLE IF NOT EXISTS Projects (proj_no INT PRIMARY KEY, proj_name VARCHAR(200), 
    starting_date VARCHAR(200), ending_date VARCHAR(200))`);
  })
  .then(() => {
    return employees.forEach(employee => {
      execQuery('INSERT INTO Employees SET ?', employee);
    });
  })
  .then(() => {
    return departments.forEach(department => {
      execQuery('INSERT INTO Departments SET ?', department);
    });
  })
  .then(() => {
    return projects.forEach(project => {
      execQuery('INSERT INTO Projects SET ?', project);
    });
  })
  .catch(err => {
    console.error('error: ', err);
  })
  .finally(() => {
    connection.end();
  });