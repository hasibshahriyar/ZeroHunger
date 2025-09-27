const db = require("../../../config/db.config");

// Get user stats by email
const getUserStats = async (email) => {
  const query =
    "SELECT status,COUNT(*) as count FROM manage_food WHERE recipientEmail=? GROUP BY status";
  return new Promise((resolve, reject) => {
    db.query(query, [email], (err, results) => {
      if (err) reject(err);
      let resultObj = {};
      results.forEach((result) => {
        resultObj[result.status] = result.count;
      });
      resolve(resultObj);
    });
  });
};

// Get donor stats by email
const getDonorStats = async (email) => {
  const categoryQuery = `SELECT category, COUNT(*) as count FROM manage_food WHERE donorEmail=? GROUP BY category`;
  const recipientCount =
    "SELECT COUNT(DISTINCT recipientEmail) as totalRecipient FROM manage_food WHERE donorEmail=?";
  const statusQuery =
    "SELECT status,COUNT(*) as count FROM foods WHERE email=? GROUP BY status";
  const totalAddedFoodQuery =
    "SELECT COUNT(*) as totalFoodCount FROM foods WHERE email=?";
  const deliveredQuery = `SELECT count(*) as count FROM manage_food WHERE deliveryStatus="delivered" AND donorEmail=?`;

  return new Promise((resolve, reject) => {
    db.query(recipientCount, [email], (err, totalRecipient) => {
      if (err) reject(err);
      db.query(categoryQuery, [email], (err, categoryData) => {
        if (err) reject(err);
        db.query(statusQuery, [email], (err, statusData) => {
          if (err) reject(err);
          db.query(totalAddedFoodQuery, [email], (err, totalFood) => {
            if (err) reject(err);
            db.query(deliveredQuery, [email], (err, delivered) => {
              if (err) reject(err);
              const responseData = {
                categoryData,
                totalRecipient: totalRecipient[0].totalRecipient,
                statusData,
                totalFood: totalFood[0].totalFoodCount,
                delivered: delivered[0].count,
              };
              resolve(responseData);
            });
          });
        });
      });
    });
  });
};

// Get all users
const getAllUsers = async () => {
  const query = "SELECT * FROM users";
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Get user by email
const getUserByEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email=?";
  return new Promise((resolve, reject) => {
    db.query(query, [email], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

// Delete user by email
const deleteUserByEmail = async (email) => {
  const query = "DELETE FROM users WHERE email=?";
  return new Promise((resolve, reject) => {
    db.query(query, [email], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Update user role by email
const updateUserRole = async (email, role) => {
  const query = "UPDATE users SET role=? WHERE email=?";
  return new Promise((resolve, reject) => {
    db.query(query, [role, email], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};
const getAdminStats = async () => {
  const userQuery = `
    SELECT 
      (SELECT COUNT(DISTINCT recipientEmail) FROM manage_food) AS uniqueRecipients,
      (SELECT COUNT(DISTINCT email) FROM foods) AS uniqueDonor,
      (SELECT SUM(quantity) FROM foods) AS totalQuantity,
      (SELECT COUNT(*) FROM foods) AS totalFood,
      (SELECT COUNT(*) FROM foods WHERE status = "delivered") AS totalDelivered;
  `;

  const query = `
    SELECT t1.email, t1.totalQuantity, t2.avg_expire_date 
    FROM 
      (SELECT email, SUM(quantity) AS totalQuantity FROM foods GROUP BY email) AS t1
    JOIN 
      (SELECT email, ROUND(AVG(expire_date), 2) AS avg_expire_date FROM foods GROUP BY email) AS t2
    ON t1.email = t2.email;
  `;

  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) {
        return reject(err);
      }
      db.query(userQuery, (err, userResults) => {
        if (err) {
          return reject(err);
        }
        resolve({ results, userResults: userResults[0] });
      });
    });
  });
};
const userServices = {
  getUserStats,
  getDonorStats,
  getAllUsers,
  getUserByEmail,
  deleteUserByEmail,
  updateUserRole,
  getAdminStats,
};
module.exports = userServices;
