import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1 fw-bold">404</h1>
      <h2>Oops! Page Not Found</h2>

      <p className="text-muted">
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="btn btn-warning mt-3">
        Back to Home
      </Link>
    </div>
  );
}