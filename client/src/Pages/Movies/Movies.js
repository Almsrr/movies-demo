import React, {
  useState,
  useEffect,
  useReducer,
  Fragment,
  useCallback,
} from "react";

import MoviesList from "../../Components/MoviesList/MoviesList";
import MoviesFilter from "../../Components/MoviesFilter/MoviesFilter";
import MovieDetail from "../../Components/MovieDetail/MovieDetail";
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

const availableMovies = [];

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [movieDetail, dispatchMovieDetail] = useReducer(movieDetailReducer, {
    show: false,
    movie: null,
  });

  useEffect(() => {
    // Load movies
    const fetchMovies = async () => {
      try {
        const docs = await getDocs(collection(db, "movies"));
        docs.forEach((doc) => {
          const movieData = doc.data();
          const movie = {
            id: doc.id,
            ...movieData,
          };
          availableMovies.push(movie);
        });
        return availableMovies;
      } catch (e) {
        alert("Something went wrong");
        console.log(e.message);
      }
    };
    fetchMovies().then((loadedMovies) => {
      setMovies(loadedMovies);
      setIsLoadingMovies(false);
    });
  }, []);
  // DELELE Movie
  // const deleteMovieHandler = async (id) => {
  //   try {
  //     const response = await fetch(`/api/movies/${id}?api-key=123`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });
  //     if (response.ok) {
  //       dispatchMovieDetail({ type: "HIDE" });
  //       return;
  //     }
  //     throw new Error("Request failed");
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  // Filter by genre
  const filterHandler = useCallback((userFilter) => {
    if (moviesGenres.includes(userFilter)) {
      setMovies(() =>
        availableMovies.filter(
          (movie) => movie.genre.toLowerCase() === userFilter
        )
      );
    } else if (userFilter === "all") {
      setMovies(availableMovies);
    }
  }, []);

  // Filter by search term (title and actor)
  const searchHandler = useCallback((searchTerm) => {
    if (searchTerm.trim().length === 0) {
      setMovies(availableMovies);
    } else {
      const filteredMovies = availableMovies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchTerm) ||
          movie.actors.toLowerCase().includes(searchTerm)
      );
      setMovies(filteredMovies);
    }
  }, []);

  const showMovieDetailHandler = useCallback((currentMovie) => {
    dispatchMovieDetail({ type: "SHOW", movie: currentMovie });
  }, []);
  const hideMovieDetailHandler = () => {
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
            movies={movies}
            loadingMovies={isLoadingMovies}
            onShowMovieDetail={showMovieDetailHandler}
          />
        </div>
        {/* Details modal  */}
        {movieDetail.show && (
          <MovieDetail
            movie={movieDetail.movie}
            onCloseModal={hideMovieDetailHandler}
          />
        )}
      </section>
    </Fragment>
  );
};

export default Movies;
