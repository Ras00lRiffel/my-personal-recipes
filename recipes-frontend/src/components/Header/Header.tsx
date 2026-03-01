import logo from "../../assets/logo-v2.png";
import headerBg from "../../assets/header-bg.jpeg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-top flex flex-row items-center max-w-7xl m-auto">
        <div className="md:basis-1/4 pr-4 pl-4 flex items-center justify-between w-full">
          <Link to="/">
            <img className="header-logo" src={logo} alt="My Recipes Logo" />
          </Link>
          {/* Burger menu icon for mobile */}
          <button
            className="md:hidden ml-4 p-2 rounded hover:bg-orange-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="currentColor">
              <rect y="4" width="24" height="2" rx="1" />
              <rect y="11" width="24" height="2" rx="1" />
              <rect y="18" width="24" height="2" rx="1" />
            </svg>
          </button>
        </div>
        {/* Desktop navbar */}
        <div className="md:basis-2/4 pr-4 pl-4 header-navbar hidden md:flex justify-center gap-6">
          <Link to="/">
            <span className="font-bold md:hover:bg-orange-500 md:hover:text-white py-1 px-4 rounded-lg">
              Home
            </span>
          </Link>
          <Link to="/new">
            <span className="font-bold md:hover:bg-orange-500 md:hover:text-white py-1 px-4 rounded-lg">
              Recipes
            </span>
          </Link>

          <Link to="/gallery">
            <span className="font-bold md:hover:bg-orange-500 md:hover:text-white py-1 px-4 rounded-lg">
              Gallery
            </span>
          </Link>
        </div>
        <div className="md:basis-1/4 pr-4 pl-4 text-right hidden md:block">
          <Button text="Sign In" classes="main-cta" />
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-16 z-50">
          <div className="flex flex-col items-center pb-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center hover:bg-orange-500 hover:text-white"
            >
              <span className="font-bold md:hover:bg-orange-500 md:hover:text-white py-2 px-6 rounded-lg block">
                Home
              </span>
            </Link>
            <Link
              to="/new"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center hover:bg-orange-500 hover:text-white"
            >
              <span className="font-bold md:hover:bg-orange-500 md:hover:text-white py-2 px-6 rounded-lg block">
                Recipes
              </span>
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center hover:bg-orange-500 hover:text-white"
            >
              <span className="font-bold md:hover:bg-orange-500 md:hover:text-white py-2 px-6 rounded-lg block">
                Gallery
              </span>
            </Link>
            <Button text="Sign In" classes="main-cta mt-4" />
          </div>
        </div>
      )}
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
