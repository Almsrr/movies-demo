import React, { useState, useEffect } from "react";

import MoviesList from "./MoviesList/MoviesList";
import NewMovieForm from "./NewMovie/NewMovieForm";
import styles from "./Movies.module.css";
import MoviesFilter from "./MoviesFilter/MoviesFilter";

const moviesGenres = [
  "action",
  "adventure",
  "comedy",
  "fantasy",
  "horror",
  "infantile",
  "romance",
];

const Movies = () => {
  useEffect(() => {
    fetchMovies();
  }, []);

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // GET Movies
  const fetchMovies = async () => {
    try {
      const movies = await fetch("/api/movies?api-key=123");
      if (movies.ok) {
        const jsonMovies = await movies.json();
        setMovies(jsonMovies);
        return setFilteredMovies(jsonMovies);
      }
      throw new Error("Request failed");
    } catch (e) {
      console.log(e.message);
    }
  };

  // Validate if movie exists
  const exists = (movieToValidate) => {
    for (let i = 0; i < movies.length; i++) {
      if (
        movies[i].title.toLowerCase() === movieToValidate.title.toLowerCase()
      ) {
        return true;
      }
    }
    return false;
  };

  // POST Movie
  const newMovieHandler = async (movie) => {
    if (exists(movie)) {
      return window.alert("Movie already exists");
    }
    try {
      const response = await fetch("/api/movies?api-key=123", {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (response.ok) {
        return fetchMovies();
      }
      throw new Error("Request failed");
    } catch (e) {
      console.log(e.message);
    }
  };

  // DELELE Movie
  const deleteMovieHandler = async (id) => {
    try {
      const response = await fetch(`/api/movies/${id}?api-key=123`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (response.ok) {
        return fetchMovies();
      }
      throw new Error("Request failed");
    } catch (e) {
      console.log(e.message);
    }
  };

  // Filter by genre
  const filterHandler = (userFilter) => {
    console.log(userFilter);
    if (moviesGenres.includes(userFilter)) {
      setFilteredMovies(() =>
        movies.filter((movie) => movie.genre.toLowerCase() === userFilter)
      );
    } else if (userFilter === "all") {
      setFilteredMovies(movies);
    }
  };

  // Filter by search term (title and actor)
  const searchHandler = (searchTerm) => {
    if (searchTerm.trim().length === 0) {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(() =>
        movies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.actors.toLowerCase().includes(searchTerm)
        )
      );
    }
  };

  return (
    <section>
      <div className={styles.moviesGrid}>
        <MoviesList
          movies={filteredMovies}
          onDeleteMovie={deleteMovieHandler}
        />
        <MoviesFilter onFilter={filterHandler} onSearch={searchHandler} />
        <NewMovieForm onNewMovie={newMovieHandler} />
      </div>
    </section>
  );
};

export default Movies;
