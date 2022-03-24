const express = require("express");
const PORT = 8000;
const mongoose = require("mongoose")
const cors = require("cors");
const DB_URL = "mongodb+srv://sammy:abc-123@firstdb.cjd5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// from schema
const UserModel = require("./schema/user.schema");
const Post = require("./schema/post.schema");
const Tag = require("./schema/tag.schema");
const Answer = require("./schema/answer.schema");

let app = express();
app.use(express.json());
app.use(cors())

// connecting oto mongos server

const connect = () =>{
    return mongoose.connect(DB_URL);
}

// getting the users
app.get("/users",async (req, res) => {
    try{
      let users =await UserModel.find();
    res.status(200).json(users);  
    }
    catch (e){
        res.status(400).send(e.message)
    }
});

// updating the users

app.patch("/users/:id", async(req, res) => {
    let users = await UserModel.findByIdAndUpadate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(users);
})

app.post("/users",async (req, res) => {
    try{
      let createUsers =await UserModel.create(req.body);
    res.status(200).json(createUsers);  
    }
    catch (e){
        res.status(400).send(e.message)
    }
});


// for the post schema
app.get("/posts",async (req, res) => {
    try{
      let users =await Post.find().populate("tags");
    res.status(200).json(users);  
    }
    catch (e){
        res.status(400).send(e.message)
    }
});

app.patch("/posts/:id", async(req, res) => {
    let posts = await Post.findByIdAndUpadate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(posts);
})

app.post("/posts",async (req, res) => {
    try{
      let createPost =await Post.create(req.body);
    res.status(200).json(createPost);  
    }
    catch (e){
        res.status(400).send(e.message)
    }
});


// for the tag schema
app.get("/tags",async (req, res) => {
    try{
      let getTags =await Tag.find();
    res.status(200).json(getTags);  
    }
    catch (e){
        res.status(400).send(e.message)
    }
});

app.post("/tags",async (req, res) => {
    try{
      let createtag =await Tag.create(req.body);
    res.status(200).json(createtag);  
    }
    catch (e){
        res.status(400).send(e.message)
    }
});

//for answer schema
app.get("/answers",async (req, res) => {
    try{
      let getanswers =await Answer.find();
    res.status(200).json(getanswers);  
    }
    catch (e){
        res.status(400).send(e.message)
    }
});

// when run the above code it only show the id's, 
//to show meaningful data run the below code

app.get("/answers",async (req, res) => {
    try{
      let getanswers =await Answer.find()
      .populate({
          path: "post",
          select: ["title", "body"],
          populate: {
              path: "user",
              select: ["first_name", "age"],
          }
      })
      .populate({
          path: "user",
          select: ["first_name", "age"],
      });
    res.status(200).json(getanswers);  
    }
    catch (e){
        res.status(400).send(e.message)
    }
});

app.post("/answers",async (req, res) => {
    try{
      let createanswer =await Answer.create(req.body);
    res.status(200).json(createanswer);  
    }
    catch (e){
        res.status(400).send(e.message)
    }
});


app.listen(PORT, async() => {
    try{
        await connect();
        console.log(`Listening on PORT: ${PORT}`);
    }
    catch (e){
        console.log(e.messsage);
    }
});