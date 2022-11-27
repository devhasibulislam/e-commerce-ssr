/**
 * Title: Stock route
 * Description: Route which handle methods and middlewares
 * Author: Hasibul Islam
 * Date: 25/11/2022
 */

/* external import */
const express = require("express");

/* internal import */
const stockController = require("../controllers/stock.controller");
const imageController = require("../controllers/image.controller");
const uploader = require("../middlewares/cloudinaryUpload.middleware");

/* router level connection */
const router = express.Router();

/* router level integration */
// upload & update blog thumbnail
router
  .route("/thumbnail")
  .post(uploader.single("thumbnail"), imageController.cloudinaryUpload)
  .patch(uploader.single("thumbnail"), imageController.cloudinaryUpdate);

router
  .route("/")
  .post(stockController.insertNewStock)
  .get(stockController.displayAllStocks);

router
  .route("/:id")
  .get(stockController.displaySpecificStock)
  .patch(stockController.updateSpecificStock)
  .delete(stockController.removeSpecificStock);

/* export stock router */
module.exports = router;
