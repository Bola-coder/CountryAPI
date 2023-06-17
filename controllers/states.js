const AppError = require("./../utilities/AppError");
const catchAsync = require("./../utilities/CatchAsync");
const States = require("./../models/states");

// Get all states
const getAllState = catchAsync(async (req, res, next) => {
  const states = await States.find().sort("state");

  if (!states) {
    return next(new AppError("Error while getting all states", 404));
  }
  res.status(200).json({
    result: states.length,
    status: "success",
    states,
  });
});

// Create a new State
// const createNewState = catchAsync(async (req, res, next) => {
//   const state = await States.create(req.body);

//   if (!state) {
//     return next(new AppError("Failed to create new state", 404));
//   }

//   res.status(200).json({
//     status: "success",
//     state,
//   });
// });

// Get Single state using the state ID
const getSingleStateByID = catchAsync(async (req, res, next) => {
  const stateId = req.params.id;

  if (!stateId) {
    return next(new AppError("Please provide an ID"));
  }

  const state = await States.findById(stateId);

  if (!state) {
    return next(new AppError("No state with the specified ID found!!!"));
  }

  res.status(200).json({
    status: "success",
    state,
  });
});

// Get Single state using the state slug
const getSingleStateBySlug = catchAsync(async (req, res, next) => {
  const slug = req.params.slug;

  if (!slug) {
    return next(new AppError("Please provide an ID"));
  }

  const state = await States.findOne({ slug: slug });

  if (!state) {
    return next(new AppError("No state with the specified slug found!!!"));
  }

  res.status(200).json({
    status: "success",
    state,
  });
});

// Get States in A Region
const getStatesInARegion = catchAsync(async (req, res, next) => {
  const region = req.body.region;
  if (!region) {
    return next(
      new AppError("Please include the region in the request parameter", 404)
    );
  }
  const regionList = [
    "North Central",
    "North East",
    "North West",
    "South East",
    "South South",
    "South West",
  ];
  let isValid = false;
  for (let i = 0; i < region.length; i++) {
    if (region === regionList[i]) {
      isValid = true;
    }
  }
  if (!isValid) {
    return next(
      new AppError("Invalid region. Please input in a valid region", 400)
    );
  }
  const states = await States.find({ region: region });
  if (!states) {
    return next(
      new AppError("Error getting states in the region supplied", 404)
    );
  }

  res.status(200).json({
    result: states.length,
    region: region,
    status: "success",
    states,
  });
});
module.exports = {
  getAllState,
  // createNewState,
  getSingleStateByID,
  getSingleStateBySlug,
  getStatesInARegion,
};
