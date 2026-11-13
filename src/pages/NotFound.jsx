import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1 fw-bold">404</h1>
      <h2>Oops! Page Not Found</h2>
      <p className="text-muted">
        Sorry, the page you requested could not be found.
      </p>
      <Link to="/" className="btn btn-warning mt-3">
        Return Home
      </Link>
    </div>
  );
}