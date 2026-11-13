const tips = [
  ["🧂 Season Carefully", "Add seasoning gradually and taste your food."],
  ["🔪 Prepare Ingredients", "Prepare ingredients before starting to cook."],
  ["🌿 Fresh Herbs", "Fresh herbs can improve the flavor of meals."],
  ["📖 Read Recipes", "Read all instructions before preparing a dish."],
  ["🧼 Clean Workspace", "Keep your cooking area clean and organized."],
  ["🌍 Explore Cuisines", "Try recipes from different countries."],
];

export default function CookingTips() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Cooking Tips 👨‍🍳</h1>

      <div className="row g-4">
        {tips.map(([title, description]) => (
          <div className="col-md-4" key={title}>
            <div className="card p-4 h-100 shadow-sm">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}