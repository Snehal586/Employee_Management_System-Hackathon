// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST /api/auth/login
router.post("/login", authController.login);

module.exports = router;
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
