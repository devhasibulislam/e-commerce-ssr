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

/* router level import */
const router = express.Router();

/* router method integration */
router
  .route("/")
  .post(productController.insertNewProduct)
  .get(productController.displayAllProducts);

router
  .route("/:id")
  .get(productController.displaySpecificProduct)
  .patch(productController.updateSpecificProduct)
  .delete(productController.removeSpecificProduct);

/* export product router */
module.exports = router;
