// ------------      WITH ASYNC-AWAIT --- EXERCISE-3      ----------------

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

    // Q-1 => Write a query that retrieves all employees and their corresponding manager 's full name

    const allEmployeesWithManagerName = await execQuery(
      `SELECT emp1.*, 
      emp2.manager AS "manager's_id", emp2.full_name AS "manager's full_name" 
      FROM employees emp1, employees emp2 
      WHERE emp1.manager = emp2.employee_no;`,
    );

    // Q-2 => Write a query that retrieves all employees and their working department title.
    // If no employee worked in a specific department, return the department too
    const allEmployeesWithWorkingDepartmentTitle = await execQuery(
      `SELECT employees.*, departments.dept_no, departments.title FROM departments 
      LEFT JOIN employees ON employees.department_no = departments.dept_no;`, );

    const results = [
      allEmployeesWithManagerName,
      allEmployeesWithWorkingDepartmentTitle
    ];

    results.forEach(result => console.table(result));
  } catch (err) {
    console.error(err);
  } finally {
    connection.end();
  }
};

queryDatabase();