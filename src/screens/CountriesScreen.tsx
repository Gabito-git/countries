import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import CountryList from "../components/CountryList";
import { ThemeContext } from "../router/AppRouter";
import { Country } from '../interfaces/countriesInterface';

const CountriesScreen = () => {

  const { themeIsDark } = useContext(ThemeContext);
  const [countries, setCountries] = useState([] as Country[]);

  useEffect(() => {
    const getAllCountries = async() => {
      const resp = await fetch('https://restcountries.com/v3.1/all')
      const data = await resp.json();

      setCountries(data);
    }

    getAllCountries();
  }, []);
  
  return (
    <div className={ `countries ${ themeIsDark ? 'theme--dark': 'theme' }` }>
      <div className="container">
        <div className="countries__data-entry-container">
          <div className="countries__input-field">
              <BsSearch className="countries__icon" />
              <input placeholder="Search for a country..."></input>
          </div>

          <div className="countries__select-field">
            <select>
              <option value="">Filter by Region</option>
              <option value="america">América</option>
              <option value="africa">Africa</option>
              <option value="europa">Europa</option>
              <option value="oceania">Oceanía</option>
            </select>
          </div>

        </div>
        <CountryList countries={ countries }/>
      </div>
    </div>
  )
};

export default CountriesScreen;
