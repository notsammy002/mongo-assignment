const mongoose = require("mongoose");

let authorSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
});

Author = mongoose.model("author", authorSchema);

module.exports = Author;
