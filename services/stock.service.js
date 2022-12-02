/* internal import */
const Stock = require("../schemas/stock.schema");
const removeImageUtility = require("../utilities/removeImage.utility");

/* insert new stock */
exports.insertNewStock = async (data) => {
  const result = await Stock.create(data);
  return result;
};

/* display all stocks */
exports.displayAllStocks = async ({ page }) => {
  const contentLimit = process.env.CONTENT_LIMIT;
  const result = await Stock.find()
    .skip((Number(page) - 1) * contentLimit)
    .limit(page && contentLimit);
  return result;
};

/* display specific stock */
exports.displaySpecificStock = async ({ id }) => {
  const result = await Stock.findById(id).populate([
    {
      path: "categories",
      select: "thumbnail title -_id",
    },
    {
      path: "brands",
      select: "thumbnail title -_id",
    },
    {
      path: "stores",
      select: "title -_id",
    },
    {
      path: "suppliers",
      select: "avatar name -_id",
    },
  ]);
  return result;
};

/* update specific stock */
exports.updateSpecificStock = async (id, data) => {
  const result = await Stock.updateOne(
    { _id: id },
    { $set: data },
    { upsert: false, runValidators: true }
  );
  return result;
};

/* remove specific stock */
exports.removeSpecificStock = async ({ id }) => {
  const result = await Stock.findByIdAndDelete(id);

  if (result.thumbnail.public_id) {
    const public_id = result.thumbnail.public_id;
    await removeImageUtility(public_id);
  }

  return result;
};
