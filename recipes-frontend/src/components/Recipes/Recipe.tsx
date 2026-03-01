import dImage from "../../assets/default-image.avif";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

interface RecipeProps {
  id: number;
  name: string;
  image: string;
  ingredients: [];
  instructions?: [];
  author?: string;
  cookTime?: string;
  prepTime?: string;
  servings?: string;
}

const Recipe = ({
  id,
  name,
  image,
  ingredients,
  instructions,
  author,
  cookTime,
  prepTime,
  servings,
}: RecipeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultImage = dImage; // Fallback image if no image is provided
  return (
    <>
      <div className="recipe-header">
        <img src={image || defaultImage} alt={name} className="recipe-img" />
      </div>
      <div className="recipe-body p-4 text-center">
        <div className="recipe-text">
          <h3>{name}</h3>
          <span className="cat-text mt-2">{author}'s Recipe</span>
        </div>
        <div className="recipe-footer flex flex-row items-center justify-center gap-4">
          <a href="#">
            <button
              type="button"
              className="w-full p-2 mt-4 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition"
              onClick={() => setIsOpen(true)}
            >
              View Recipe
            </button>
          </a>
          <Link to={`/edit/${id}`}>
            <button
              type="button"
              className="w-full p-2 mt-4 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition"
              // onClick={handleEdit}
            >
              Edit Recipe
            </button>
          </Link>
        </div>
      </div>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          name={name}
          image={image}
          ingredients={ingredients}
          instructions={instructions}
          cookTime={cookTime}
          prepTime={prepTime}
          servings={servings}
        />
      )}
    </>
  );
};

export default Recipe;
