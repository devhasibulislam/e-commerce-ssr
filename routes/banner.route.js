/**
 * Title: Banner route
 * Description: Route that hit methods
 * Author: Hasibul Islam
 * Date: 02/12/2022
 */

/* external import */
const express = require("express");

/* internal import */
const uploader = require("../middlewares/cloudinaryUpload.middleware");
const imageController = require("../controllers/image.controller");
const bannerController = require("../controllers/banner.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */
// upload & update banner thumbnail
router
  .route("/thumbnail")
  .post(uploader.single("thumbnail"), imageController.cloudinaryUpload)
  .patch(uploader.single("thumbnail"), imageController.cloudinaryUpdate);

// post and get banner
router
  .route("/")
  .get(bannerController.displayAllBanners)
  .post(bannerController.insertNewBanner);

// get, update and remove specific banner
router
  .route("/:id")
  .get(bannerController.displaySpecificBanner)
  .patch(bannerController.modifySpecificBanner)
  .delete(bannerController.removeSpecificBanner);

/* export banner router */
module.exports = router;
