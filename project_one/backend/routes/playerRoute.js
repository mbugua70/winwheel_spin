const { Router } = require("express");
const router = Router();
const Playercontroller = require("../controller/playerController");

router.post("/api/player", Playercontroller.playerForm_post);

module.exports = router;
