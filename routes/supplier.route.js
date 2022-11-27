/**
 * Title: Supplier route credentials
 * Description: Where pass out throughout route credentials
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* external import */
const express = require("express");

/* internal import */
const supplierController = require("../controllers/supplier.controller");
const imageController = require("../controllers/image.controller");
const uploader = require("../middlewares/cloudinaryUpload.middleware");

/* router level connection */
const router = express.Router();

/* router method integration */
// upload user avatar
router
  .route("/avatar")
  .post(uploader.single("avatar"), imageController.cloudinaryUpload)
  .patch(uploader.single("avatar"), imageController.cloudinaryUpdate);

router
  .route("/")
  .post(supplierController.insertNewSupplier)
  .get(supplierController.displayAllSupplier);

router
  .route("/:id")
  .get(supplierController.displaySpecificSupplier)
  .patch(supplierController.updateSpecificSupplier)
  .delete(supplierController.removeSpecificSupplier);

/* export supplier route */
module.exports = router;
