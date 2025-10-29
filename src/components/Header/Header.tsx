import logo from "../../assets/images/logo-v2.png";

const Header = () => {
  return (
    <div className="header">
      <div className="flex flex-row items-center">
        <div className="basis-1/4 pr-4 pl-4">
          <img className="header-logo" src={logo} alt="My Recipes Logo" />
        </div>
        <div className="basis-3/4 pr-4 pl-4">
          <h1>Explore My Recipes</h1>
        </div>
      </div>
      <div className="heading-desc">
        <p>
          Browse through my favorite recipes - simple, heary and made with love.
        </p>
      </div>
    </div>
  );
};

export default Header;
