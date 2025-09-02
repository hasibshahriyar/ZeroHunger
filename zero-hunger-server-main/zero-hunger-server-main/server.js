// Import app from a separate file
const app = require(".");
const db = require("./config/db.config");

const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
