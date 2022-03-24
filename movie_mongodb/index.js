let express = require("express");
const res = require("express/lib/response");
let DB_URL = "mongodb://127.0.0.1:27017/test";
let mongoose = require("mongoose");
const { add } = require("nodemon/lib/rules");
let Movie = require("./model/movies.model");

let app = express();
app.use(express.json());
let PORT = 8000;

let connect = () => {
  return mongoose.connect(DB_URL);
};

//get all movies
app.get("/movies", async (req, res) => {
  let movies = await Movie.find({});
  res.status(200).json(movies);
});

//get movie by id
app.get("/movies/:id", async (req, res) => {
  let movie_id = await Movie.findById(req.params.id);
  res.status(200).json(movie_id);
});

//add movie

app.post("/movies", async (req, res) => {
  let addMovie = await Movie.create(req.body);
  res.status(200).json(addMovie);
});

// Update a movie by id
app.patch("/movies/:id", async (req, res) => {
  let movie_update_id = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(movie_update_id);
});

//delete a movie by id
app.delete("/movies/:id", async (req, res) => {
  console.log(req.params.id);
  let movie_delete_id = await Movie.findByIdAndDelete(req.params.id);
  res.status(200).json(movie_delete_id);
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("litening");
  } catch (e) {
    console.log(e.message);
  }
});
