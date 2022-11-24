/**
 * Title: Review controller
 * Description: Control request, response and other middlewares
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* internal import */
const reviewService = require("../services/review.service");

/* insert new review */
exports.insertNewReview = async (req, res, next) => {
  try {
    const result = await reviewService.insertNewReview(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Successfully insert new review",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all reviews */
exports.displayAllReviews = async (req, res, next) => {
  try {
    const result = await reviewService.displayAllReviews(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      count: result.length,
      description: "Successfully fetching all reviews",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific review */
exports.displaySpecificReview = async (req, res, next) => {
  try {
    const result = await reviewService.displaySpecificReview(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching specific review",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific review */
exports.updateSpecificReview = async (req, res, next) => {
  try {
    const result = await reviewService.updateSpecificReview(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific review",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific review */
exports.removeSpecificReview = async (req, res, next) => {
  try {
    const result = await reviewService.removeSpecificReview(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully removed specific review",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
