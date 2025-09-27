const express = require("express");
const userRoutes = require("../users/user.routes");
const foodsRoutes = require("../foods/foods.routes");
const manageFoodRoutes = require("../manageFoods/manageFoods.routes");
const authRoutes = require("../auth/auth.routes");
const ratingRoutes = require("../rating/rating.routes");
const routes = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    routes: userRoutes,
  },
  {
    path: "/foods",
    routes: foodsRoutes,
  },
  {
    path: "/manage-food",
    routes: manageFoodRoutes,
  },
  {
    path: "/auth",
    routes: authRoutes,
  },
  {
    path: "/rating",
    routes: ratingRoutes,
  },
];

moduleRoutes.forEach((route) => {
  routes.use(route.path, route.routes);
});

module.exports = routes;
