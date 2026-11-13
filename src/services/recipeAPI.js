const API_URL = "https://www.themealdb.com/api/json/v1/1";

// Search recipes
export async function searchMeals(query) {
  try {
    const response = await fetch(
      `${API_URL}/search.php?s=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }

    const data = await response.json();

    return data.meals || [];

  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
}

// Get recipe details
export async function getRecipeById(id) {
  try {
    const response = await fetch(
      `${API_URL}/lookup.php?i=${id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recipe details");
    }

    const data = await response.json();

    return data.meals?.[0] || null;

  } catch (error) {
    console.error("Recipe details error:", error);
    throw error;
  }
}

// Get recipe categories
export async function getCategories() {
  try {
    const response = await fetch(
      `${API_URL}/list.php?c=list`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();

    return data.meals || [];

  } catch (error) {
    console.error("Category error:", error);
    throw error;
  }
}

// Filter recipes by category
export async function getMealsByCategory(category) {
  try {
    const response = await fetch(
      `${API_URL}/filter.php?c=${encodeURIComponent(category)}`
    );

    if (!response.ok) {
      throw new Error("Failed to filter recipes");
    }

    const data = await response.json();

    return data.meals || [];

  } catch (error) {
    console.error("Filter error:", error);
    throw error;
  }
}