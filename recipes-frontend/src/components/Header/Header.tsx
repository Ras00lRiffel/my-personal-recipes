import logo from "../../assets/logo-v2.png";
import headerBg from "../../assets/header-bg.jpeg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top flex flex-row items-center max-w-7xl m-auto">
        <div className="basis-1/4 pr-4 pl-4">
          <Link to="/">
            <img className="header-logo" src={logo} alt="My Recipes Logo" />
          </Link>
        </div>
        <div className="basis-2/4 pr-4 pl-4 header-navbar">
          <Link to="/">
            <span className="font-bold hover:bg-orange-500 hover:text-white py-1 px-4 rounded-lg">
              Home
            </span>
          </Link>
          <Link to="/add">
            <span className="font-bold hover:bg-orange-500 hover:text-white py-1 px-4 rounded-lg">
              Recipes
            </span>
          </Link>

          <Link to="/">
            <span className="font-bold hover:bg-orange-500 hover:text-white py-1 px-4 rounded-lg">
              Gallery
            </span>
          </Link>
        </div>
        <div className="basis-1/4 pr-4 pl-4 text-right">
          <Button text="Sign In" classes="main-cta" />
        </div>
      </div>
      <div
        className="header-desc text-center p-8 flex justify-center items-center"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <span className="header-text relative z-10">
          <h1 className="text-orange-400">Explore My Recipes</h1>
          <p className="text-orange-400">
            Browse through my favorite recipes - simple, hearty and made with
            love.
          </p>
        </span>
        <span className="bg-over"></span>
      </div>
    </div>
  );
};

export default Header;
