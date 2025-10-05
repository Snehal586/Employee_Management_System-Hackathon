import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";


function EmployeeDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      window.location.href = "/";
    }
  }, []);

  if (!user)
    return (
      <div
        style={{
          color: "#fff",
          textAlign: "center",
          marginTop: "50px",
          fontSize: "20px",
        }}
      >
        Loading your dashboard...
      </div>
    );

  return (
  <div style={{ display: "flex" }}>
    <Sidebar role="employee" />
    <div
      style={{
        flexGrow: 1,
        marginLeft: "220px",
        minHeight: "100vh",
        background:
          "linear-gradient(-45deg, #ff9966, #ff5e62, #580f67ff, #a777e3)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 90s linear infinite",
        color: "#fff",
        padding: "40px",
      }}
    >
      <h1>👋 Welcome, {user.name}</h1>
      <h3>Your Email: {user.email}</h3>
      <h3>Department: {user.department}</h3>
      <h3>Role: {user.role}</h3>

      <button
        onClick={() => {
          localStorage.removeItem("loggedUser");
          window.location.href = "/";
        }}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "10px",
          background: "linear-gradient(45deg, #ff9966, #ff5e62)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>

      <div
        style={{
          marginTop: "40px",
          background: "rgba(255, 255, 255, 0.15)",
          padding: "20px",
          borderRadius: "15px",
          width: "400px",
          margin: "40px auto",
        }}
      >
        <h2>📢 Company Announcements</h2>
        <p>No announcements yet</p>
      </div>
    </div>
  </div>
  );
}

export default EmployeeDashboard;
