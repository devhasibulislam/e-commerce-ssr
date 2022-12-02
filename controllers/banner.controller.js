/**
 * Title: Banner controller
 * Description: Controller that control method and middlewares
 * Author: Hasibul Islam
 * Date: 02/12/2022
 */

/* internal imports */
const bannerService = require("../services/banner.service");

// display all banner
exports.displayAllBanners = async (req, res, next) => {
  try {
    const result = await bannerService.displayAllBanners(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching all banners",
      count: result.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// insert new banner
exports.insertNewBanner = async (req, res, next) => {
  try {
    const result = await bannerService.insertNewBanner(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Banner insertion successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// display specific banner
exports.displaySpecificBanner = async (req, res, next) => {
  try {
    const result = await bannerService.displaySpecificBanner(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching specific banner",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// modify specific banner
exports.modifySpecificBanner = async (req, res, next) => {
  try {
    const result = await bannerService.modifySpecificBanner(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific blog",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// remove specific banner
exports.removeSpecificBanner = async (req, res, next) => {
  try {
    const result = await bannerService.removeSpecificBanner(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully removed specific blog",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
