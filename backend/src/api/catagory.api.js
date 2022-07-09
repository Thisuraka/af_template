const express = require("express");
const router = express.Router();
const controller = require("../controllers/catagory.controller");

module.exports = function () {
  router.post("/create", controller.createCatagory);
  router.get("/", controller.getAllCatagory);
  router.get("/:id", controller.getRoomsForCatagory);
  router.get("/delete/:id", controller.deleteCatagory);
  return router;
};
