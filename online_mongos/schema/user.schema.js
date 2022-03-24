const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String, 
    email: String,
    gender: String, 
    age: Number,
    post: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: "post"}
    ]
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;