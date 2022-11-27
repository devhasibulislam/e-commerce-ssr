/**
 * Title: Category router credentials
 * Description: Where to pass out throughout route credentials
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* external import */
const express = require("express");

/* internal imports */
const categoryController = require("../controllers/category.controller");
const imageController = require("../controllers/image.controller");
const uploader = require("../middlewares/cloudinaryUpload.middleware");

/* router level imports */
const router = express.Router();

/* router method integration */
// upload & update blog thumbnail
router
  .route("/thumbnail")
  .post(uploader.single("thumbnail"), imageController.cloudinaryUpload)
  .patch(uploader.single("thumbnail"), imageController.cloudinaryUpdate);

router
  .route("/")
  .post(categoryController.insertNewCategory)
  .get(categoryController.displayAllCategories);

router
  .route("/:id")
  .get(categoryController.displaySpecificCategory)
  .patch(categoryController.updateSpecificCategory)
  .delete(categoryController.removeSpecificCategory);

/* export review router */
module.exports = router;
