import React, { useState, useEffect, useReducer, Fragment } from "react";

import MoviesList from "../../Components/MoviesList/MoviesList";
import MoviesFilter from "../../Components/MoviesFilter/MoviesFilter";
import MovieDetails from "../../Components/MovieDetail/MovieDetail";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const moviesGenres = [
  "action",
  "adventure",
  "comedy",
  "fantasy",
  "horror",
  "infantile",
  "romance",
];

const movieDetailReducer = (state, action) => {
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
  const [movieDetail, dispatchMovieDetail] = useReducer(movieDetailReducer, {
    show: false,
    movie: null,
  });

  useEffect(() => {
    // GET Movies
    const availableMovies = [];
    const fetchMovies = async () => {
      try {
        const data = await getDocs(collection(db, "movies"));
        data.forEach((doc) => {
          availableMovies.push({ id: doc.id, ...doc.data() });
        });
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchMovies();
    setMovies(availableMovies);
    setFilteredMovies(availableMovies);
  }, []);

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
        dispatchMovieDetail({ type: "HIDE" });
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
    dispatchMovieDetail({ type: "SHOW", movie: currentMovie });
  };
  const hideMovieDetailsHandler = () => {
    dispatchMovieDetail({ type: "HIDE" });
  };

  return (
    <Fragment>
      <section className="row">
        <aside className="col-md-3">
          <MoviesFilter onSearch={searchHandler} onFilter={filterHandler} />
        </aside>
        <div className="col-md-9">
          <MoviesList
            movies={filteredMovies}
            onShowMovieDetail={showMovieDetailsHandler}
          />
        </div>
        {/* Details modal  */}
        {movieDetail.show && (
          <MovieDetails
            movie={movieDetail.movie}
            onCloseModal={hideMovieDetailsHandler}
          />
        )}
      </section>
    </Fragment>
  );
};

export default Movies;
