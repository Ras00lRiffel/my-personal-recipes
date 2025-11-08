import images from "../../assets/images/butter-chicken.jpg";

interface RecipeProps {
  id: number;
  name: string;
  image: string;
}

const Recipe = ({ id, name, image }: RecipeProps) => {
  return (
    <div key={id} className="recipe-card">
      <div className="recipe-header">
        <img src={images} alt={name} className="recipe-img" />
      </div>
      <div className="recipe-body p-4 pt-9 text-center">
        <div className="recipe-text">
          <h3>{name}</h3>
          <span className="cat-text mt-2">Abubakr Solomon in Supper</span>
        </div>
        <div className="recipe-footer">
          <a href="#">
            <button
              type="button"
              className="w-full p-2 mt-4 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition"
            >
              View Recipe
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
