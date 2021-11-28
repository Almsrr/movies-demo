import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid py-2">
          <NavLink className="navbar-brand ms-1" to="/">
            <i className="fas fa-video me-2"></i>
            Movies
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav-top"
            aria-controls="nav-top"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav-top">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
