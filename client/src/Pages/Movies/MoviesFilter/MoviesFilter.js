import React from "react";
import styles from "./MoviesFilter.module.css";

const MoviesFilter = (props) => {
  const onSelectedFilter = (event) => {
    const selectedFilter = event.target.value;
    props.onFilter(selectedFilter);
  };
  const searchFilterHandler = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    props.onSearch(searchTerm);
  };
  return (
    <div className={styles.moviesFilters}>
      <h3>Filter</h3>

      {/* Gender select  */}
      <div className={styles.genreFilter}>
        <label htmlFor="genres">By genre</label>
        <select name="genres" onInput={onSelectedFilter}>
          <option value="all">All</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="infantile">Infantile</option>
          <option value="romance">Romance</option>
        </select>
      </div>

      {/* Search INPUT  */}
      <div className={styles.searchFilter}>
        <label htmlFor="searchInput">Search movies or actors</label>
        <input
          name="searchInput"
          id="searchInput"
          type="search"
          placeholder="Search"
          aria-label="Search through site content"
          onChange={searchFilterHandler}
        />
      </div>
    </div>
  );
};

export default MoviesFilter;
