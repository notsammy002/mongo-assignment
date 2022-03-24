const express = require("express");
const Book = require("../model/book.model");
const model = require("./item.controller");
// console.log(model);
let router = express.Router();

router.get("/", model(Book).getAll);

router.get("/criteria", async (req, res) => {
  criteria = {};
  const { checkedOut, author, section } = req.query;
  if (checkedOut) {
    criteria.checkedOut = checkedOut;
  }
  if (author) {
    criteria.authors = author;
  }
  if (section) {
    criteria.section = section;
  }
  console.log(criteria);
  //   const x = await Book.find(criteria);
  const x = await Book.find(criteria);

  res.status(200).json(x);
});

router.post("/", model(Book).postOne);
router.get("/:id", model(Book).getOne);

// find all books return by an author
// router.get("author/:Aid", async (req, res) => {
//   console.log("auth");
//   const x = await Book.find({ authors: req.params.Aid });
//   console.log(x);
//   res.status(200).json(x);
// });

router.patch("/:id", model(Book).patchOne);
router.delete("/:id", model(Book).deleteOne);

module.exports = router;
