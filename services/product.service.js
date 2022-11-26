/* internal import */
const Product = require("../schemas/product.schema");

/* insert new product */
exports.insertNewProduct = async (data) => {
  const result = await Product.create(data);
  return result;
};

/* display all products */
exports.displayAllProducts = async ({ page }) => {
  const contentLimit = process.env.CONTENT_LIMIT;
  const result = await Product.find()
    .skip((Number(page) - 1) * contentLimit)
    .limit(page && contentLimit);
  return result;
};

/* display specific product */
exports.displaySpecificProduct = async ({ id }) => {
  const result = await Product.findById(id).populate([
    {
      path: "category",
      select: "thumbnail title -_id",
    },
    {
      path: "brand",
      select: "thumbnail title -_id",
    },
  ]);
  return result;
};

/* update specific product */
exports.updateSpecificProduct = async (id, data) => {
  const result = await Product.updateOne(
    { _id: id },
    { $set: data },
    { upsert: false, runValidators: true }
  );
  return result;
};

/* remove specific product */
exports.removeSpecificProduct = async ({ id }) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
