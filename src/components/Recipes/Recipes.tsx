import Recipe from "./Recipe";

interface RecipeProps {
  recipes: Array<any>;
}

const Recipes = (recipes: RecipeProps) => {
  return (
    <>
      <p>You have 10 Recipes!</p>
      <div className="container grid grid-cols-3 gap-4 mt-6">
        {recipes.recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id} id={recipe.id}>
            <Recipe
              name={recipe.name}
              image={recipe.image}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Recipes;
