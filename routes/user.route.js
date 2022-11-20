/**
 * Title: User authenticate credentials
 * Description: All user credential convey execute from here
 * Author: Hasibul Islam
 * Date: 20/11/2022
 */

/* external import */
const express = require("express");

/* internal import */
const userController = require("../controllers/user.controller");
const verifyTokenMiddleware = require("../middlewares/verifyToken.middleware");
const authorizeRoleMiddleware = require("../middlewares/authorizeRole.middleware");
const uploader = require("../middlewares/cloudinaryUpload.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */
// upload user avatar
router
  .route("/avatar")
  .post(uploader.single("avatar"), userController.cloudinaryUpload)
  .patch(uploader.single("avatar"), userController.cloudinaryUpdate);

// sign up an user with confirmation
router
  .route("/sign-up")
  .get(userController.confirmSignedUpUser)
  .post(userController.signUpAnUser);

//   sign in an user
router.post("/sign-in", userController.signInAnUser);

// persist an user to logged in
router.get("/myself", verifyTokenMiddleware, userController.persistMeLogin);

// fetch all user
router.get(
  "/all-users",
  verifyTokenMiddleware,
  authorizeRoleMiddleware("admin"),
  userController.displayAllUsers
);

// reset password
router
  .route("/reset-password")
  .get(userController.confirmPasswordReset)
  .patch(userController.forgotPassword);

// update an user
router.patch(
  "/update-user",
  verifyTokenMiddleware,
  authorizeRoleMiddleware("admin", "buyer", "seller", "supplier", "deliverer"),
  userController.updateUser
);

// remove an user account
router.delete(
  "/remove-user",
  verifyTokenMiddleware,
  authorizeRoleMiddleware("admin", "buyer", "seller", "supplier", "deliverer"),
  userController.removeAnUser
);

/* export user router */
module.exports = router;

/**
 * user roles can be defined after completing the project
 * roles: "admin", "buyer", "seller", "supplier", "deliverer"
 */
