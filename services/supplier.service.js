/* internal import */
const Supplier = require("../schemas/supplier.schema");

/* insert new supplier */
exports.insertNewSupplier = async (data) => {
  const result = await Supplier.create(data);
  return result;
};

/* display all suppliers */
exports.displayAllSupplier = async ({ page }) => {
  const contentLimit = process.env.CONTENT_LIMIT;
  const result = await Supplier.find()
    .skip((Number(page) - 1) * contentLimit)
    .limit(page && contentLimit);
  return result;
};

/* display specific brand */
exports.displaySpecificSupplier = async ({ id }) => {
  const result = await Supplier.findById(id).populate({
    path: "brands",
    select: "title website thumbnail -_id",
  });
  return result;
};

/* update specific supplier */
exports.updateSpecificSupplier = async (id, data) => {
  const result = await Supplier.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

/* remove specific supplier */
exports.removeSpecificSupplier = async ({ id }) => {
  const result = await Supplier.findByIdAndDelete(id);
  return result;
};
