const express = require("express");
const lgaController = require("../controllers/lga");

const router = express.Router();

router.route("/:state").get(lgaController.getLGAsByState);

module.exports = router;
