import React from "react";

import "./movie.css";

const Movie = (props) => {
  const { movie, onShowDetail } = props;

  const showMovieDetailHandler = () => {
    onShowDetail(movie);
  };

  return (
    <article className="movie" onClick={showMovieDetailHandler}>
      <img
        className="movie__img"
        src={movie.imgUrl}
        alt={`${movie.title}-cover`}
      />
      <h3 className="movie__title">{movie.title}</h3>
    </article>
  );
};

export default Movie;
