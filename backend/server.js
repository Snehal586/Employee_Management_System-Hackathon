const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const db = require("./config/db");

// Config
dotenv.config();
app.use(cors());
app.use(express.json());

// Import Routes
const employeeRoutes = require("./routes/employeeRoutes");
const authRoutes = require("./routes/authRoutes");
const announcementRoutes = require("./routes/announcementRoutes");




// Use Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/announcements", announcementRoutes);


// Default Route
app.get("/", (req, res) => {
  res.send("✅ Employee Management System Backend Running");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
