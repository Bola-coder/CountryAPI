const express = require("express");
const statesController = require("../controllers/states");

const router = express.Router();

router
  .route("/")
  .get(statesController.getAllState)
  .post(statesController.createNewState);

router.route("/:id").get(statesController.getSingleStateByID);
router.route("/slug/:slug").get(statesController.getSingleStateBySlug);

module.exports = router;
