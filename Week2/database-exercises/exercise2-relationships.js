// ------------      WITH ASYNC-AWAIT --- EXERCISE-2      ----------------

const mysql = require('mysql');
const {
  departments
} = require('./exercises-data.js');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_company_2'
});

const connect = util.promisify(connection.connect.bind(connection));
const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabase = async () => {
  try {
    await connect();

    // Create another table, called department with fields:(dept_no(Primary Key), title, description, address)`
    await execQuery(`CREATE TABLE IF NOT EXISTS departments (
      dept_no INT PRIMARY KEY, 
      title VARCHAR(100), 
      description VARCHAR(200), 
      address VARCHAR(200))`);

    departments.forEach(async department => {
      await execQuery(`INSERT INTO departments SET ?`, department);
    });

  } catch (err) {
    console.error(err);
  } finally {
    connection.end();
  }
};

seedDatabase();