let mongoose = require("mongoose");

let movieSchema = mongoose.Schema({
  movie_name: String,
  movie_genre: String,
  production_year: Number,
  budget: Number,
});

let Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;
