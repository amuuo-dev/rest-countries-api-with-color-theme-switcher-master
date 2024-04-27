import { FaMoon } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div>
          <FaMoon />
          Dark Mode
        </div>
      </header>
    </>
  );
};

export default Header;
