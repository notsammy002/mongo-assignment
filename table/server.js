const express = require("express");
const PORT = 8000;
const mongoose = require("mongoose")
const cors = require("cors");

// from schema
const UserModel = require("./schema/user.schema");


let app = express();
app.use(express.json());
app.use(cors())

// connecting oto mongos server
const DB_URL = "mongodb://127.0.0.1:27017/test"
mongoose.connect(DB_URL);

//To check whether the connect was succusful
var db = mongoose.connection;

// getting data from mongoose

app.get("/users",async (req, res) => {
    let users =await UserModel.find({});
    res.status(200).json(users);
});

db.on('error', console.error.bind(console, 'MongoDB error: '));


app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})