const db = require("../../../config/db.config");

// Get user stats by email
const getUserStats = async (email) => {
  const result = await db.query(
    "SELECT status, COUNT(*) as count FROM manage_food WHERE recipientEmail=$1 GROUP BY status",
    [email]
  );
  const resultObj = {};
  result.rows.forEach((row) => { resultObj[row.status] = row.count; });
  return resultObj;
};

// Get donor stats by email
const getDonorStats = async (email) => {
  const [categoryData, totalRecipient, statusData, totalFood, delivered] = await Promise.all([
    db.query("SELECT category, COUNT(*) as count FROM manage_food WHERE donorEmail=$1 GROUP BY category", [email]),
    db.query("SELECT COUNT(DISTINCT recipientEmail) as totalRecipient FROM manage_food WHERE donorEmail=$1", [email]),
    db.query("SELECT status, COUNT(*) as count FROM foods WHERE email=$1 GROUP BY status", [email]),
    db.query("SELECT COUNT(*) as totalFoodCount FROM foods WHERE email=$1", [email]),
    db.query("SELECT COUNT(*) as count FROM manage_food WHERE deliveryStatus='delivered' AND donorEmail=$1", [email]),
  ]);
  return {
    categoryData: categoryData.rows,
    totalRecipient: totalRecipient.rows[0].totalrecipient,
    statusData: statusData.rows,
    totalFood: totalFood.rows[0].totalfoodcount,
    delivered: delivered.rows[0].count,
  };
};

// Get all users
const getAllUsers = async () => {
  const result = await db.query("SELECT * FROM users");
  return result.rows;
};

// Get user by email
const getUserByEmail = async (email) => {
  const result = await db.query("SELECT * FROM users WHERE email=$1", [email]);
  return result.rows[0];
};

// Delete user by email
const deleteUserByEmail = async (email) => {
  const result = await db.query("DELETE FROM users WHERE email=$1", [email]);
  return result.rows;
};

// Update user role by email
const updateUserRole = async (email, role) => {
  const result = await db.query("UPDATE users SET role=$1 WHERE email=$2", [role, email]);
  return result.rows;
};

const getAdminStats = async () => {
  const [statsResult, donorResult] = await Promise.all([
    db.query(`
      SELECT
        (SELECT COUNT(DISTINCT recipientEmail) FROM manage_food) AS uniqueRecipients,
        (SELECT COUNT(DISTINCT email) FROM foods) AS uniqueDonor,
        (SELECT SUM(quantity) FROM foods) AS totalQuantity,
        (SELECT COUNT(*) FROM foods) AS totalFood,
        (SELECT COUNT(*) FROM foods WHERE status = 'delivered') AS totalDelivered
    `),
    db.query(`
      SELECT t1.email, t1.totalQuantity, t2.avg_expire_date
      FROM
        (SELECT email, SUM(quantity) AS totalQuantity FROM foods GROUP BY email) AS t1
      JOIN
        (SELECT email, ROUND(AVG(expire_date), 2) AS avg_expire_date FROM foods GROUP BY email) AS t2
      ON t1.email = t2.email
    `),
  ]);
  return { results: donorResult.rows, userResults: statsResult.rows[0] };
};

const userServices = {
  getUserStats, getDonorStats, getAllUsers, getUserByEmail,
  deleteUserByEmail, updateUserRole, getAdminStats,
};
module.exports = userServices;
