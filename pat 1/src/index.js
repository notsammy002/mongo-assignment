const express = require("express");
const mongoose = require("mongoose");
const PORT = 5000;
const cors = require("cors");
const DB_URL = "mongodb://127.0.0.1:27017/test/books";

//import of controllerrs
const leadController = require("./controllers/lead.controller")


let app = express();
app.use(express.json());
app.use(cors())
const connect = () =>{
    return mongoose.connect(DB_URL);
}

//to access the controllers we use middleware
app.use("/leads", leadController);


app.listen(PORT, async() => {
    try{
        await connect();
        console.log(`Listening on PORT: ${PORT}`);
    }
    catch (e){
        console.log(e.messsage);
    }
});