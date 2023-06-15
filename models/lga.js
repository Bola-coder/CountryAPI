const mongoose = require("mongoose");
const slugify = require("slugify");

const lgaSchema = mongoose.Schema({
  state: {
    type: String,
    required: [true, "A state should have a name"],
    unique: [true, "No two states should have the same name"],
    trim: true,
  },
  localGovernments: {
    type: [String],
    required: [true, "Please provide local governments"],
  },
  totalLocalGovernments: {
    type: Number,
  },
});

const LGA = mongoose.model("LGA", lgaSchema);

module.exports = LGA;
