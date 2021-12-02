import React, {
  useState,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
} from "react";

import MoviesList from "../../Components/MoviesList/MoviesList";
import MoviesFilter from "../../Components/MoviesFilter/MoviesFilter";
import MovieDetail from "../../Components/MovieDetail/MovieDetail";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const moviesGenres = [
  { value: "all", name: "All genres" },
  { value: "action", name: "Action" },
  { value: "adventure", name: "Adventure" },
  { value: "comedy", name: "Comedy" },
  { value: "fantasy", name: "Fantasy" },
  { value: "horror", name: "Horror" },
  { value: "infantile", name: "Infantile" },
  { value: "romance", name: "Romance" },
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
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [movieDetail, dispatchMovieDetail] = useReducer(movieDetailReducer, {
    show: false,
    movie: null,
  });

  const availableMovies = useMemo(() => [], []);

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
  }, [availableMovies]);

  // Remove Movie
  const removeMovieHandler = async (id) => {
    try {
      await deleteDoc(doc(db, "movies", id));

      setMovies((prevMovies) => {
        return prevMovies.filter((movie) => movie.id !== id);
      });
      dispatchMovieDetail({ type: "HIDE" });
      alert("REMOVED!");
    } catch (e) {
      alert("Something went wrong");
      console.log(e.message);
    }
  };

  // Filter by genre
  const filterHandler = useCallback(
    (userFilter) => {
      const genres = moviesGenres.map((genre) => genre.value);

      if (genres.includes(userFilter) && userFilter === "all") {
        setMovies(availableMovies);
      } else if (genres.includes(userFilter)) {
        setMovies(() =>
          availableMovies.filter(
            (movie) => movie.genre.toLowerCase() === userFilter
          )
        );
      }
    },
    [availableMovies]
  );

  // Filter by search term (title and actor)
  const searchHandler = useCallback(
    (searchTerm) => {
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
    },
    [availableMovies]
  );

  const showMovieDetailHandler = useCallback((currentMovie) => {
    dispatchMovieDetail({ type: "SHOW", movie: currentMovie });
  }, []);
  const hideMovieDetailHandler = () => {
    dispatchMovieDetail({ type: "HIDE" });
  };

  return (
    <div className="container page-container">
      <section className="row">
        <aside className="col-md-3">
          <MoviesFilter
            onSearch={searchHandler}
            onFilter={filterHandler}
            genres={moviesGenres}
          />
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
            onRemoveMovie={removeMovieHandler}
          />
        )}
      </section>
    </div>
  );
};

export default Movies;
