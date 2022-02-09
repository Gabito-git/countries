import { useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { ThemeContext } from "../router/AppRouter";
import { Country } from '../interfaces/countriesInterface';
import { fetchHelper } from '../helpers/fetch';

const CountryDetailsScreen = () => {

  const { themeIsDark } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState([] as Country[]);

  const { countryId } = useParams();

  useEffect(() => {
    const getCountryDetails = async() => {
      const data = await fetchHelper(`alpha/${ countryId }`);
      setCountry(data);
    }

    getCountryDetails(); 
  }, [countryId]);

  useEffect(() => {
    country.length > 0 && setIsLoading(false)
  }, [country]);
  

  if(isLoading) return <h1>Loading</h1>

  const { flags, name, population, 
          tld, languages, currencies,
          region, subregion, capital, borders } = country[0]

  const strCurr = Object.values( currencies )
                        .reduce( (vAnt, vSigu) =>{
                          return vAnt + vSigu.name + ', '
                        }, '' )

  const strNativeNames = Object.values( name.nativeName )
                               .reduce( (vAnt, vSigu) => {
                                 return vAnt + vSigu.common + ', '
                               }, '' )

  const formattedPopulation = new Intl.NumberFormat("es-ES").format(population)

  return (
    <div className={`detailsscreen ${ themeIsDark ? 'theme--dark': 'theme' }`}>
      <Button 
        label = "Back"
        where = "/"
        hasIcon
      />
      <div className="detailsscreen__container">
        <div className="detailsscreen__flag">
          <img src={ flags.svg } alt="flag"/>
        </div>
        <div className="detailsscreen__text-container">
          <h2>{ name.common }</h2>
          <div className="detailsscreen__country-data">
            
            <div className="detailsscreen__text-group">
              <p>Native Name: <span>{ strNativeNames}</span></p>
              <p>Population: <span>{ formattedPopulation }</span></p> 
              <p>Region: <span>{ region }</span></p>
              <p>Sub Region: <span>{ subregion }</span></p>
              <p>Capital: <span>{ capital[0] }</span></p>

            </div>  
          
            <div className="detailsscreen__text-group">
              <p>Top Level Domain: <span>{ tld?.join(', ') }</span></p>
              <p>Currencies: <span>{ strCurr }</span></p>
              <p>Languages: <span>{Object.values(languages).join(', ')}</span></p>
            </div>

          </div>
          
          <div className="detailsscreen__text-group">
            <p>Border Countries:  </p>
            <div className="detailsscreen__borders">
              {
                borders?.map(border => <Button 
                  key={border}
                  hasIcon={false} 
                  where="" 
                  countryId={ border } 
                  />)
              }
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CountryDetailsScreen;
