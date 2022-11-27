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
// upload & update blog thumbnail
router
  .route("/thumbnail")
  .post(uploader.single("thumbnail"), imageController.cloudinaryUpload)
  .patch(uploader.single("thumbnail"), imageController.cloudinaryUpdate);

router
  .route("/")
  .post(brandController.insertNewBrand)
  .get(brandController.displayAllBrands);

router
  .route("/:id")
  .get(brandController.displaySpecificBrand)
  .patch(brandController.updateSpecificBrand)
  .delete(brandController.removeSpecificBrand);

/* export brand router */
module.exports = router;
