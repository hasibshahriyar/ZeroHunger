const db = require("../../../config/db.config");

const createFood = (data) => {
  const {
    email,
    user_name,
    user_photo,
    status,
    additional_notes,
    expire_date,
    location,
    quantity,
    food_name,
    food_photo,
    category,
    category_image,
  } = data;

  const query =
    "INSERT INTO foods (email, user_name, user_photo, status, additional_notes, expire_date, location, quantity, food_name, food_photo, category, category_image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  return new Promise((resolve, reject) => {
    db.query(
      query,
      [
        email,
        user_name,
        user_photo,
        status,
        additional_notes,
        expire_date,
        location,
        quantity,
        food_name,
        food_photo,
        category,
        category_image,
      ],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

const getAllFoods = () => {
  const query = "SELECT * FROM foods";
  return new Promise((resolve, reject) => {
    db.query(query, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const getFoodNamesByCategory = (category) => {
  const query = "SELECT food_name FROM foods WHERE category=?";
  return new Promise((resolve, reject) => {
    db.query(query, [category], (err, results) => {
      if (err) reject(err);
      let foodName = [];
      if (results) {
        results.forEach((food) => foodName.push(food?.food_name));
      }
      resolve(foodName);
    });
  });
};

const getUniqueCategories = () => {
  const query = "SELECT DISTINCT category, category_image FROM foods";
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const getFoodsByCategory = (category, search, orderBy) => {
  let query = `SELECT * FROM foods WHERE category=?`;
  const params = [category];

  if (search) {
    query += ` AND food_name=?`;
    params.push(search);
  }
  if (orderBy) {
    query += ` ORDER BY ${orderBy}`;
  }

  return new Promise((resolve, reject) => {
    db.query(query, params, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const getFoodsForDonor = (email) => {
  const query = "SELECT * FROM foods WHERE email=?";
  return new Promise((resolve, reject) => {
    db.query(query, [email], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const deleteFood = (id) => {
  const query = "DELETE FROM foods WHERE id=?";
  return new Promise((resolve, reject) => {
    db.query(query, [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const getSingleFood = (id) => {
  const query = "SELECT * FROM foods WHERE id=?";
  return new Promise((resolve, reject) => {
    db.query(query, [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

const updateFood = (id, data) => {
  const {
    category,
    additional_notes,
    expire_date,
    location,
    quantity,
    food_name,
    food_photo,
    category_image,
  } = data;

  const query =
    "UPDATE foods SET category=?, additional_notes=?, expire_date=?, location=?, quantity=?, food_name=?, food_photo=?, category_image=? WHERE id=?";
  return new Promise((resolve, reject) => {
    db.query(
      query,
      [
        category,
        additional_notes,
        expire_date,
        location,
        quantity,
        food_name,
        food_photo,
        category_image,
        id,
      ],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

const updateFoodStatus = (id, status) => {
  const query = "UPDATE foods SET status=? WHERE id=?";
  return new Promise((resolve, reject) => {
    db.query(query, [status, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};
const foodsServices = {
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

module.exports = foodsServices;
