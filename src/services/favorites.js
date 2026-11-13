const FAVORITES_KEY = "recipeFavorites";

// Get saved recipes
export function getFavorites() {
  try {
    const saved = localStorage.getItem(FAVORITES_KEY);

    return saved ? JSON.parse(saved) : [];

  } catch (error) {
    console.error("Favorites error:", error);
    return [];
  }
}

// Check if recipe is favorite
export function isFavorite(id) {
  return getFavorites().some(
    (recipe) => recipe.idMeal === id
  );
}

// Add or remove favorite
export function toggleFavorite(recipe) {

  const favorites = getFavorites();

  const exists = favorites.some(
    (item) => item.idMeal === recipe.idMeal
  );

  let updatedFavorites;

  if (exists) {

    updatedFavorites = favorites.filter(
      (item) => item.idMeal !== recipe.idMeal
    );

  } else {

    updatedFavorites = [...favorites, recipe];

  }

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(updatedFavorites)
  );

  window.dispatchEvent(
    new Event("favoritesUpdated")
  );

  return updatedFavorites;
}