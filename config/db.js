const mongoose = require("mongoose");

let db_url = process.env.mongoURI;

const connectToDB = () => {
  mongoose
    .connect(db_url)
    .then((con) => {
      console.log(`DB connected successfully`);
    })
    .catch((err) => {
      console.log(`Error when connecting to DB ${err}`);
    });
};

module.exports = connectToDB;
