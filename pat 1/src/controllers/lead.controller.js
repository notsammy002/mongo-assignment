const express = require("express");
const Lead = require("../models/lead.model")
const crudController = require("./curd.controller")
const router = express.Router();

//create
router.post("/", crudController(Lead).post);

//read
router.get("/",crudController(Lead).getAll);

//read one
router.get("/:id", crudController(Lead).getOne);

//update
router.patch("/:id", crudController(Lead).updateOne);


//delete
router.delete("/:id", crudController(Lead).deleteOne);

module.exports = router;