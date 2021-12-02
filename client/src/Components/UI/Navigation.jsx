import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand mx-auto" to="/">
          <i className="fas fa-video"></i> Mvie
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
