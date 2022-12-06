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
const authorizeRoleMiddleware = require("../middlewares/authorizeRole.middleware");
const uploader = require("../middlewares/cloudinaryUpload.middleware");
const verifyTokenMiddleware = require("../middlewares/verifyToken.middleware");

/* router level imports */
const router = express.Router();

/* router method integration */
// upload & update blog thumbnail
router
  .route("/thumbnail")
  .post(uploader.single("thumbnail"), imageController.cloudinaryUpload)
  .patch(uploader.single("thumbnail"), imageController.cloudinaryUpdate);

// display all categories and insert a category
router
  .route("/")
  .post(
    verifyTokenMiddleware,
    authorizeRoleMiddleware("admin", "seller"),
    categoryController.insertNewCategory
  )
  .get(categoryController.displayAllCategories);

// display, update and remove specific category
router
  .route("/:id")
  .get(categoryController.displaySpecificCategory)
  .patch(
    verifyTokenMiddleware,
    authorizeRoleMiddleware("admin", "seller"),
    categoryController.updateSpecificCategory
  )
  .delete(
    verifyTokenMiddleware,
    authorizeRoleMiddleware("admin", "seller"),
    categoryController.removeSpecificCategory
  );

/* export review router */
module.exports = router;
