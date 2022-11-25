/**
 * Title: Store route
 * Description: Route which manage methods
 * Author: Hasibul Islam
 * Date: 25/11/2022
 */

/* external import */
const express = require("express");

/* internal import */
const storeController = require("../controllers/store.controller");

/* router level connection */
const router = express.Router();

/* router method integration */
router
  .route("/")
  .post(storeController.insertNewStore)
  .get(storeController.displayAllStore);

router
  .route("/:id")
  .get(storeController.displaySpecificStore)
  .patch(storeController.updateSpecificStore)
  .delete(storeController.removeSpecificStore);

/* export router */
module.exports = router;
