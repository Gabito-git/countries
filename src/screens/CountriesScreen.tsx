import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import CountryList from "../components/CountryList";
import { ThemeContext } from "../router/AppRouter";
import { Country } from '../interfaces/countriesInterface';

const CountriesScreen = () => {

  const { themeIsDark } = useContext(ThemeContext);
  const [countries, setCountries] = useState([] as Country[]);
  const [region, setRegion] = useState('');
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    const getAllCountries = async() => {
      const resp = await fetch('https://restcountries.com/v3.1/all')
      const data = await resp.json();

      setCountries(data);
    }

    getAllCountries();
  }, []);
  

  useEffect(() => {

    const cache = (cb: ( region: string ) => Promise<Country[]>) => {
      let responses = {} as {[key: string]: Country[]}
      return async(region: string) => {
        const cacheObjStr = localStorage.getItem('cache');
        responses = JSON.parse(cacheObjStr!) || responses
        if( responses.hasOwnProperty( region ) ){
          setCountries(responses[region])
        }else{
          responses[region] = await cb( region );
          localStorage.setItem('cache', JSON.stringify(responses))
          setCountries(responses[region])
        }
      }
    }

    const getCountriesByRegion = async(region: string): Promise<Country[]> => {
      const resp = await fetch(`https://restcountries.com/v3.1/region/${region}`)
      const data = await resp.json()
      return data;
    }

    const countriesCache = cache( getCountriesByRegion);
    region && countriesCache( region )

  }, [region]);

  useEffect(() => {
    const getCountry = async() => {
      const resp = await fetch(`https://restcountries.com/v3.1/name/${ countryName }`)
      const data = await resp.json();

      setCountries(data);
    }

    countryName && getCountry();
  }, [countryName]);
  
  

  const handleSelectChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName( e.target.value )
  }
  
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
