const bcrypt = require("bcrypt");
const db = require("../../../config/db.config");

const registerUser = async (username, email, password, userImage, role) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const query =
    "INSERT INTO users (username, email, password, role, userImage) VALUES (?,?,?,?,?)";
  return new Promise((resolve, reject) => {
    db.query(
      query,
      [username, email, hashedPassword, role, userImage],
      (err, result) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            reject({ status: 400, message: "Email already exists" });
          } else {
            reject({ status: 500, message: "Failed to register user" });
          }
        } else {
          const user = { email, username, role, userImage };
          resolve({
            status: 201,
            message: "User registered successfully",
            user,
          });
        }
      }
    );
  });
};

const loginUser = async (email, password) => {
  console.log(email, password);

  const query = "SELECT * FROM users WHERE email=?";
  console.log(query);

  return new Promise((resolve, reject) => {
    db.query(query, [email], async (err, results) => {
      if (err) {
        return reject({ status: 500, message: "Internal Server Error" });
      }

      console.log(results);

      // Check if no user was found
      if (results.length === 0) {
        return reject({ status: 401, message: "Invalid Email" });
      }

      const userData = results[0];

      try {
        // Check if the password is valid
        const isPasswordValid = await bcrypt.compare(
          password,
          userData.password
        );

        if (!isPasswordValid) {
          return reject({ status: 401, message: "Invalid Password" });
        }

        // Return the user object on successful login
        const user = {
          email,
          userImage: userData.userImage,
          username: userData.username,
          role: userData.role,
        };
        resolve({ status: 200, message: "Login successful", user });
      } catch (bcryptError) {
        // Handle any errors with bcrypt
        reject({ status: 500, message: "Error checking password" });
      }
    });
  });
};

const logoutUser = () => {
  return { status: 200, message: "Logout successful" };
};

const authServices = {
  registerUser,
  loginUser,
  logoutUser,
};

module.exports = authServices;
