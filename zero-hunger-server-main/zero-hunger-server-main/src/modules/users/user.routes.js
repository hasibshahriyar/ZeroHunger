// userRoutes.js
const express = require("express");
const userControllers = require("./users.controller");
const router = express.Router();
router.get("/admin-stats", userControllers.getAdminStats);

router.get("/user-stats/:email", userControllers.getUserStats);
router.get("/donor-stats/:email", userControllers.getDonorStats);
router.get("/", userControllers.getAllUsers);
router.get("/:email", userControllers.getUserByEmail);
router.delete("/:email", userControllers.deleteUserByEmail);
router.put("/:email", userControllers.updateUserRole);

const userRoutes = router;
module.exports = userRoutes;
