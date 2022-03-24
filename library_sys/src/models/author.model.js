const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    first_name: {type: String, require: true, unique: true},
    last_name: {type: String, require: true},
    books: [
        {type: mongoose.Schema.Types.ObjectId, ref: "book", require: true}
    ]
});

const Author = mongoose.model("author", authorSchema)

module.exports = Author;