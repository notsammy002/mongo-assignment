const express = require("express");
const Section = require("../model/section.model");
const model = require("./item.controller");
let router = express.Router();

router.get("/", model(Section).getAll);
router.post("/", model(Section).postOne);
router.get("/:id", model(Section).getOne);
router.patch("/:id", model(Section).patchOne);
router.delete("/:id", model(Section).deleteOne);

module.exports = router;
