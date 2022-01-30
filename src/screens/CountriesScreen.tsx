import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import CountryList from "../components/CountryList";
import { ThemeContext } from "../router/AppRouter";
import { Country } from '../interfaces/countriesInterface';
import { fetchHelper } from "../helpers/fetch";
import { useCountries } from '../hooks/useCountries';

const CountriesScreen = () => {

  const { themeIsDark } = useContext(ThemeContext);
  
  const { handleInputChange, handleSelectChange, 
          countryName, countries} = useCountries()
 
  return (
    <div className={ `countries ${ themeIsDark ? 'theme--dark': 'theme' }` }>
      <div className="container">
        <div className="countries__data-entry-container">
          <div className="countries__input-field">
              <BsSearch className="countries__icon" />
              <input 
                placeholder="Search for a country..." 
                onChange={ handleInputChange }
                value={ countryName}
              />
          </div>

          <div className="countries__select-field">
            <select
              onChange={ handleSelectChange }
            >
              <option value="">Filter by Region</option>
              <option value="america">América</option>
              <option value="africa">Africa</option>
              <option value="europe">Europa</option>
              <option value="oceania">Oceanía</option>
            </select>
          </div>

        </div>
        <div className="countries__list-field">
          <CountryList countries={ countries }/>
        </div>
      </div>
    </div>
  )
};

export default CountriesScreen;
