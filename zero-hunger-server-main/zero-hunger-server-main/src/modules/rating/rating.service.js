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
      "INSERT INTO rating (suggestion, feedback, name, email, userImage, ratingValue, date) VALUES($1,$2,$3,$4,$5,$6,$7)";
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

const getRatings = (callback) => {
  db.query("SELECT * FROM rating ORDER BY date DESC", [], callback);
};

const deleteRating = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM rating WHERE id=$1";
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
