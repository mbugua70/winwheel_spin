const { Router } = require("express");
const router = Router();
const Authcontroller = require("../controller/authController");

router.get("/", Authcontroller.segmentWheel_get_all);

module.exports = router;
