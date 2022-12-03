/* internal import */
const Product = require("../schemas/product.schema");
const removeImageUtility = require("../utilities/removeImage.utility");

/* insert new product */
exports.insertNewProduct = async (data) => {
  const result = await Product.create(data);
  return result;
};

/* display all products */
exports.displayAllProducts = async ({ page }) => {
  const contentLimit = process.env.CONTENT_LIMIT;
  const result = await Product.find()
    .sort("-createdAt")
    .skip(page && (Number(page) - 1) * contentLimit)
    .limit(page && contentLimit)
    .populate([
      {
        path: "category",
        select: "thumbnail title _id",
      },
      {
        path: "brand",
        select: "logo title _id",
      },
    ]);
  return result;
};

/* display specific product */
exports.displaySpecificProduct = async ({ id }) => {
  const result = await Product.findById(id).populate([
    {
      path: "category",
      select: "thumbnail title _id",
    },
    {
      path: "brand",
      select: "logo title _id",
    },
  ]);
  return result;
};

/* update specific product */
exports.updateSpecificProduct = async (id, data) => {
  const product = await Product.findById(id);

  if (product.thumbnails.length !== data.thumbnails.length)
    for (let i = 0; i < product.thumbnails.length; i++)
      await removeImageUtility(product.thumbnails[i].public_id);

  const result = await Product.updateOne(
    { _id: id },
    { $set: data },
    { upsert: false, runValidators: true }
  );
  return result;
};

/* remove specific product */
exports.removeSpecificProduct = async ({ id }) => {
  const product = await Product.findById(id);
  for (let i = 0; i < product.thumbnails.length; i++)
    await removeImageUtility(product.thumbnails[i].public_id);

  const result = await Product.findByIdAndDelete(id);
  return result;
};
