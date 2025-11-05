import logo from "../../assets/images/logo-v2.png";

interface RecipeProps {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string;
}

const Recipe = ({
  id,
  title,
  image,
  ingredients,
  instructions,
}: RecipeProps) => {
  return (
    <div className="container">
      <div className="flex flex-col recipe-card">
        <div className="recipe-header">
          <img src={logo} alt="Receipe title" className="recipe-img max-w-50" />
        </div>
        <div className="recipe-body">
          <h3>Recipe Title</h3>
        </div>
        <div className="recipe-footer">
          <button>View Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
