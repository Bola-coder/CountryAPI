const dotenv = require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("APP listening on PORT ", PORT);
});
