const express = require("express");
const morgan = require("morgan");
const stateRoute = require("./routes/states");
const lgaRoute = require("./routes/lga");
const AppError = require("./utilities/AppError");
const errorController = require("./controllers/error");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.status(200).json({
    status: "success",
    message:
      "Welcome to Nigeria LGA API. Please visit /api/v1/states or /api/v1/lga to get started or checkout the documentation on \n\n https://documenter.getpostman.com/view/16535188/2s93sgVVjm",
  });
});
app.use("/api/v1/states", stateRoute);
app.use("/api/v1/lga", lgaRoute);

app.all("*", (req, res, next) => {
  const error = new AppError(
    `Cant find ${req.originalUrl} on this server!`,
    404
  );
  next(error);
});
app.use(errorController); // Global Error handler / middleware

module.exports = app;
