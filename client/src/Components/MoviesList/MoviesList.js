import React from "react";

import Movie from "../Movie/Movie";
import "./movieList.css";

const MoviesList = (props) => {
  const { movies, onShowMovieDetail } = props;

  return (
    <ul className="row movie-list">
      {movies.map((movie) => (
        <li className="col-sm-6 col-md-3 col-lg-3" key={movie.id}>
          <Movie movie={movie} onShowDetail={onShowMovieDetail} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
