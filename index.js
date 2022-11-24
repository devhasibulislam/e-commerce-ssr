/**
 * Title: Application level initialization
 * Description: Which consume all other sub-directories to convey directly
 * Author: Hasibul Islam
 * Date: 20/11/2022
 */

/* external imports */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

/* internal imports */
const errorHandlerMiddleware = require("./middlewares/errorHandler.middleware");
const consoleMessage = require("./utilities/consoleMessage.utility");

/* router level imports */
const userRoute = require("./routes/user.route");
const blogRoute = require("./routes/blog.route");
const reviewRoute = require("./routes/review.route");
const categoryRoute = require("./routes/category.route");
const brandRoute = require("./routes/brand.route");
const supplierRoute = require("./routes/supplier.route");

/* application level connections */
const app = express();

/* middlewares connections */
app.use(cors());
app.use(express.json());

/* router level connections */
app.use("/user", userRoute);
app.use("/blog", blogRoute);
app.use("/review", reviewRoute);
app.use("/category", categoryRoute);
app.use("/brand", brandRoute);
app.use("/supplier", supplierRoute);

/* global error handlers */
app.use(errorHandlerMiddleware);

/* enable connection */
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      acknowledgement: true,
      message: "Establishing server connection complete",
      description:
        "The request is processing well & returning success message E-Commerce project",
    });
  } catch (error) {
    res.status(204).json({
      acknowledgement: false,
      message: error.name,
      description: error.message,
    });
  }
});

/* database connection */
mongoose
  .connect(process.env.URI_STRING, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    consoleMessage.successMessage(
      `Establish connection with ${process.env.DB_NAME}`
    )
  )
  .catch((error) => consoleMessage.errorMessage(error.message));

/* establish server port */
app.listen(process.env.PORT, () => {
  consoleMessage.successMessage(`App listening on port ${process.env.PORT}`);
});
