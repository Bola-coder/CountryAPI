const express = require("express");
const statesController = require("../controllers/states");

const router = express.Router();

router
  .route("/states")
  .get(statesController.getAllState)
  .post(statesController.createNewState);

module.exports = router;
