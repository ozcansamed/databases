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