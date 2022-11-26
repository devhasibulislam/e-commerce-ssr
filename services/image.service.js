/* internal import */
const removeImageUtility = require("../utilities/removeImage.utility");

/* remove image from cloudinary */
const removeCloudinaryImage = async (public_id) => {
  await removeImageUtility(public_id);
};

/* export cloudinary remover */
module.exports = removeCloudinaryImage;
