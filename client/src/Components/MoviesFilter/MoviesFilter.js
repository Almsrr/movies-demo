import React, { Fragment } from "react";

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
    <Fragment>
      <div className="col-12 col-sm-6 col-md-2">
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
      <div className="col-12 col-sm-6 col-md-3">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={searchHandler}
        />
      </div>
    </Fragment>
  );
};

export default MoviesFilter;
