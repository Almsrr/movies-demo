import { Fragment, memo } from "react";

import Movie from "../Movie/Movie";
import "./movieList.css";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

const MoviesList = (props) => {
  const { movies, loadingMovies, onShowMovieDetail } = props;

  let contentToRender;
  if (loadingMovies) {
    contentToRender = (
      <li>
        <LoadingSpinner />
      </li>
    );
  } else if (movies.length === 0) {
    contentToRender = (
      <li>
        <p className="text-muted text-center">Movies not found</p>
      </li>
    );
  } else {
    contentToRender = (
      <Fragment>
        {movies.map((movie) => (
          <li className="col-sm-6 col-md-3 col-lg-3" key={movie.id}>
            <Movie movie={movie} onShowDetail={onShowMovieDetail} />
          </li>
        ))}
      </Fragment>
    );
  }
  return <ul className="row movie-list">{contentToRender}</ul>;
};

export default memo(MoviesList);
