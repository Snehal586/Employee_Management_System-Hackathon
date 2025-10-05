import React, { useState } from "react";
import "../styles.css";
import Sidebar from "../components/Sidebar";
import Employeeform from "../components/Employeeform";

function EmployeeManagement() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Snehal Magdum", email: "snehal@example.com", department: "IT", role: "Full Stack Developer", salary: 60000 },
    { id: 2, name: "Akshay Kamble", email: "akshay@example.com", department: "HR", role: "HR Manager", salary: 55000 },
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setSelectedEmployee(null);
    setShowForm(true);
  };

  const handleEdit = (emp) => {
    setSelectedEmployee(emp);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((e) => e.id !== id));
    }
  };

  const handleSave = (newEmp) => {
    if (selectedEmployee) {
      // Edit existing
      setEmployees(
        employees.map((e) => (e.id === selectedEmployee.id ? { ...newEmp, id: e.id } : e))
      );
    } else {
      // Add new
      setEmployees([...employees, { ...newEmp, id: Date.now() }]);
    }
    setShowForm(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="ADMIN" />
      <div className="content">
        <h1>Manage Employees 👥</h1>
        <p style={{ marginBottom: "20px", opacity: 0.8 }}>
          Add, edit or remove employees from your organization.
        </p>

        <button onClick={handleAdd}>+ Add Employee</button>

        <div className="card" style={{ marginTop: "20px" }}>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Role</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>{emp.role}</td>
                  <td>₹{emp.salary}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(emp)}
                      style={{ marginRight: "10px" }}
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(emp.id)}
                      style={{ background: "#ff4d4d" }}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showForm && (
          <Employeeform
            onClose={() => setShowForm(false)}
            onSave={handleSave}
            employee={selectedEmployee}
          />
        )}
      </div>
    </div>
  );
}

export default EmployeeManagement;
