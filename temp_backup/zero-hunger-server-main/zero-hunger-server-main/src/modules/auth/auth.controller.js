const authServices = require("./auth.service");

const register = async (req, res) => {
  const { username, email, password, userImage, role } = req.body;

  try {
    const response = await authServices.registerUser(
      username,
      email,
      password,
      userImage,
      role
    );
    res.status(response.status).send(response);
  } catch (err) {
    res.status(err.status).send({ message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await authServices.loginUser(email, password);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(err.status).send({ message: err.message });
  }
};

const logout = (req, res) => {
  const response = authServices.logoutUser();
  res.status(response.status).send(response);
};

const authControllers = {
  register,
  login,
  logout,
};

module.exports = authControllers;
