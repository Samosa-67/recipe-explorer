export default function About() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">About Recipe Explorer 🍳</h1>
      <p className="lead text-center">
        Your destination for discovering delicious recipes from around the world.
      </p>

      <div className="row g-4 mt-3">
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <h3>🔍 Discover</h3>
            <p>Find recipes using our easy search functionality.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <h3>❤️ Save</h3>
            <p>Keep your favorite meals in one convenient place.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <h3>🌍 Explore</h3>
            <p>Discover dishes and cuisines from around the world.</p>
          </div>
        </div>
      </div>
    </div>
  );
}