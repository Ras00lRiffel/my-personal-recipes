//import images from "../../assets/images/butter-chicken.jpg";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

interface RecipeProps {
  name: string;
  image: string;
  ingredients: string[];
  instructions?: string;
  recipe_og?: string;
}

const Recipe = ({ name, image, ingredients, instructions }: RecipeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="recipe-header">
        <img src={image} alt={name} className="recipe-img" />
      </div>
      <div className="recipe-body p-4 text-center">
        <div className="recipe-text">
          <h3>{name}</h3>
          <span className="cat-text mt-2">Abubakr Solomon's Recipes</span>
        </div>
        <div className="recipe-footer">
          <a href="#">
            <button
              type="button"
              className="w-full p-2 mt-4 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition"
              onClick={() => setIsOpen(true)}
            >
              View Recipe
            </button>
          </a>
        </div>
      </div>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          name={name}
          image={image}
          ingredients={ingredients}
          instructions={instructions}
        />
      )}
    </>
  );
};

export default Recipe;
