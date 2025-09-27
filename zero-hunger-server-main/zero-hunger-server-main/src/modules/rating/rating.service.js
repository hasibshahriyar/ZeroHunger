const db = require("../../../config/db.config");

const addRating = (
  suggestion,
  feedback,
  name,
  email,
  userImage,
  ratingValue,
  date
) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO rating (suggestion, feedback, name, email, userImage, ratingValue, date) VALUES(?,?,?,?,?,?,?)";
    db.query(
      query,
      [suggestion, feedback, name, email, userImage, ratingValue, date],
      (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      }
    );
  });
};

const getRatings = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM rating ORDER BY date DESC";
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const deleteRating = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM rating WHERE id=?";
    db.query(query, [id], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const ratingServices = {
  addRating,
  getRatings,
  deleteRating,
};

module.exports = ratingServices;
