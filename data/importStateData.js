const fs = require("fs");
const dotenv = require("dotenv").config();
const connectToDB = require("./../config/db");
const States = require("./../models/states");

connectToDB(); //Connecting to the database so we can access the database

const states = JSON.parse(fs.readFileSync(`${__dirname}/states.json`, `utf-8`));

const importData = async () => {
  try {
    await States.create(states);
    console.log("States uploaded to db successfully!");
  } catch (err) {
    console.log("Error when uploading states", err);
    process.exit();
  }
};

if (process.argv[2] == "--import") {
  importData();
}
