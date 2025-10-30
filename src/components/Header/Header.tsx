import logo from "../../assets/images/logo-v2.png";

const Header = () => {
  return (
    <div className="header">
      <div className="flex flex-row items-center">
        <div className="basis-1/4 pr-4 pl-4">
          <img className="header-logo" src={logo} alt="My Recipes Logo" />
        </div>
        <div className="basis-2/4 pr-4 pl-4 header-navbar">
          <a
            className="font-bold hover:bg-orange-500 hover:text-white py-1 px-4 rounded-lg"
            href="#"
          >
            Home
          </a>
          <a
            className="font-bold hover:bg-orange-500 hover:text-white py-1 px-4 rounded-lg"
            href="#"
          >
            Recipes
          </a>
          <a
            className="font-bold hover:bg-orange-500 hover:text-white py-1 px-4 rounded-lg"
            href="#"
          >
            Gallery
          </a>
        </div>
        <div className="basis-1/4 pr-4 pl-4 text-right">
          <button
            className="main-cta bg-orange-400 px-5 py-2 text-white rounded-lg hover:bg-orange-500 transition"
            type="button"
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="header-desc text-center p-8 flex justify-center items-center">
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
