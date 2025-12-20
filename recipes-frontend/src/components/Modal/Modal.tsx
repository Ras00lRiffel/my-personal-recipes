import "../../assets/styles/styles.css";
import { RiCloseLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";

interface ModalProps {
  setIsOpen: (isOpen: boolean) => void;
  name: string;
  image: string;
  ingredients?: string[];
  instructions?: string;
}

const Modal = ({
  setIsOpen,
  name,
  //image,
  ingredients,
  instructions,
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
                <h4>PREP TIME:</h4>
              </div>
              <div className="flex items-center justify-center gap-2 grid-cols-2">
                <FaRegClock />
                <h4>COOK TIME: </h4>
              </div>
              <div className="flex items-center justify-center gap-2 grid-cols-2">
                <FaRegClock />
                <h4>SERVING SIZE:</h4>
              </div>
            </div>
          </div>
          <div className="modalContent">
            {ingredients} {instructions}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
