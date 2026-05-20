const db = require("../../../config/db.config");

const createFood = async (data) => {
  const {
    email, user_name, user_photo, status, additional_notes,
    expire_date, location, quantity, food_name, food_photo, category, category_image,
  } = data;
  const query = `INSERT INTO foods (email, user_name, user_photo, status, additional_notes, expire_date, location, quantity, food_name, food_photo, category, category_image)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`;
  const result = await db.query(query, [email, user_name, user_photo, status, additional_notes, expire_date, location, quantity, food_name, food_photo, category, category_image]);
  return result.rows;
};

const getAllFoods = async () => {
  const result = await db.query("SELECT * FROM foods");
  return result.rows;
};

const getFoodNamesByCategory = async (category) => {
  const result = await db.query("SELECT food_name FROM foods WHERE category=$1", [category]);
  return result.rows.map((food) => food.food_name);
};

const getUniqueCategories = async () => {
  const result = await db.query("SELECT DISTINCT category, category_image FROM foods");
  return result.rows;
};

const getFoodsByCategory = async (category, search, orderBy) => {
  let query = "SELECT * FROM foods WHERE category=$1";
  const params = [category];
  if (search) {
    params.push(search);
    query += ` AND food_name=$${params.length}`;
  }
  const allowed = ["quantity", "expire_date", "food_name"];
  if (orderBy && allowed.includes(orderBy)) {
    query += ` ORDER BY ${orderBy}`;
  }
  const result = await db.query(query, params);
  return result.rows;
};

const getFoodsForDonor = async (email) => {
  const result = await db.query("SELECT * FROM foods WHERE email=$1", [email]);
  return result.rows;
};

const deleteFood = async (id) => {
  const result = await db.query("DELETE FROM foods WHERE id=$1", [id]);
  return result.rows;
};

const getSingleFood = async (id) => {
  const result = await db.query("SELECT * FROM foods WHERE id=$1", [id]);
  return result.rows[0];
};

const updateFood = async (id, data) => {
  const { category, additional_notes, expire_date, location, quantity, food_name, food_photo, category_image } = data;
  const query = "UPDATE foods SET category=$1, additional_notes=$2, expire_date=$3, location=$4, quantity=$5, food_name=$6, food_photo=$7, category_image=$8 WHERE id=$9";
  const result = await db.query(query, [category, additional_notes, expire_date, location, quantity, food_name, food_photo, category_image, id]);
  return result.rows;
};

const updateFoodStatus = async (id, status) => {
  const result = await db.query("UPDATE foods SET status=$1 WHERE id=$2", [status, id]);
  return result.rows;
};

const foodsServices = {
  createFood, getAllFoods, getFoodNamesByCategory, getUniqueCategories,
  getFoodsByCategory, getFoodsForDonor, deleteFood, getSingleFood, updateFood, updateFoodStatus,
};

module.exports = foodsServices;
