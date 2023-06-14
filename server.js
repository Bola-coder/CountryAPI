const dotenv = require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT;
const connectToDB = require("./config/db");

connectToDB();

app.listen(PORT, () => {
  console.log("APP listening on PORT ", PORT);
});
