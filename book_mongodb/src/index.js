const express = require("express");
const Book = require("../model/book.model");
const PORT = 8000;
const DB_URL =
  "mongodb+srv://muskanIss:1234@cluster0.ah2iy.mongodb.net/library?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const books = require("../controller/book.controller");
const authors = require("../controller/author.controller");
const sections = require("../controller/section.controller");
const app = express();

function connect() {
  return mongoose.connect(DB_URL);
}
app.use(express.json());
app.use("/books", books);
app.use("/authors", authors);
app.use("/sections", sections);
app.listen(PORT, async () => {
  try {
    await connect();
    console.log("listening");
  } catch (e) {
    console.log(e.message);
  }
});
