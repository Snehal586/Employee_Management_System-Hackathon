import React, { useState } from "react";
import "../styles.css";
import Sidebar from "../components/Sidebar";
import { toast } from "react-toastify";

function MyProfile() {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name: "Snehal Magdum",
    email: "snehal@example.com",
    department: "IT",
    role: "Full Stack Developer",
    joiningDate: "2024-01-15",
    phone: "+91-9876543210",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Save
  const handleSave = () => {
    setEditMode(false);
    toast.success("✅ Profile updated successfully!");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="EMPLOYEE" />
      <div className="content">
        <h1>My Profile 👤</h1>
        <p style={{ opacity: 0.8, marginBottom: "20px" }}>
          View and edit your personal details.
        </p>

        <div
          className="card"
          style={{
            maxWidth: "500px",
            margin: "auto",
            textAlign: "left",
            lineHeight: "1.8",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            {editMode ? "Edit Profile" : "Employee Details"}
          </h2>

          {/* Editable Fields */}
          {Object.keys(user).map((key) => (
            <div key={key} style={{ marginBottom: "10px" }}>
              <label
                style={{ display: "block", fontWeight: "500", marginBottom: "5px" }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </label>
              {editMode ? (
                <input
                  type="text"
                  name={key}
                  value={user[key]}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "10px",
                    border: "none",
                    outline: "none",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                  }}
                />
              ) : (
                <p>{user[key]}</p>
              )}
            </div>
          ))}

          {/* Buttons */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            {editMode ? (
              <>
                <button onClick={handleSave}>💾 Save</button>
                <button
                  onClick={() => setEditMode(false)}
                  style={{ marginLeft: "10px", background: "#ff4d4d" }}
                >
                  ❌ Cancel
                </button>
              </>
            ) : (
              <button onClick={() => setEditMode(true)}>✏️ Edit Profile</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
