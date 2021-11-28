import { memo } from "react";

import { Link } from "react-router-dom";
import "./moviesFilter.css";

const MoviesFilter = (props) => {
  const selectedFilterHandler = (event) => {
    const selectedFilter = event.target.value;
    props.onFilter(selectedFilter);
  };

  const searchHandler = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    props.onSearch(searchTerm);
  };

  return (
    <div className="filter">
      <div className="mb-3">
        <select
          name="genres"
          onChange={selectedFilterHandler}
          className="form-select"
        >
          {props.genres.map((genre, i) => (
            <option key={i} value={genre.value}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="search"
          placeholder="Search by title or actor"
          aria-label="Search"
          onChange={searchHandler}
        />
      </div>
      <p className="text small text-center">
        Can&apos;t find the movie you're looking for?{" "}
        <Link className="fw-bold" to="/new-movie">
          Add it
        </Link>
      </p>
    </div>
  );
};

export default memo(MoviesFilter);
