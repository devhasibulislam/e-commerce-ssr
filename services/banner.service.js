/**
 * Title: Banner service
 * Description: Service that serve method and middlewares
 * Author: Hasibul Islam
 * Date: 02/12/2022
 */

/* internal imports */
const Banner = require("../schemas/banner.schema");
const removeImageUtility = require("../utilities/removeImage.utility");

// display all banner
exports.displayAllBanners = async ({ page }) => {
  const contentLimit = process.env.CONTENT_LIMIT;
  const result = await Banner.find()
    .skip(page && (Number(page) - 1) * contentLimit)
    .limit(page && contentLimit);
  return result;
};

// insert new banner
exports.insertNewBanner = async (data) => {
  const result = await Banner.create(data);
  return result;
};

// display specific banner
exports.displaySpecificBanner = async ({ id }) => {
  const result = await Banner.findById(id);
  return result;
};

// modify specific banner
exports.modifySpecificBanner = async (id, data) => {
  const result = await Banner.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

// remove specific banner
exports.removeSpecificBanner = async ({ id }) => {
  const result = await Banner.findByIdAndDelete(id);

  if (result.thumbnail.public_id) {
    const public_id = result.thumbnail.public_id;
    await removeImageUtility(public_id);
  }

  return result;
};
