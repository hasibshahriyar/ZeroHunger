const express = require("express");
const ratingControllers = require("./rating.controller");

const router = express.Router();

// Add Rating route
router.post("/", ratingControllers.addRating);

// Get all Ratings route
router.get("/", ratingControllers.getRatings);

// Delete Rating route
router.delete("/:id", ratingControllers.deleteRating);

const ratingRoutes = router;
module.exports = ratingRoutes;
