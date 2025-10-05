import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";
import loginImage from "../assest/image1.webp"; // ✅ your image

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // initially empty
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!role) {
      setMessage("⚠️ Please select a login type first");
      return;
    }

    setMessage("⏳ Checking credentials...");

    try {
      const res = await API.post("/auth/login", { email, password, role });
      const user = res.data.user;

      setMessage("✅ Login successful!");

      // Save user info
      localStorage.setItem("loggedUser", JSON.stringify(user));

      // Redirect
      if (user.role === "admin") window.location.href = "/admin-dashboard";
      else navigate("/employee-dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      setMessage(error.response?.data?.message || "❌ Invalid login credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background:
         "linear-gradient(-45deg, #8e2c62ff, #2a6071ff, #4e1259ff, #a777e3)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 90s linear infinite",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* LEFT SIDE - IMAGE + TAGLINE */}
      <div
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <img
          src={loginImage}
          alt="Login Visual"
          style={{
            width: "70%",
            borderRadius: "25px",
            boxShadow:
              "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 150, 100, 0.4)",
          }}
        />
        <h2
          style={{
            marginTop: "20px",
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "center",
            color: "#fff",
            textShadow: "0 0 10px rgba(255,255,255,0.4)",
          }}
        >
          Welcome! Let’s manage your team with ease 🌸
        </h2>
      </div>

      {/* RIGHT SIDE - LOGIN FORM */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "400px",
            padding: "40px 30px",
            borderRadius: "20px",
            backdropFilter: "blur(25px)",
            background: "rgba(255, 255, 255, 0.15)",
            border: "2px solid rgba(255, 255, 255, 0.25)",
            boxShadow:
              "0 0 25px rgba(255, 94, 98, 0.4), 0 0 60px rgba(106, 130, 251, 0.3)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #ff9966, #ff5e62)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px",
            }}
          >
            Login Portal
          </h2>

          {/* Role Selection Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <button
              onClick={() => setRole("employee")}
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                border: role === "employee" ? "2px solid #ff9966" : "none",
                background:
                  role === "employee"
                    ? "linear-gradient(45deg, #ff9966, #ff5e62)"
                    : "rgba(255,255,255,0.2)",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Employee
            </button>
            <button
              onClick={() => setRole("admin")}
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                border: role === "admin" ? "2px solid #6a82fb" : "none",
                background:
                  role === "admin"
                    ? "linear-gradient(45deg, #6a82fb, #a777e3)"
                    : "rgba(255,255,255,0.2)",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                margin: "8px 0",
                border: "none",
              }}
            />

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                margin: "8px 0",
                border: "none",
              }}
            />

            <p
  style={{
    color: "#ff9966",
    textAlign: "right",
    cursor: "pointer",
    marginTop: "8px",
    fontWeight: "bold",
  }}
  onClick={() => navigate("/forgot-password")}
>
  Forgot Password?
</p>



            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                background:
                  role === "admin"
                    ? "linear-gradient(45deg, #6a82fb, #a777e3)"
                    : "linear-gradient(45deg, #ff9966, #ff5e62)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              {role
                ? `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`
                : "Select a Role to Login"}
            </button>
          </form>

          <p style={{ marginTop: "15px", color: "#fff" }}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
