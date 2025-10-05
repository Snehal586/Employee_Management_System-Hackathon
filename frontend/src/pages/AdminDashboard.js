import React from "react";
import "../styles.css";
import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Admin" };

  const stats = [
    { title: "Total Employees", value: "25" },
    { title: "Departments", value: "4" },
    { title: "Avg Salary", value: "₹60,000" },
  ];

  const recentEmployees = [
    { id: 1, name: "Snehal Magdum", dept: "IT", role: "Full Stack Dev" },
    { id: 2, name: "Tanya Kapoor", dept: "HR", role: "HR Manager" },
    { id: 3, name: "Neha Patel", dept: "Analytics", role: "Data Analyst" },
  ];

  return (
  <div style={{ display: "flex" }}>
    <Sidebar role="admin" />
    <div
      style={{
        flexGrow: 1,
        marginLeft: "220px",
        padding: "40px",
        minHeight: "100vh",
        background:
          "linear-gradient(-45deg, #6a82fb, #a777e3, #ff9966, #ff5e62)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 90s linear infinite",
        color: "#fff",
      }}
    >

        {/* KPI Cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="card"
              style={{
                flex: "1",
                minWidth: "200px",
                textAlign: "center",
                color: "white",
              }}
            >
              <h3>{item.title}</h3>
              <h2 style={{ marginTop: "10px" }}>{item.value}</h2>
            </div>
          ))}
        </div>

        {/* Recent Employees Table */}
        <div className="card">
          <h2 style={{ marginBottom: "15px" }}>Recent Employees</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {recentEmployees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.dept}</td>
                  <td>{emp.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
