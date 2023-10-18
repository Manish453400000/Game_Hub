const express = require("express");
const router = express.Router();
const { createUser, findUser } = require("../controllers/userData");

router.route("/").get(findUser).post(createUser);

module.exports = router;
