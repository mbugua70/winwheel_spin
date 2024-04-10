const { Router } = require("express");
const router = Router();
const Authcontroller = require("../controller/authController");

router.get("/api/segments", Authcontroller.segmentWheel_get_all);

module.exports = router;
