/**
 * Title: Product route
 * Description: Route which going to hit methods and middlewares
 * Author: Hasibul Islam
 * Date: 26/11/2022
 */

/* external import */
const express = require("express");

/* internal import */
const productController = require("../controllers/product.controller");
const imageController = require("../controllers/image.controller");
const uploader = require("../middlewares/cloudinaryUpload.middleware");

/* router level import */
const router = express.Router();

/* router method integration */
// upload product thumbnails
router
  .route("/thumbnails")
  .post(uploader.array("thumbnails", 5), imageController.cloudinaryUpload)
  .patch(uploader.array("thumbnails", 5), imageController.cloudinaryUpdate);

router
  .route("/")
  .post(productController.insertNewProduct)
  .get(productController.displayAllProducts);

router
  .route("/:id")
  .get(productController.displaySpecificProduct)
  .patch(productController.updateSpecificProduct)
  .delete(productController.removeSpecificProduct);

/* export product router */
module.exports = router;
