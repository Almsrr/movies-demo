import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import "./moviesFilter.css";

const MoviesFilter = (props) => {
  const onSelectedFilter = (event) => {
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
          onChange={onSelectedFilter}
          className="form-select"
        >
          <option value="all">All genres</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="infantile">Infantile</option>
          <option value="romance">Romance</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
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

export default MoviesFilter;
