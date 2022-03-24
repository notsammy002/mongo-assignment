const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
const cors = require("cors");
const DB_URL = "mongodb://127.0.0.1:27017/test";

//import of controllerrs
const authorController = require("./controllers/author.controller")
const bookController = require("./controllers/book.controller")
const sectionController = require("./controllers/section.controller")


let app = express();
app.use(express.json());
app.use(cors())
const connect = () =>{
    return mongoose.connect(DB_URL);
}

//to access the controllers we use middleware
app.use("/sections", sectionController);
app.use("/authors", authorController);
app.use("/books", bookController);

app.listen(PORT, async() => {
    try{
        await connect();
        console.log(`Listening on PORT: ${PORT}`);
    }
    catch (e){
        console.log(e.messsage);
    }
});