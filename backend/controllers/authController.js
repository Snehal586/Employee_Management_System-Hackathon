// backend/controllers/authController.js
const db = require("../config/db");

// Handle login
exports.login = (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Query MySQL to check user
  const sql = "SELECT * FROM employees WHERE email = ? AND role = ?";
  db.query(sql, [email, role], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = results[0];

    // Simple password check (we’ll later replace with bcrypt)
    if (user.password === password) {
      return res.json({
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          department: user.department,
        },
      });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  });
};
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// Temporary store for reset tokens (for demo; use DB in production)
const resetTokens = {};

// Send reset email
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });

  const token = crypto.randomBytes(20).toString("hex");
  resetTokens[email] = token;

  const resetLink = `http://localhost:3000/reset-password/${token}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // add to .env
      pass: process.env.EMAIL_PASS, // add to .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset - Employee Management System",
    text: `Click this link to reset your password: ${resetLink}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Password reset email sent successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error sending email", error: err });
  }
};

// Reset password
exports.resetPassword = (req, res) => {
  const { token, password } = req.body;
  const email = Object.keys(resetTokens).find((key) => resetTokens[key] === token);

  if (!email) return res.status(400).json({ message: "Invalid or expired token" });

  const sql = "UPDATE employees SET password = ? WHERE email = ?";
  db.query(sql, [password, email], (err) => {
    if (err) return res.status(500).json({ message: "Database error" });

    delete resetTokens[email];
    res.json({ message: "Password reset successful!" });
  });
};

