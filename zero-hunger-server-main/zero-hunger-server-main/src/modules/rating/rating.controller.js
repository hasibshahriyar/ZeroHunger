const ratingServices = require("./rating.service");
const addRating = async (req, res) => {
  const { suggestion, feedback, name, email, userImage, ratingValue, date } =
    req.body;

  try {
    const result = await ratingServices.addRating(
      suggestion,
      feedback,
      name,
      email,
      userImage,
      ratingValue,
      date
    );
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to add rating" });
  }
};

const getRatings = async (req, res) => {
  try {
    const ratings = await ratingServices.getRatings();
    res.status(200).send(ratings);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to get ratings" });
  }
};

const deleteRating = async (req, res) => {
  const { id } = req.params;

  try {
    await ratingServices.deleteRating(id);
    res.status(200).send({ message: "Rating deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to delete rating" });
  }
};

const ratingControllers = {
  addRating,
  getRatings,
  deleteRating,
};
module.exports = ratingControllers;
