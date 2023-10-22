const express = require("express");
const router = express.Router();
const { createUser, findUser } = require("../controllers/userData");

router.route("/:username").get(findUser);
router.route("/").post(createUser);

module.exports = router;
