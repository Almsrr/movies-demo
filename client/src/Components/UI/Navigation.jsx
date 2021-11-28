import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          M<i className="fas fa-video"></i>vies
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
