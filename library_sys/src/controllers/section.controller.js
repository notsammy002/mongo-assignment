const express = require("express");
const Section = require("../models/section.model")
const crudController = require("./curd.controller")
const router = express.Router();

//create
router.post("/", crudController(Section).post);

//read
router.get("/",crudController(Section).getAll);

//read one
router.get("/:id", crudController(Section).getOne);

//update
router.patch("/:id", crudController(Section).updateOne);


//delete
router.delete("/:id", crudController(Section).deleteOne);

module.exports = router;