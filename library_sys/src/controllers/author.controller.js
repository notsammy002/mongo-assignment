const express = require("express");
const Author = require("../models/author.model")
const crudController = require("./curd.controller")
const router = express.Router();

//create
router.post("/", crudController(Author).post);

//read
router.get("/",crudController(Author).getAll);

//read one
router.get("/:id", crudController(Author).getOne);

//update
router.patch("/:id", crudController(Author).updateOne);


//delete
router.delete("/:id", crudController(Author).deleteOne);

module.exports = router;