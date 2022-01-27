import { useContext } from "react";

import { BsMoon } from "react-icons/bs";
import { ImSun } from "react-icons/im";

import { ThemeContext } from "../router/AppRouter";

const Header = () => {

  const { themeIsDark, setThemeIsDark } = useContext(ThemeContext);

  return (
    <div className={`header ${ themeIsDark ? 'theme--dark': 'theme' }`}>
        <h1 className="header__text">Where in the world?</h1>
        <div 
          className="header__darkfield"
          onClick={ () => setThemeIsDark( t => !t ) }
        >
            {themeIsDark ? <ImSun />: <BsMoon />  }
            <p>{ themeIsDark ? 'Ligth mode': 'Dark mode' }</p>
        </div>
    </div>
  );
};

export default Header;
