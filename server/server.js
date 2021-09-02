require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");

const app = express();
const port = 5000;
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const error = (status, msg) => {
  const err = new Error(msg);
  err.status = status;
  return err;
};

const apiKeys = process.env.API_KEYS.split(",");

// Validate the API key, by mounting this middleware to /api
app.use("/api", (req, res, next) => {
  const key = req.query["api-key"];

  if (!key) {
    return next(error(400, "Api key required"));
  } else if (apiKeys.indexOf(key) === -1) {
    return next(error(401, "Invalid api key"));
  }

  req.key = key;
  next();
});

app.get("/api", (req, res) => {
  res.send("Movies API");
});

// Movies
app.get("/api/movies", db.getMovies);
app.get("/api/movies/:id", db.getMovieById);
app.post("/api/movies", db.createNewMovie);
app.put("/api/movies/:id", db.updateMovie);
app.delete("/api/movies/:id", db.deleteMovie);

// Actors
app.get("/api/actors", db.getActors);
app.get("/api/actors/:id", db.getActorById);
app.post("/api/actors", db.createNewActor);
app.put("/api/actors/:id", db.updateActor);
app.delete("/api/actors/:id", db.deleteActor);

if (require.main) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
