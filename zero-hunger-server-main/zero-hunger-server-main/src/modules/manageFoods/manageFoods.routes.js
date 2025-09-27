const express = require("express");
const manageFoodControllers = require("./manageFoods.controller");
const router = express.Router();

router.post("/", manageFoodControllers.createManageFood);
router.get("/:email", manageFoodControllers.getManageFoodByUser);
router.get("/donor/:email", manageFoodControllers.getManageFoodByDonor);
router.delete("/:id", manageFoodControllers.deleteManageFood);
router.put("/:id", manageFoodControllers.updateManageFoodStatus);
router.put("/delivery/:id", manageFoodControllers.updateDeliveryStatus);

const manageFoodRoutes = router;
module.exports = manageFoodRoutes;
