const AppError = require("./../utilities/AppError");
const catchAsync = require("./../utilities/CatchAsync");
const LGA = require("./../models/lga");

// Get all states
const getLGAsByState = catchAsync(async (req, res, next) => {
  const state = req.params.state;
  const lgaData = await LGA.findOne({ state: state });

  if (!lgaData) {
    return next(new AppError("Error while getting LGAs for" + state, 404));
  }
  res.status(200).json({
    status: "success",
    lgaData,
  });
});

module.exports = {
  getLGAsByState,
};
