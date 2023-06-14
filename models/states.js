const mongoose = require("mongoose");
const slugify = require("slugify");

const stateSchema = mongoose.Schema({
  state: {
    type: String,
    required: [true, "A state should have a name"],
    unique: [true, "No two states should have the same name"],
    trim: true,
  },
  capital: {
    type: String,
    required: [true, "A state should have a capital"],
    trim: true,
  },
  region: {
    type: String,
    required: [true, "A state should belong to a region"],
    enum: [
      "North Central",
      "North East",
      "North West",
      "South East",
      "South South",
      "South West",
    ],
    trim: true,
  },
  slug: {
    type: String,
  },
});

stateSchema.pre("save", function (next) {
  this.slug = slugify(this.state, { lower: true });
  next();
});

const States = mongoose.model("States", stateSchema);

module.exports = States;
