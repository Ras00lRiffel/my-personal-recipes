import "../../assets/styles/styles.css";
import { RiCloseLine } from "react-icons/ri";
import { IoIosClock } from "react-icons/io";
import { GiForkKnifeSpoon } from "react-icons/gi";

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
            <div className="recipes-info grid grid-cols-3 gap-4 mt-2 ">
              <div className="flex items-center justify-space-between gap-2 grid-cols-2">
                <IoIosClock size={30} className="icon" />
                <h4>
                  Prep Time: <br />
                  {prepTime}
                </h4>
              </div>
              <div className="flex items-center justify-center gap-2 grid-cols-2">
                <IoIosClock size={30} className="icon" />
                <h4>
                  Cook Time: <br />
                  {cookTime}
                </h4>
              </div>
              <div className="flex items-center justify-center gap-2 grid-cols-2">
                <GiForkKnifeSpoon size={30} className="icon" />
                <h4>
                  Serving Size: <br />
                  {servings}
                </h4>
              </div>
            </div>
            <hr />
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
            </div>
            <div className="recipe-image">
              <img src={image} alt={name} />
            </div>
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
      </div>
    </>
  );
};

export default Modal;
