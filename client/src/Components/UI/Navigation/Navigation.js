import React from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav>
      <div className="container">
        <ul className={styles.navLinks}>
          {/* <li>
            <Link className={styles.link} to="/">
              Movies
            </Link>
          </li> */}
          {/* <li>
            <Link className={styles.link} to="/actors">
              Actors
            </Link>
          </li> */}
          <li>Movies</li>
          <li>Series</li>
          <li>Actors</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
