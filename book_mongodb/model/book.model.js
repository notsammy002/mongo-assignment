const mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  body: { type: String, required: true },
  authors: [
    { type: mongoose.Schema.Types.ObjectId, ref: "author", required: true },
  ],
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "section",
    required: true,
  },
  checkedOut: { type: Boolean, default: false },
});

Book = mongoose.model("book", bookSchema);

module.exports = Book;
