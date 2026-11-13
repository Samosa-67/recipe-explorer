import { FaHeart } from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer text-center">

      <div className="container">

        <h5 className="fw-bold">

          <FaHeart className="me-2" />

          Recipe Explorer

        </h5>

        <p>
          Discover, cook and save your favourite recipes.
        </p>

        <small>
          Recipe data provided by TheMealDB API.
        </small>

        <p className="mt-3 mb-0">
          © 2026 Recipe Explorer
        </p>

      </div>

    </footer>

  );

}

export default Footer;