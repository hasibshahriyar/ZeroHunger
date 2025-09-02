const db = require("../../../config/db.config");

const createManageFood = (data) => {
  const {
    food_id,
    status,
    deliveryStatus,
    recipientEmail,
    recipientName,
    recipientImage,
    donorName,
    donorEmail,
    donorImage,
    additional_notes,
    expire_date,
    location,
    quantity,
    food_name,
    food_photo,
    category,
    category_image,
  } = data;

  const manageQuery = `INSERT INTO manage_food (
      food_id,
      status,
      deliveryStatus,
      recipientEmail,
      recipientName,
      recipientImage,
      donorName,
      donorEmail,
      donorImage,
      additional_notes,
      expire_date,
      location,
      quantity,
      food_name,
      food_photo,
      category,
      category_image
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  return new Promise((resolve, reject) => {
    db.query(manageQuery, Object.values(data), (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const getManageFoodByUser = (email) => {
  const query = "SELECT * FROM manage_food WHERE recipientEmail=?";
  return new Promise((resolve, reject) => {
    db.query(query, [email], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const getManageFoodByDonor = (email) => {
  const query = "SELECT * FROM manage_food WHERE donorEmail=?";
  return new Promise((resolve, reject) => {
    db.query(query, [email], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const deleteManageFood = (id) => {
  const query = "DELETE FROM manage_food WHERE food_id=?";
  return new Promise((resolve, reject) => {
    db.query(query, [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const updateManageFoodStatus = (id, status) => {
  const query = "UPDATE manage_food SET status =? WHERE id =?";
  return new Promise((resolve, reject) => {
    db.query(query, [status, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const updateDeliveryStatus = (id, deliveryStatus) => {
  const query = "UPDATE manage_food SET deliveryStatus=? WHERE id=?";
  return new Promise((resolve, reject) => {
    db.query(query, [deliveryStatus, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};
const manageFoodServices = {
  createManageFood,
  getManageFoodByUser,
  getManageFoodByDonor,
  deleteManageFood,
  updateManageFoodStatus,
  updateDeliveryStatus,
};

module.exports = manageFoodServices;
