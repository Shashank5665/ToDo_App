const express = require("express");
const homeController = require("./../controllers/homeController");
const router = express.Router();

router
  .route("/")
  .get(homeController.getHomeTasks)
  .post(homeController.postHomeTasks);
router.route("/delete").post(homeController.deleteOnCheck);
module.exports = router;
