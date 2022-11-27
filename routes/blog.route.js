/**
 * Title: Blog router credentials
 * Description: Where to pass out throughout route credentials
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* external import */
const express = require("express");

/* internal imports */
const blogController = require("../controllers/blog.controller");
const imageController = require("../controllers/image.controller");
const uploader = require("../middlewares/cloudinaryUpload.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */
// upload & update blog thumbnail
router
  .route("/thumbnail")
  .post(uploader.single("thumbnail"), imageController.cloudinaryUpload)
  .patch(uploader.single("thumbnail"), imageController.cloudinaryUpdate);

// post and get a blog
router
  .route("/")
  .post(blogController.insertNewBlog)
  .get(blogController.displayAllBlogs);

// get, update & delete specific blog
router
  .route("/:id")
  .get(blogController.displaySpecificBlogs)
  .patch(blogController.updateSpecificBlog)
  .delete(blogController.removeSpecificBlog);

/* export blog router */
module.exports = router;
