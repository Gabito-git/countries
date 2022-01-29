import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ThemeContext } from "../router/AppRouter";

const CountryDetailsScreen = () => {

  const { themeIsDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div className={`detailsscreen ${ themeIsDark ? 'theme--dark': 'theme' }`}>
      <Button 
        label = "Back"
        where = "/"
        hasIcon
      />
      <div className="detailsscreen__container">
        <div className="detailsscreen__flag">
          <img src="https://flagcdn.com/tz.svg" alt="flag"/>
        </div>
        <div className="detailsscreen__text-container">
          <h2>Belgium</h2>
          <div className="detailsscreen__country-data">
            
            <div className="detailsscreen__text-group">
              <p>Native Name: <span>Belgie</span></p>
              <p>Population: <span>11.319.511</span></p>
              <p>Region: <span>Europe</span></p>
              <p>Sub Region: <span>Western Europe</span></p>
              <p>Capital: <span>Brussels</span></p>

            </div>
          
            <div className="detailsscreen__text-group">
              <p>Top Level Domain: <span>be</span></p>
              <p>Currencies: <span>Euro</span></p>
              <p>Languages: <span>Dutch, French, German</span></p>
            </div>

          </div>
          
          <div className="detailsscreen__text-group">
            <p>Border Countries:  </p>
            <div className="detailsscreen__borders">
              <Button label="text" hasIcon={false} where="" />
              <Button label="text" hasIcon={false} where="" />
              <Button label="text" hasIcon={false} where="" />
              <Button label="Netherlands" hasIcon={false} where="" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default CountryDetailsScreen;
