const manageFoodServices = require("./manageFoods.service");

const createManageFood = async (req, res) => {
  try {
    const results = await manageFoodServices.createManageFood(req.body);
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating manage food entry");
  }
};

const getManageFoodByUser = async (req, res) => {
  try {
    const results = await manageFoodServices.getManageFoodByUser(
      req.params.email
    );
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving manage food for user");
  }
};

const getManageFoodByDonor = async (req, res) => {
  try {
    const results = await manageFoodServices.getManageFoodByDonor(
      req.params.email
    );
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving manage food for donor");
  }
};

const deleteManageFood = async (req, res) => {
  try {
    const results = await manageFoodServices.deleteManageFood(req.params.id);
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting manage food");
  }
};

const updateManageFoodStatus = async (req, res) => {
  try {
    const results = await manageFoodServices.updateManageFoodStatus(
      req.params.id,
      req.body.status
    );
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating manage food status");
  }
};

const updateDeliveryStatus = async (req, res) => {
  try {
    const results = await manageFoodServices.updateDeliveryStatus(
      req.params.id,
      req.body.status
    );
    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating delivery status");
  }
};
const manageFoodControllers = {
  createManageFood,
  getManageFoodByUser,
  getManageFoodByDonor,
  deleteManageFood,
  updateManageFoodStatus,
  updateDeliveryStatus,
};

module.exports = manageFoodControllers;
