const express = require("express");
const Section = require("../model/section.model");
const Author = require("../model/author.model");
const Book = require("../model/book.model");

let router = express.Router();

const getAll = (model) => async (req, res) => {
  if (model === Book) {
    var x = await model.find().populate("section").populate("authors").exec();
  } else if (model === Section) {
    var x = await model.find();
  } else {
    var x = await model.find().populate("books");
  }
  res.status(200).json(x);
};
const postOne = (model) => async (req, res) => {
  var x1 = await model.create(req.body);
  res.status(200).json(x1);
};
const getOne = (model) => async (req, res) => {
  var x = await model.findById(req.params.id);
  res.status(200).json(x);
};
const patchOne = (model) => async (req, res) => {
  if (model === Book) {
    var x = await model.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          body: req.body.body,
          section: req.body.section,
          checkedOut: req.body.checkedOut,
        },
        $push: { authors: [...req.body.authors] },
      },
      { new: true }
    );
  } else if (model === Section) {
    var x = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  } else {
    var x = await model.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
        },
        $push: { books: [...req.body.books] },
      },
      {
        new: true,
      }
    );
  }
  res.status(200).json(x);
};
const deleteOne = (model) => async (req, res) => {
  var x = await model.findByIdAndDelete(req.params.id);
  res.status(200).json(x);
};

module.exports = (model) => ({
  getAll: getAll(model),
  getOne: getOne(model),
  postOne: postOne(model),
  deleteOne: deleteOne(model),
  patchOne: patchOne(model),
});
