import Recipe from "./Recipe";

interface RecipeProps {
  recipes: Array<any>;
}

const Recipes = (recipes: RecipeProps) => {
  return (
    <div className="container grid grid-cols-3 gap-4 mt-6">
      {recipes.recipes.map((recipe) => (
        <Recipe
          id={recipe.id}
          name={recipe.name}
          image={recipe.image}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      ))}
    </div>
  );
};

export default Recipes;
