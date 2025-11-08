import "../../assets/styles/styles.css";
import { RiCloseLine } from "react-icons/ri";

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
  image,
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
            <h3 className="heading">{name}</h3>
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
