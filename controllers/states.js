const getAllState = (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "State controller",
  });
};

module.exports = { getAllState };
