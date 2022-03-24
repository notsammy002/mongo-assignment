const mongoose = require("mongoose");

let sectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  //   books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
});

Section = mongoose.model("section", sectionSchema);

module.exports = Section;
