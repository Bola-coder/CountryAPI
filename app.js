const express = require("express");
const morgan = require("morgan");
const stateRoute = require("./routes/states");
const AppError = require("./utilities/AppError");
const errorController = require("./controllers/error");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1", stateRoute);

app.all("*", (req, res, next) => {
  const error = new AppError(
    `Cant find ${req.originalUrl} on this server!`,
    404
  );
  next(error);
});
app.use(errorController); // Global Error handler / middleware

module.exports = app;
