// ------------      WITH ASYNC-AWAIT --- EXERCISE-4      ----------------

const mysql = require('mysql');
const util = require('util');
const {
  employees,
  departments
} = require('./exercises-data.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_company_2'
});

const connect = util.promisify(connection.connect.bind(connection));
const execQuery = util.promisify(connection.query.bind(connection));

const queryDatabase = async () => {
  try {
    await connect();

    // Q-1 => All department numbers and the number of employees working there.
    const allDepartmentNumbersAndNumberOfEmployees = await execQuery(
      `SELECT employees.department_no, COUNT(*) FROM employees 
      RIGHT JOIN departments ON employees.department_no = departments.dept_no GROUP BY  department_no;`,
    );
    // Q-2 => Sum of the salaries of all employees.
    const sumOfSalaries = await execQuery(
      `SELECT SUM(salary) FROM employees;`,
    );
    // Q-3 => Average of the salaries of all employees.
    const averageOfSalaries = await execQuery(
      `SELECT AVG(salary) FROM employees;`,
    );
    // Q-4 => Sum of the salaries of the employees per department.
    const sumOfSalariesOfEmployeesPerDepartment = await execQuery(
      `SELECT department_no, SUM(salary) FROM employees GROUP BY department_no;`,
    );
    // Q-5 => Minimum and maximum of the salaries per department.
    const minAndMaxSalariesPerDepartment = await execQuery(
      `SELECT department_no, MIN(salary),MAX(salary) FROM employees GROUP BY department_no;`,
    );
    // Q-6 => For each salary value, return the number of employees paid.
    const theNumberOfEmployeesPaidForEachSalaryValue = await execQuery(
      `SELECT salary, COUNT(*) FROM employees GROUP BY salary ORDER BY salary;`,
    );

    const results = [
      allDepartmentNumbersAndNumberOfEmployees,
      sumOfSalaries,
      averageOfSalaries,
      sumOfSalariesOfEmployeesPerDepartment,
      minAndMaxSalariesPerDepartment,
      theNumberOfEmployeesPaidForEachSalaryValue
    ];

    results.forEach(result => console.table(result));
  } catch (err) {
    console.error(err);
  } finally {
    connection.end();
  }
};

queryDatabase();

// ------------   WITH EXPRESS --- EXERCISE-4   ----------------

const express = require('express');
const mysql = require('mysql');
const {
  employees,
  departments
} = require('./exercises-data.js');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_company_2'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('mysql connected...');
});

// Q-1 => All department numbers and the number of employees working there.
app.get('/allDepartmentNumbersAndNumberOfEmployees', (req, res) => {
  let sql = `SELECT employees.department_no, COUNT(*) FROM employees 
  RIGHT JOIN departments ON employees.department_no = departments.dept_no GROUP BY  department_no;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('All department numbers and the number of employees working there....');
  });
});

// Q-2 => Sum of the salaries of all employees.
app.get('/sumOfSalaries', (req, res) => {
  let sql = `SELECT SUM(salary) FROM employees;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Sum of the salaries of all employees...');
  });
});

// Q-3 => Average of the salaries of all employees.
app.get('/averageOfSalaries', (req, res) => {
  let sql = `SELECT AVG(salary) FROM employees;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Average of the salaries of all employees....');
  });
});

// Q-4 => Sum of the salaries of the employees per department.
app.get('/sumOfSalariesOfEmployeesPerDepartment', (req, res) => {
  let sql = `SELECT department_no, SUM(salary) FROM employees GROUP BY department_no;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Sum of the salaries of the employees per department...');
  });
});

// Q-5 => Minimum and maximum od the salaries per department.
app.get('/minAndMaxSalariesPerDepartment', (req, res) => {
  let sql = `SELECT department_no, MIN(salary),MAX(salary) FROM employees GROUP BY department_no;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Minimum and maximum od the salaries per department...');
  });
});

// Q-6 => For each salary value, return the number of employees paid.
app.get('/theNumberOfEmployeesPaid', (req, res) => {
  let sql = `SELECT salary, COUNT(*) FROM employees GROUP BY salary ORDER BY salary;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('For each salary value, return the number of employees paid...');
  });
});

app.listen('3000', () => {
  console.log('Server started on port 3000');
});

// ------------      WITH PROMISE --- EXERCISE-4      ----------------

const mysql = require('mysql');
const util = require('util');
const {
  employees,
  departments
} = require('./exercises-data.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_company_2'
});

const connect = util.promisify(connection.connect.bind(connection));
const execQuery = util.promisify(connection.query.bind(connection));

connect()
  .then(() => {
    // Q-1 => All department numbers and the number of employees working there.
    const allDepartmentNumbersAndNumberOfEmployees = execQuery(
      `SELECT employees.department_no, COUNT(*) FROM employees 
      RIGHT JOIN departments ON employees.department_no = departments.dept_no GROUP BY  department_no;`,
    );
    return allDepartmentNumbersAndNumberOfEmployees;
  })
  .then((result1) => {
    console.table(result1);
    // Q-2 => Sum of the salaries of all employees.
    const sumOfSalaries = execQuery(`SELECT SUM(salary) FROM employees;`);
    return sumOfSalaries;
  })
  .then((result2) => {
    console.table(result2);
    // Q-3 => Average of the salaries of all employees.
    const averageOfSalaries = execQuery(
      `SELECT AVG(salary) FROM employees;`,
    );
    return averageOfSalaries;
  })
  .then((result3) => {
    console.table(result3);
    // Q-4 => Sum of the salaries of the employees per department.
    const sumOfSalariesOfEmployeesPerDepartment = execQuery(`SELECT department_no, SUM(salary) FROM employees GROUP BY department_no;`);
    return sumOfSalariesOfEmployeesPerDepartment;
  })
  .then((result4) => {
    console.table(result4);
    // Q-5 => Minimum and maximum od the salaries per department.
    const minAndMaxSalariesPerDepartment = execQuery(
      `SELECT department_no, MIN(salary),MAX(salary) FROM employees GROUP BY department_no;`,
    );
    return minAndMaxSalariesPerDepartment;
  })
  .then((result5) => {
    console.table(result5);
    // Q-6 => For each salary value, return the number of employees paid.
    const theNumberOfEmployeesPaid = execQuery(`SELECT salary, COUNT(*) FROM employees GROUP BY salary ORDER BY salary;`);
    return theNumberOfEmployeesPaid;
  })
  .then((result6) => console.table(result6))
  .catch(err => {
    console.error('error: ', err);
  })
  .finally(() => {
    connection.end();
  });