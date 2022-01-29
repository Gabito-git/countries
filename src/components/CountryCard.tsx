import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Country } from "../interfaces/countriesInterface";
import { ThemeContext } from '../router/AppRouter';

interface Props{
  country: Country
}

const CountryCard = ({ country }: Props) => {

  const { name, population, region, capital, flags } = country;

  const { themeIsDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
      <div 
        className={`countrycard ${ themeIsDark ? 'theme--dark': 'theme' }`}
        onClick={() => navigate('./country/12') }
      >
            <img 
                src={ flags.png }
                alt="flag" 
                className="countrycard__flag"
            />

          <div className="countrycard__country-info">
            <h2 className="countrycard__country-name">{ name.common }</h2>
            <div className="countrycard__country-text">
                <p>Pupulation: <span>{ population }</span></p>
                <p>Region: <span>{ region }</span></p>
                <p>Capital: <span>{ capital }</span></p>
            </div>
         </div>  
          
      </div>
  );
};

export default CountryCard;
