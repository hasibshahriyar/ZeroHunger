const foodsServices = require("./foods.service");

const createFood = async (req, res) => {
  try {
    const results = await foodsServices.createFood(req.body);
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating food entry");
  }
};

const getAllFoods = async (req, res) => {
  try {
    const results = await foodsServices.getAllFoods();
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving all foods");
  }
};

const getFoodNamesByCategory = async (req, res) => {
  try {
    const results = await foodsServices.getFoodNamesByCategory(
      req.params.category
    );
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving food names");
  }
};

const getUniqueCategories = async (req, res) => {
  try {
    const results = await foodsServices.getUniqueCategories();
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving unique categories");
  }
};

const getFoodsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { name, sort } = req.query;
    const results = await foodsServices.getFoodsByCategory(
      category,
      name,
      sort
    );
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving foods by category");
  }
};

const getFoodsForDonor = async (req, res) => {
  try {
    const results = await foodsServices.getFoodsForDonor(req.params.email);
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving foods for donor");
  }
};

const deleteFood = async (req, res) => {
  try {
    const results = await foodsServices.deleteFood(req.params.id);
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting food");
  }
};

const getSingleFood = async (req, res) => {
  try {
    const results = await foodsServices.getSingleFood(req.params.id);
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving single food");
  }
};

const updateFood = async (req, res) => {
  try {
    const results = await foodsServices.updateFood(req.params.id, req.body);
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating food");
  }
};

const updateFoodStatus = async (req, res) => {
  try {
    const results = await foodsServices.updateFoodStatus(
      req.params.id,
      req.body.status
    );
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating food status");
  }
};
const foodControllers = {
  createFood,
  getAllFoods,
  getFoodNamesByCategory,
  getUniqueCategories,
  getFoodsByCategory,
  getFoodsForDonor,
  deleteFood,
  getSingleFood,
  updateFood,
  updateFoodStatus,
};
module.exports = foodControllers;
