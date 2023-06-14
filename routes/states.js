const express = require("express");
const statesController = require("../controllers/states");

const router = express.Router();

router
  .route("/states")
  .get(statesController.getAllState)
  .post(statesController.createNewState);

router.route("/states/:id").get(statesController.getSingleStateByID);
router.route("/states/slug/:slug").get(statesController.getSingleStateBySlug);

module.exports = router;
