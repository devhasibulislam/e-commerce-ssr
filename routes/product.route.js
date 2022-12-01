/**
 * Title: Product route
 * Description: Route which going to hit methods and middlewares
 * Author: Hasibul Islam
 * Date: 26/11/2022
 */

/* external import */
const express = require("express");

/* internal import */
const productController = require("../controllers/product.controller");
const imageController = require("../controllers/image.controller");
const uploader = require("../middlewares/cloudinaryUpload.middleware");
const verifyTokenMiddleware = require("../middlewares/verifyToken.middleware");
const authorizeRoleMiddleware = require("../middlewares/authorizeRole.middleware");

/* router level import */
const router = express.Router();

/* router method integration */
// upload product thumbnails
router
  .route("/thumbnails")
  .post(uploader.array("thumbnails", 5), imageController.cloudinaryUpload)
  .patch(uploader.array("thumbnails", 5), imageController.cloudinaryUpdate);

router
  .route("/")
  .post(
    verifyTokenMiddleware,
    authorizeRoleMiddleware("admin", "seller"),
    productController.insertNewProduct
  )
  .get(productController.displayAllProducts);

router
  .route("/:id")
  .get(productController.displaySpecificProduct)
  .patch(productController.updateSpecificProduct)
  .delete(
    verifyTokenMiddleware,
    authorizeRoleMiddleware("admin", "seller"),
    productController.removeSpecificProduct
  );

/* export product router */
module.exports = router;
