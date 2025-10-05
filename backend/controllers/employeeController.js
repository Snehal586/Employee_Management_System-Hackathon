const db = require("../config/db");
const Employee = require("../models/Employee");

exports.getAllEmployees = (req, res) => {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) return res.status(500).json({ error: err });

    const employees = results.map(
      (row) =>
        new Employee(row.id, row.name, row.email, row.role, row.department, row.salary)
    );

    res.json(employees);
  });
};

exports.addEmployee = (req, res) => {
  const { name, email, role, department, salary } = req.body;
  const sql = "INSERT INTO employees (name, email, role, department, salary) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, email, role, department, salary], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Employee added successfully ✅" });
  });
};

exports.deleteEmployee = (req, res) => {
  db.query("DELETE FROM employees WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Employee deleted successfully 🗑️" });
  });
};
