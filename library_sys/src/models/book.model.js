const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true },
    body: { type: String, require: true },
    authors: [
        { type: mongoose.Schema.Types.ObjectId, ref: "author", require: true }
    ],
    section: { type: mongoose.Schema.Types.ObjectId, ref: "section", require: true },
    isCheckedout: { type: Boolean, default: false },
});

const Book = mongoose.model("book", bookSchema)

module.exports = Book;