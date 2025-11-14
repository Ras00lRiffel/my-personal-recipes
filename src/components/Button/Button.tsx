interface ButtonProps {
  text: string;
  classes?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, classes, onClick }: ButtonProps) => {
  return (
    <button
      className={`${
        classes ? classes : ""
      } bg-orange-400 px-5 py-2 text-white rounded-lg hover:bg-orange-500 transition`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
