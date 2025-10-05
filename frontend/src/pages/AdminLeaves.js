import React, { useState } from "react";
import "../styles.css";
import Sidebar from "../components/Sidebar";

function AdminLeaves() {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      employee: "Snehal Magdum",
      type: "Casual Leave",
      from: "2025-10-10",
      to: "2025-10-12",
      reason: "Family trip",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Akshay Kamble",
      type: "Sick Leave",
      from: "2025-10-06",
      to: "2025-10-08",
      reason: "Fever",
      status: "Approved",
    },
    {
      id: 3,
      employee: "Neha Patel",
      type: "Work From Home",
      from: "2025-10-05",
      to: "2025-10-05",
      reason: "Personal Work",
      status: "Rejected",
    },
  ]);

  const handleAction = (id, action) => {
    setLeaves((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status: action } : leave
      )
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="ADMIN" />

      <div className="content">
        <h1>Leave Requests 🗂️</h1>
        <p style={{ opacity: 0.8, marginBottom: "25px" }}>
          Review and manage employee leave requests.
        </p>

        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {leaves.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.employee}</td>
                  <td>{leave.type}</td>
                  <td>{leave.from}</td>
                  <td>{leave.to}</td>
                  <td>{leave.reason}</td>
                  <td>
                    <span
                      style={{
                        color:
                          leave.status === "Approved"
                            ? "#00ff99"
                            : leave.status === "Rejected"
                            ? "#ff4d4d"
                            : "#ffff66",
                        fontWeight: "bold",
                      }}
                    >
                      {leave.status}
                    </span>
                  </td>
                  <td>
                    {leave.status === "Pending" ? (
                      <>
                        <button
                          onClick={() => handleAction(leave.id, "Approved")}
                          style={{
                            marginRight: "10px",
                            background: "#00c6ff",
                          }}
                        >
                          ✅ Approve
                        </button>
                        <button
                          onClick={() => handleAction(leave.id, "Rejected")}
                          style={{
                            background: "#ff4d4d",
                          }}
                        >
                          ❌ Reject
                        </button>
                      </>
                    ) : (
                      <em>No Action</em>
                    )}
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

export default AdminLeaves;
