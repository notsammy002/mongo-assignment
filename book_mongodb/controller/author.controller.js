const express = require("express");
const Author = require("../model/author.model");
const model = require("./item.controller");
let router = express.Router();

router.get("/", model(Author).getAll);
router.post("/", model(Author).postOne);
router.get("/:id", model(Author).getOne);
router.patch("/:id", model(Author).patchOne);
router.delete("/:id", model(Author).deleteOne);

module.exports = router;
