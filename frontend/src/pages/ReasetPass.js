import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/reset-password", {
        token,
        password,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Error: " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(-45deg, #ff9966, #ff5e62, #6a82fb, #a777e3)",
        backgroundSize: "400% 400%",
        color: "#fff",
        animation: "gradientShift 90s linear infinite",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(255,255,255,0.2)",
        }}
      >
        <h2>Reset Password</h2>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            marginTop: "15px",
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(45deg, #6a82fb, #a777e3)",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Reset Password
        </button>
        {message && <p style={{ marginTop: "15px" }}>{message}</p>}
      </form>
    </div>
  );
}

export default ResetPassword;
