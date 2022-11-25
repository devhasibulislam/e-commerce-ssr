/* internal import */
const Store = require("../schemas/store.schema");

/* insert new store */
exports.insertNewStore = async (data) => {
  const result = await Store.create(data);
  return result;
};

/* display all store */
exports.displayAllStore = async ({ page }) => {
  const contentLimit = process.env.CONTENT_LIMIT;
  const result = await Store.find()
    .skip((Number(page) - 1) * contentLimit)
    .limit(page && contentLimit);
  return result;
};

/* display specific store */
exports.displaySpecificStore = async ({ id }) => {
  const result = await Store.findById(id).populate({
    path: "sellers",
    select: "avatar name role -_id",
  });
  return result;
};

/* update specific store */
exports.updateSpecificStore = async (id, data) => {
  const result = await Store.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

/* remove specific store */
exports.removeSpecificStore = async ({ id }) => {
  const result = await Store.findByIdAndDelete(id);
  return result;
};
