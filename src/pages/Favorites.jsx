import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { FaHeart, FaSearch } from "react-icons/fa";

import { getFavorites } from "../services/favorites";

import RecipeCard from "../components/RecipeCard";

function Favorites() {

  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    setFavorites(getFavorites());
  }

  useEffect(() => {

    loadFavorites();

    window.addEventListener(
      "favoritesUpdated",
      loadFavorites
    );

    return () => {

      window.removeEventListener(
        "favoritesUpdated",
        loadFavorites
      );

    };

  }, []);

  return (

    <section className="container py-5">

      <div className="mb-5">

        <h1 className="fw-bold">

          <FaHeart className="text-danger me-2" />

          My Favorite Recipes

        </h1>

        <p className="text-muted">
          All your saved recipes in one place.
        </p>

      </div>


      {favorites.length === 0 ? (

        <div className="empty-favorites text-center py-5">

          <FaHeart className="empty-heart mb-4" />

          <h3>No favorites yet!</h3>

          <p className="text-muted">

            Explore recipes and save the ones you love.

          </p>

          <Link
            to="/"
            className="btn recipe-button mt-3"
          >

            <FaSearch className="me-2" />

            Explore Recipes

          </Link>

        </div>

      ) : (

        <>

          <h5 className="mb-4">

            You have saved {favorites.length} recipe(s).

          </h5>

          <div className="row">

            {favorites.map((recipe) => (

              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />

            ))}

          </div>

        </>

      )}

    </section>

  );

}

export default Favorites;