/* internal import */
const Category = require("../schemas/category.schema");

/* insert new category */
exports.insertNewCategory = async (data) => {
  const result = await Category.create(data);
  return result;
};

/* display all categories */
exports.displayAllCategories = async ({ page }) => {
  const contentLimit = process.env.CONTENT_LIMIT;
  const result = await Category.find()
    .skip((Number(page) - 1) * contentLimit)
    .limit(page && contentLimit);
  return result;
};

/* display specific category */
exports.displaySpecificCategory = async ({ id }) => {
  const result = await Category.findById(id);
  return result;
};

/* update specific category */
exports.updateSpecificCategory = async (id, data) => {
  const result = await Category.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

/* remove specific category */
exports.removeSpecificCategory = async ({ id }) => {
  const result = await Category.findByIdAndDelete(id);
  return result;
};
