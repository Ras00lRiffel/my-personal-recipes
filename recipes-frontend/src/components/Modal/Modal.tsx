import "../../assets/styles/styles.css";
import { RiCloseLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";

interface ModalProps {
  setIsOpen: (isOpen: boolean) => void;
  name: string;
  image: string;
  ingredients?: string[];
  instructions?: string[];
  cookTime?: string;
  prepTime?: string;
  servings?: string;
}

const Modal = ({
  setIsOpen,
  name,
  image,
  ingredients,
  instructions,
  cookTime,
  prepTime,
  servings,
}: ModalProps) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal ">
          <div className="closeBtn">
            <RiCloseLine onClick={() => setIsOpen(false)} />
          </div>
          <div className="modalHeader">
            <h2 className="heading">{name}</h2>
            <hr />
            <div className="recipes-info grid grid-cols-3 gap-4 mt-2 text-center">
              <div className="flex items-center justify-center gap-2 grid-cols-2">
                <FaRegClock />
                <h4>PREP TIME: {prepTime}</h4>
              </div>
              <div className="flex items-center justify-center gap-2 grid-cols-2">
                <FaRegClock />
                <h4>COOK TIME: {cookTime}</h4>
              </div>
              <div className="flex items-center justify-center gap-2 grid-cols-2">
                <FaRegClock />
                <h4>SERVING SIZE: {servings}</h4>
              </div>
            </div>
          </div>
          <div className="modalContent grid grid-cols-2 gap-4 mt-4">
            <div className="">
              <div>
                <h4>Ingredients</h4>
                <ul>
                  {ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Instructions</h4>
                <ul>
                  {instructions?.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="recipe-image">
              <img src={"http://localhost:8800" + image} alt={name} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
