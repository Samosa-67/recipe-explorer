import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { FaHeart } from "react-icons/fa";

import {
  isFavorite,
  toggleFavorite
} from "../services/favorites";

function RecipeCard({ recipe }) {

  const [saved, setSaved] = useState(
    isFavorite(recipe.idMeal)
  );

  useEffect(() => {

    const updateFavorite = () => {
      setSaved(isFavorite(recipe.idMeal));
    };

    window.addEventListener(
      "favoritesUpdated",
      updateFavorite
    );

    return () => {
      window.removeEventListener(
        "favoritesUpdated",
        updateFavorite
      );
    };

  }, [recipe.idMeal]);

  function handleFavorite() {

    toggleFavorite(recipe);

    setSaved(isFavorite(recipe.idMeal));

  }

  return (

    <div className="col-md-6 col-lg-4 mb-4">

      <div className="card recipe-card h-100">

        <div className="image-container">

          <img
            src={recipe.strMealThumb}
            className="card-img-top"
            alt={recipe.strMeal}
          />

          <button
            className={`favorite-icon ${
              saved ? "saved" : ""
            }`}
            onClick={handleFavorite}
            type="button"
            aria-label={
              saved ? "Remove from favorites" : "Add to favorites"
            }
          >

            <FaHeart />

          </button>

        </div>

        <div className="card-body d-flex flex-column">

          <h5 className="card-title fw-bold">

            {recipe.strMeal}

          </h5>

          <p className="text-muted">

            {recipe.strArea || "Delicious Recipe"}

          </p>

          <Link
            to={`/recipe/${recipe.idMeal}`}
            className="btn recipe-button mt-auto"
          >

            View Recipe

          </Link>

        </div>

      </div>

    </div>

  );

}

export default RecipeCard;