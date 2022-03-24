const express = require("express");
const Book = require("../models/book.model")
const crudController = require("./curd.controller")
const router = express.Router();

//create
router.post("/", crudController(Book).post);

//read
router.get("/",crudController(Book).getAll);

//read one
router.get("/:id", crudController(Book).getOne);

//update
router.patch("/:id", crudController(Book).updateOne);


//delete
router.delete("/:id", crudController(Book).deleteOne);

module.exports = router;





//using crud

// //create
// router.post("/", async(req, res) => {
//     const createdBook = await Book.create(req.body);
//     res.status(201).json(createdBook)
// });

// //read
// router.get("/",async (req, res) => {
//     const books = await Book.find();
//     res.status(200).json(books)
// });

// //read one
// router.get("/:id", async(req, res) => {
//     const book = await Book.findById(req.params.id);
//     res.status(200).json(book);
// });

// //update
// router.patch("/:id", async(req, res) => {
//     const updatedBook = await Book.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new : true}
//     )
//     res.status(200).json(updatedBook)
// });


// //delete
// router.delete("/:id", async(req, res) => {
//     const deletedBook = await Book.findByIdAndDelete(req.params.id);
//     res.status(200).json(deletedBook)
// });

module.exports = router;