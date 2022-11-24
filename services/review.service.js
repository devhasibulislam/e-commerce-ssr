/* internal export */
const Review = require("../schemas/review.schema");

/* insert new review */
exports.insertNewReview = async (data) => {
  const result = await Review.create(data);
  return result;
};

/* display all reviews */
exports.displayAllReviews = async ({ page }) => {
  const contentLimit = process.env.CONTENT_LIMIT;
  const result = await Review.find()
    .skip((Number(page) - 1) * contentLimit)
    .limit(page && contentLimit);
  return result;
};

/* display specific review */
exports.displaySpecificReview = async ({ id }) => {
  const result = await Review.findById(id);
  return result;
};

/* update specific review */
exports.updateSpecificReview = async (id, data) => {
  const result = await Review.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

/* remove specific review */
exports.removeSpecificReview = async ({ id }) => {
  const result = await Review.findByIdAndDelete(id);
  return result;
};
