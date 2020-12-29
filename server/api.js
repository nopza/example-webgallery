const express = require("express");
const router = express.Router();

require("./db"); //add
router.use(require("./api_auth"));
router.use(require("./api_product"));
router.use(require("./api_transaction"));
router.use(require("./api_gallery"));

module.exports = router;
