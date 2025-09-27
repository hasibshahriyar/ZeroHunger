const express = require("express");
const authControllers = require("./auth.controller");
const router = express.Router();

// Register route
router.post("/register", authControllers.register);

// Login route
router.post("/login", authControllers.login);

// Logout route
router.post("/logout", authControllers.logout);
const authRoutes = router;

module.exports = authRoutes;
