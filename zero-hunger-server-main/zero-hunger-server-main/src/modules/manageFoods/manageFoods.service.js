const db = require("../../../config/db.config");

const createManageFood = async (data) => {
  const {
    food_id, status, deliveryStatus, recipientEmail, recipientName, recipientImage,
    donorName, donorEmail, donorImage, additional_notes, expire_date, location,
    quantity, food_name, food_photo, category, category_image,
  } = data;
  const query = `INSERT INTO manage_food (
    food_id, status, deliveryStatus, recipientEmail, recipientName, recipientImage,
    donorName, donorEmail, donorImage, additional_notes, expire_date, location,
    quantity, food_name, food_photo, category, category_image
  ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`;
  const result = await db.query(query, [
    food_id, status, deliveryStatus, recipientEmail, recipientName, recipientImage,
    donorName, donorEmail, donorImage, additional_notes, expire_date, location,
    quantity, food_name, food_photo, category, category_image,
  ]);
  return result.rows;
};

const getManageFoodByUser = async (email) => {
  const result = await db.query("SELECT * FROM manage_food WHERE recipientEmail=$1", [email]);
  return result.rows;
};

const getManageFoodByDonor = async (email) => {
  const result = await db.query("SELECT * FROM manage_food WHERE donorEmail=$1", [email]);
  return result.rows;
};

const deleteManageFood = async (id) => {
  const result = await db.query("DELETE FROM manage_food WHERE food_id=$1", [id]);
  return result.rows;
};

const updateManageFoodStatus = async (id, status) => {
  const result = await db.query("UPDATE manage_food SET status=$1 WHERE id=$2", [status, id]);
  return result.rows;
};

const updateDeliveryStatus = async (id, deliveryStatus) => {
  const result = await db.query("UPDATE manage_food SET deliveryStatus=$1 WHERE id=$2", [deliveryStatus, id]);
  return result.rows;
};

const manageFoodServices = {
  createManageFood, getManageFoodByUser, getManageFoodByDonor,
  deleteManageFood, updateManageFoodStatus, updateDeliveryStatus,
};

module.exports = manageFoodServices;
