const Pool = require("pg").Pool;

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "movies",
  password: "password",
  port: 5432,
});

// GET MOVIES
const getMovies = (req, res) => {
  pool.query("SELECT * FROM movie ORDER BY id ASC", (error, results) => {
    try {
      if (error) throw error;
      res.status(200).json(results.rows);
    } catch (e) {
      console.log(e.message);
    }
  });
};

// GET MOVIE BY ID
const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM movie WHERE id = $1", [id], (error, results) => {
    try {
      if (error) throw error;
      res.status(200).json(results.rows[0]);
    } catch (e) {
      console.log(e.message);
    }
  });
};

// INSERT MOVIE
const createNewMovie = (req, res) => {
  const { title, genre, releaseDate, imageUrl, synopsis, language, actors } =
    req.body;

  pool.query(
    "INSERT INTO movie (title, genre, releasedate, imageurl, synopsis, language, actors) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [title, genre, releaseDate, imageUrl, synopsis, language, actors],
    (error, results) => {
      try {
        if (error) throw error;
        res.status(200).send(`Movies inserted: ${results.rowCount}`);
      } catch (e) {
        console.log(e.message);
      }
    }
  );
};

// UPDATE MOVIE
const updateMovie = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, genre, releaseDate } = req.body;

  pool.query(
    "UPDATE movie SET title=$1, genre=$2, releaseDate=$3 WHERE id = $4",
    [title, genre, releaseDate, id],
    (error, results) => {
      try {
        if (error) throw error;
        res.status(200).send(`Movie updated with ID: ${id}`);
      } catch (e) {
        console.log(e.message);
      }
    }
  );
};

// DELETE MOVIE
const deleteMovie = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM movie WHERE id=$1", [id], (error, results) => {
    try {
      if (error) throw error;
      res.status(200).send(`Movie deleted with ID: ${id}`);
    } catch (e) {
      console.log(e.message);
    }
  });
};

// GET ACTORS
const getActors = (req, res) => {
  pool.query("SELECT * FROM actor ORDER BY id ASC", (error, results) => {
    try {
      if (error) throw error;
      res.status(200).json(results.rows);
    } catch (e) {
      console.log(e.message);
    }
  });
};

// GET ACTORS BY ID
const getActorById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM actor WHERE id = $1", [id], (error, results) => {
    try {
      if (error) throw error;
      res.status(200).json(results.rows[0]);
    } catch (e) {
      console.log(e.message);
    }
  });
};

// INSERT ACTOR
const createNewActor = (req, res) => {
  const { fullName, gender, birthday } = req.body;

  pool.query(
    "INSERT INTO actor (fullName, gender, birthday) VALUES ($1, $2, $3)",
    [fullName, gender, birthday],
    (error, results) => {
      try {
        if (error) throw error;
        res.status(200).send(`Actors inserted: ${results.rowCount}`);
      } catch (e) {
        console.log(e.message);
      }
    }
  );
};

// UPDATE ACTOR
const updateActor = (req, res) => {
  const id = parseInt(req.params.id);
  const { fullName, gender, birthday } = req.body;

  pool.query(
    "UPDATE actor SET fullName=$1, gender=$2, birthday=$3 WHERE id = $4",
    [fullName, gender, birthday, id],
    (error, results) => {
      try {
        if (error) throw error;
        res.status(200).send(`Actor updated with ID: ${id}`);
      } catch (e) {
        console.log(e.message);
      }
    }
  );
};

// DELETE ACTOR
const deleteActor = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM actor WHERE id=$1", [id], (error, results) => {
    try {
      if (error) throw error;
      res.status(200).send(`Actor deleted with ID: ${id}`);
    } catch (e) {
      console.log(e.message);
    }
  });
};

module.exports = {
  getMovies,
  getMovieById,
  createNewMovie,
  updateMovie,
  deleteMovie,
  getActors,
  getActorById,
  createNewActor,
  updateActor,
  deleteActor,
};
