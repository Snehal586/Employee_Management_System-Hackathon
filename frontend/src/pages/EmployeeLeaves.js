import React, { useState } from "react";
import "../styles.css";
import Sidebar from "../components/Sidebar";

function EmployeeLeaves() {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      type: "Casual Leave",
      from: "2025-09-20",
      to: "2025-09-22",
      reason: "Family function",
      status: "Approved",
    },
    {
      id: 2,
      type: "Sick Leave",
      from: "2025-10-01",
      to: "2025-10-03",
      reason: "Fever",
      status: "Pending",
    },
  ]);

  const [form, setForm] = useState({
    type: "",
    from: "",
    to: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.type || !form.from || !form.to || !form.reason) {
      alert("Please fill all fields!");
      return;
    }

    const newLeave = {
      id: Date.now(),
      ...form,
      status: "Pending",
    };

    setLeaves([...leaves, newLeave]);
    setForm({ type: "", from: "", to: "", reason: "" });
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="EMPLOYEE" />

      <div className="content">
        <h1>Leave Application 🌴</h1>
        <p style={{ marginBottom: "20px", opacity: 0.8 }}>
          Apply for new leave or check your previous requests.
        </p>

        {/* Leave Application Form */}
        <div className="card" style={{ marginBottom: "30px" }}>
          <h2 style={{ marginBottom: "15px" }}>Apply for Leave</h2>
          <form onSubmit={handleSubmit}>
            <label>Leave Type:</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Type</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Work From Home">Work From Home</option>
            </select>

            <label>From Date:</label>
            <input
              type="date"
              name="from"
              value={form.from}
              onChange={handleChange}
              style={inputStyle}
            />

            <label>To Date:</label>
            <input
              type="date"
              name="to"
              value={form.to}
              onChange={handleChange}
              style={inputStyle}
            />

            <label>Reason:</label>
            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              rows="3"
              style={inputStyle}
            />

            <button type="submit" style={{ marginTop: "10px" }}>
              Submit Request
            </button>
          </form>
        </div>

        {/* Leave History */}
        <div className="card">
          <h2>Leave History 📋</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Type</th>
                <th>From</th>
                <th>To</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((l) => (
                <tr key={l.id}>
                  <td>{l.type}</td>
                  <td>{l.from}</td>
                  <td>{l.to}</td>
                  <td>{l.reason}</td>
                  <td
                    style={{
                      color:
                        l.status === "Approved"
                          ? "#00ff99"
                          : l.status === "Rejected"
                          ? "#ff4d4d"
                          : "#ffff66",
                      fontWeight: "bold",
                    }}
                  >
                    {l.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

export default EmployeeLeaves;
