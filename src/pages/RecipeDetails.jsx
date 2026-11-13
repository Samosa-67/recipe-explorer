import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaHeart,
  FaUtensils,
  FaGlobe
} from "react-icons/fa";

import { getRecipeById } from "../services/recipeAPI";

import {
  getFavorites,
  toggleFavorite
} from "../services/favorites";

function RecipeDetails() {

  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [saved, setSaved] = useState(false);


  useEffect(() => {

    async function loadRecipe() {

      try {

        setLoading(true);
        setError("");

        const data = await getRecipeById(id);

        if (!data) {
          setError("Recipe not found.");
          return;
        }

        setRecipe(data);

        setSaved(
          getFavorites().some(
            (item) => item.idMeal === data.idMeal
          )
        );

      } catch {

        setError("Unable to load recipe.");

      } finally {

        setLoading(false);

      }

    }

    loadRecipe();

  }, [id]);


  function handleFavorite() {

    if (!recipe) return;

    const updated = toggleFavorite(recipe);

    setSaved(
      updated.some(
        (item) => item.idMeal === recipe.idMeal
      )
    );

  }


  if (loading) {

    return (

      <div className="container text-center py-5">

        <div className="spinner-border text-success"></div>

        <p className="mt-3">
          Loading recipe...
        </p>

      </div>

    );

  }


  if (error || !recipe) {

    return (

      <div className="container py-5">

        <div className="alert alert-danger">
          {error || "Recipe not found."}
        </div>

        <Link to="/" className="btn recipe-button">
          Back to Home
        </Link>

      </div>

    );

  }


  const ingredients = [];

  for (let i = 1; i <= 20; i++) {

    const ingredient = recipe[`strIngredient${i}`];

    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {

      ingredients.push({
        ingredient,
        measure
      });

    }

  }


  return (

    <section className="container py-5">

      <Link
        to="/"
        className="btn btn-outline-success mb-4"
      >

        <FaArrowLeft className="me-2" />

        Back to Recipes

      </Link>


      <div className="row g-5 align-items-center">

        <div className="col-lg-5">

          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="img-fluid rounded-4 shadow recipe-detail-image"
          />

        </div>


        <div className="col-lg-7">

          <h1 className="display-5 fw-bold">
            {recipe.strMeal}
          </h1>

          <p className="text-muted fs-5">

            <FaGlobe className="me-2" />

            {recipe.strArea || "International"} Cuisine

          </p>

          <p>
            <strong>Category:</strong> {recipe.strCategory}
          </p>

          <p>
            <strong>Recipe ID:</strong> {recipe.idMeal}
          </p>


          <button
            type="button"
            onClick={handleFavorite}
            className={`btn ${
              saved ? "btn-danger" : "btn-outline-danger"
            } mt-3`}
          >

            <FaHeart className="me-2" />

            {saved
              ? "Remove from Favorites"
              : "Add to Favorites"}

          </button>

        </div>

      </div>


      <hr className="my-5" />


      <div className="row g-5">

        <div className="col-lg-5">

          <h2 className="section-title mb-4">

            <FaUtensils className="me-2" />

            Ingredients

          </h2>

          <ul className="list-group">

            {ingredients.map((item, index) => (

              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >

                <strong>
                  {item.ingredient}
                </strong>

                <span className="text-muted">
                  {item.measure}
                </span>

              </li>

            ))}

          </ul>

        </div>


        <div className="col-lg-7">

          <h2 className="section-title mb-4">
            Cooking Instructions
          </h2>

          <p className="instructions-text">

            {recipe.strInstructions}

          </p>

        </div>

      </div>


      {recipe.strYoutube && (

        <div className="text-center mt-5">

          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="btn btn-danger btn-lg"
          >

            Watch Cooking Video

          </a>

        </div>

      )}

    </section>

  );

}

export default RecipeDetails;