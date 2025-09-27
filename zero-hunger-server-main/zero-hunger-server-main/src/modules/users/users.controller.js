const userServices = require("./users.service");

const getUserStats = async (req, res) => {
  const email = req.params.email;
  try {
    const userStats = await userServices.getUserStats(email);
    res.send(userStats);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving user stats");
  }
};

const getDonorStats = async (req, res) => {
  const email = req.params.email;
  try {
    const donorStats = await userServices.getDonorStats(email);
    res.send(donorStats);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving donor stats");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving users");
  }
};

const getUserByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const user = await userServices.getUserByEmail(email);
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving user");
  }
};

const deleteUserByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const result = await userServices.deleteUserByEmail(email);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting user");
  }
};

const updateUserRole = async (req, res) => {
  const email = req.params.email;
  const { role } = req.body;
  try {
    const result = await userServices.updateUserRole(email, role);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating user role");
  }
};
const getAdminStats = async (req, res) => {
  try {
    const data = await userServices.getAdminStats();

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const userControllers = {
  getUserStats,
  getDonorStats,
  getAllUsers,
  getUserByEmail,
  deleteUserByEmail,
  updateUserRole,
  getAdminStats,
};

module.exports = userControllers;
