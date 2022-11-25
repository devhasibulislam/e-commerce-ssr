/**
 * Title: Stock route
 * Description: Route which handle methods and middlewares
 * Author: Hasibul Islam
 * Date: 25/11/2022
 */

/* external import */
const express = require("express");

/* internal import */
const stockController = require("../controllers/stock.controller");

/* router level connection */
const router = express.Router();

/* router level integration */
router
  .route("/")
  .post(stockController.insertNewStock)
  .get(stockController.displayAllStocks);

router
  .route("/:id")
  .get(stockController.displaySpecificStock)
  .patch(stockController.updateSpecificStock)
  .delete(stockController.removeSpecificStock);

/* export stock router */
module.exports = router;
