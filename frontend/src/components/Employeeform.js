import React, { useState, useEffect } from "react";

function EmployeeForm({ onClose, onSave, employee }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    salary: "",
  });

  useEffect(() => {
    if (employee) setForm(employee);
  }, [employee]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="card"
        style={{
          width: "400px",
          padding: "25px",
          borderRadius: "15px",
          textAlign: "left",
          background: "rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {employee ? "Edit Employee" : "Add Employee"}
        </h2>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label>Department:</label>
          <input
            name="department"
            value={form.department}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Role:</label>
          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Salary:</label>
          <input
            name="salary"
            type="number"
            value={form.salary}
            onChange={handleChange}
            style={inputStyle}
          />

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button type="submit">Save</button>
            <button
              type="button"
              onClick={onClose}
              style={{ marginLeft: "10px", background: "#ff4d4d" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "10px",
  border: "none",
  marginBottom: "10px",
  outline: "none",
};

export default EmployeeForm;
