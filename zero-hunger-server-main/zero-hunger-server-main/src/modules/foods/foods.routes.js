const express = require("express");
const foodControllers = require("./foods.controller");
const router = express.Router();

router.post("/", foodControllers.createFood);
router.get("/", foodControllers.getAllFoods);
router.get("/food-name/:category", foodControllers.getFoodNamesByCategory);
router.get("/unique-categories", foodControllers.getUniqueCategories);
router.get("/:category", foodControllers.getFoodsByCategory);
router.get("/donor/:email", foodControllers.getFoodsForDonor);
router.delete("/:id", foodControllers.deleteFood);
router.get("/single-foods/:id", foodControllers.getSingleFood);
router.put("/:id", foodControllers.updateFood);
router.put("/update/:id", foodControllers.updateFoodStatus);

const foodsRoutes = router;
module.exports = foodsRoutes;
