import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i class="fas fa-video me-2"></i>
            Movies
          </Link>
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
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to="/series"
                >
                  Series
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to="/actors"
                >
                  Actors
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
