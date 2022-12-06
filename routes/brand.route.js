/**
 * Title: Brand router credentials
 * Description: Where pass out throughout route credentials
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* external import */
const express = require("express");

/* internal import */
const brandController = require("../controllers/brand.controller");
const imageController = require("../controllers/image.controller");
const uploader = require("../middlewares/cloudinaryUpload.middleware");

/* router level connection */
const router = express.Router();

/* router method integration */
// upload & update blog logo
router
  .route("/logo")
  .post(uploader.single("logo"), imageController.cloudinaryUpload)
  .patch(uploader.single("logo"), imageController.cloudinaryUpdate);

// display all blogs and insert a blog
router
  .route("/")
  .post(brandController.insertNewBrand)
  .get(brandController.displayAllBrands);

// display, update and remove specific brand
router
  .route("/:id")
  .get(brandController.displaySpecificBrand)
  .patch(brandController.updateSpecificBrand)
  .delete(brandController.removeSpecificBrand);

/* export brand router */
module.exports = router;
