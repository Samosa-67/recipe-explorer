import { Link, NavLink } from "react-router-dom";

import {
  FaUtensils,
  FaHome,
  FaHeart
} from "react-icons/fa";

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">

      <div className="container">

        <Link
          className="navbar-brand fw-bold fs-3"
          to="/"
        >

          <FaUtensils className="me-2" />

          Recipe Explorer

        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          <div className="navbar-nav ms-auto">

            <NavLink
              to="/"
              className="nav-link"
            >

              <FaHome className="me-2" />

              Home

            </NavLink>

            <NavLink
              to="/favorites"
              className="nav-link"
            >

              <FaHeart className="me-2" />

              Favorites

            </NavLink>

          </div>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;