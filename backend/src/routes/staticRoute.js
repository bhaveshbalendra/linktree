const express = require("express");
const {
  handleHomeValidUser,
  handleAddLinks,
  handleData,
} = require("../controllers/staticController");
const router = express.Router();

router.get("/", handleHomeValidUser);
router.post("/profile", handleAddLinks);
router.get("/profile/data", handleData);
module.exports = router;
