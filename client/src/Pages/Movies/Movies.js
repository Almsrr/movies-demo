import React, { useState, useEffect, useCallback, useReducer } from "react";

import MoviesList from "../../Components/MoviesList/MoviesList";
import NewMovieForm from "../../Components/NewMovieForm/NewMovieForm";
import MoviesFilter from "../../Components/MoviesFilter/MoviesFilter";
import MovieDetailsModal from "../../Components/MovieDetailsModal/MovieDetailsModal";

const moviesGenres = [
  "action",
  "adventure",
  "comedy",
  "fantasy",
  "horror",
  "infantile",
  "romance",
];

const detailsReducer = (state, action) => {
  switch (action.type) {
    case "SHOW": {
      return { show: true, movie: action.movie };
    }
    case "HIDE": {
      return { show: false, movie: null };
    }
    default: {
      return state;
    }
  }
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieDetails, dispatchDetails] = useReducer(detailsReducer, {
    show: false,
    movie: null,
  });

  // GET Movies
  const fetchMovies = useCallback(async () => {
    try {
      const movies = await fetch("/api/movies?api-key=123");
      if (movies.ok) {
        const jsonMovies = await movies.json();
        setMovies(jsonMovies);
        setFilteredMovies(jsonMovies);
        return;
      }
      throw new Error("Request failed");
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

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
        dispatchDetails({ type: "HIDE" });
        fetchMovies();
        return;
      }
      throw new Error("Request failed");
    } catch (e) {
      console.log(e.message);
    }
  };

  // Filter by genre
  const filterHandler = (userFilter) => {
    if (moviesGenres.includes(userFilter)) {
      setFilteredMovies(() =>
        movies.filter((movie) => movie.genre.toLowerCase() === userFilter)
      );
    } else if (userFilter === "all") {
      setFilteredMovies([...movies]);
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

  const showMovieDetailsHandler = (currentMovie) => {
    dispatchDetails({ type: "SHOW", movie: currentMovie });
  };
  const hideMovieDetailsHandler = () => {
    dispatchDetails({ type: "HIDE" });
  };

  return (
    <section>
      {/* Details modal  */}
      {movieDetails.show && (
        <MovieDetailsModal
          movie={movieDetails.movie}
          onDeleteMovie={deleteMovieHandler}
          onCloseModal={hideMovieDetailsHandler}
        />
      )}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <MoviesList
              movies={filteredMovies}
              onShowMovieDetails={showMovieDetailsHandler}
            />
          </div>
        </div>
      </div>
      {/* <MoviesFilter onFilter={filterHandler} onSearch={searchHandler} />
      <NewMovieForm onNewMovie={newMovieHandler} /> */}
    </section>
  );
};

export default Movies;
