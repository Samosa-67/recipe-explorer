export default function Privacy() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Privacy Information 🔒</h1>

      <div className="mb-4">
        <h3>Recipe Information</h3>
        <p>
          Recipe information is retrieved from TheMealDB API.
        </p>
      </div>

      <div className="mb-4">
        <h3>Favorite Recipes</h3>
        <p>
          Favorite recipes can be stored locally in your browser
          using localStorage.
        </p>
      </div>

      <div className="mb-4">
        <h3>Personal Information</h3>
        <p>
          This application does not require account registration.
          It does not include a backend account system.
        </p>
      </div>
    </div>
  );
}