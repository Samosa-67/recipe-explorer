import { useState } from "react";
import { Link } from "react-router-dom";

export default function RandomRecipe() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getRandomRecipe() {
    setLoading(true);

    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipe");
      }

      const data = await response.json();
      setRecipe(data.meals?.[0] || null);
    } catch (error) {
      alert("Unable to load recipe. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-5 text-center">
      <h1>🎲 Random Recipe Generator</h1>
      <p>Let us choose a delicious recipe for you!</p>

      <button
        className="btn btn-warning my-4"
        onClick={getRandomRecipe}
        disabled={loading}
      >
        {loading ? "Loading..." : "Surprise Me!"}
      </button>

      {recipe && (
        <div
          className="card mx-auto shadow"
          style={{ maxWidth: "450px" }}
        >
          <img
            src={recipe.strMealThumb}
            className="card-img-top"
            alt={recipe.strMeal}
          />

          <div className="card-body">
            <h3>{recipe.strMeal}</h3>
            <p>{recipe.strArea} Cuisine</p>

            <Link
              to={`/recipe/${recipe.idMeal}`}
              className="btn btn-warning"
            >
              View Recipe
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}