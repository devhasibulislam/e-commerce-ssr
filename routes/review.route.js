/**
 * Title: Review route credentials
 * Description: Where to pass out throughout route credentials
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* external import */
const express = require("express");

/* internal imports */
const reviewController = require("../controllers/review.controller");

/* router level imports */
const router = express.Router();

/* router method integration */
// display all reviews and insert a review
router
  .route("/")
  .post(reviewController.insertNewReview)
  .get(reviewController.displayAllReviews);

// display, update and remove specific review
router
  .route("/:id")
  .get(reviewController.displaySpecificReview)
  .patch(reviewController.updateSpecificReview)
  .delete(reviewController.removeSpecificReview);

/* export review router */
module.exports = router;
