/* internal import */
const Brand = require("../schemas/brand.schema");

/* insert new brand */
exports.insertNewBrand = async (data) => {
  const result = await Brand.create(data);
  return result;
};

/* display all brands */
exports.displayAllBrands = async ({ page }) => {
  const contentLimit = process.env.CONTENT_LIMIT;
  const result = await Brand.find()
    .skip((Number(page) - 1) * contentLimit)
    .limit(page && contentLimit);
  return result;
};

/* display specific brand */
exports.displaySpecificBrand = async ({ id }) => {
  const result = await Brand.findById(id);
  return result;
};

/* update specific brand */
exports.updateSpecificBrand = async (id, data) => {
  const result = await Brand.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

/* remove specific brand */
exports.removeSpecificBrand = async ({ id }) => {
  const result = await Brand.findByIdAndDelete(id);
  return result;
};
