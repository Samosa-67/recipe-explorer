import { useEffect, useState } from "react";

import {
  searchMeals,
  getCategories,
  getMealsByCategory
} from "../services/recipeAPI";

import RecipeCard from "../components/RecipeCard";

import {
  FaSearch,
  FaUtensils
} from "react-icons/fa";

function Home() {

  const [recipes, setRecipes] = useState([]);

  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    async function loadInitialData() {

      try {

        setLoading(true);

        const [meals, categoryData] = await Promise.all([
          searchMeals("chicken"),
          getCategories()
        ]);

        setRecipes(meals);
        setCategories(categoryData);

      } catch (err) {

        setError(
          "Unable to load recipes. Please check your internet connection."
        );

      } finally {

        setLoading(false);

      }

    }

    loadInitialData();

  }, []);

  async function handleSearch(e) {

    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    try {

      setLoading(true);
      setError("");
      setCategory("");

      const results = await searchMeals(search);

      setRecipes(results);

      if (results.length === 0) {
        setError("No recipes found. Try another search.");
      }

    } catch (err) {

      setError("Search failed. Please try again.");

    } finally {

      setLoading(false);

    }

  }

  async function handleCategory(e) {

    const selected = e.target.value;

    setCategory(selected);

    if (!selected) {

      try {

        setLoading(true);

        const results = await searchMeals("chicken");

        setRecipes(results);

        setError("");

      } catch {

        setError("Unable to load recipes.");

      } finally {

        setLoading(false);

      }

      return;
    }

    try {

      setLoading(true);
      setError("");

      const results = await getMealsByCategory(selected);

      setRecipes(results);

      if (results.length === 0) {
        setError("No recipes found in this category.");
      }

    } catch {

      setError("Unable to filter recipes.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <>

      <section className="hero-section">

        <div className="container text-center">

          <h1 className="display-3 fw-bold">

            Discover Delicious Recipes

          </h1>

          <p className="lead mt-3">

            Find your next favourite meal from around the world.

          </p>

          <p>

            Search recipes, explore cuisines and save meals you love.

          </p>


          <form
            onSubmit={handleSearch}
            className="search-form mx-auto mt-4"
          >

            <input
              type="text"
              className="form-control"
              placeholder="Search recipes... e.g. chicken, pasta"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              className="btn search-button"
              type="submit"
            >

              <FaSearch className="me-2" />

              Search

            </button>

          </form>

        </div>

      </section>


      <section className="container py-5">

        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">

          <h2 className="section-title">

            <FaUtensils className="me-2" />

            Explore Recipes

          </h2>


          <select
            className="form-select category-select"
            value={category}
            onChange={handleCategory}
          >

            <option value="">
              All Categories
            </option>

            {categories.map((item) => (

              <option
                key={item.strCategory}
                value={item.strCategory}
              >

                {item.strCategory}

              </option>

            ))}

          </select>

        </div>


        {loading && (

          <div className="text-center py-5">

            <div className="spinner-border text-success"></div>

            <p className="mt-3">
              Finding delicious recipes...
            </p>

          </div>

        )}


        {error && !loading && (

          <div className="alert alert-warning">
            {error}
          </div>

        )}


        {!loading && recipes.length > 0 && (

          <div className="row">

            {recipes.map((recipe) => (

              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />

            ))}

          </div>

        )}

      </section>

    </>

  );

}

export default Home;