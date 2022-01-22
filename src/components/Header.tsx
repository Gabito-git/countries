import { BsMoonFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="theme header">
        <h1 className="header__text">Where in the world?</h1>
        <div className="header__darkfield">
            <BsMoonFill />
            <p>Dark mode</p>
        </div>
    </div>
  );
};

export default Header;
