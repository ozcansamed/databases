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

async function flatify(dept_no, emp_no) {
  try {
    await connect();
    await execQuery("BEGIN");
    const employeeNOs = await execQuery(
      `SELECT emp_no FROM Employees 
        JOIN Departments
        ON Employees.reports_to = Departments.manager
        WHERE dept_no=?`,
      dept_no
    );
    await execQuery(
      "UPDATE Departments SET manager=? WHERE dept_no=?",
      emp_no,
      dept_no
    );
    employeeNOs.forEach(async employeeNO => {
      await execQuery("UPDATE Employees SET reports_to = ? WHERE emp_no = ?", [
        [emp_no, employeeNO]
      ]);
    });
    await execQuery("COMMIT");
    connection.end();
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

flatify(5, 111);
