import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { fetchHelper } from '../helpers/fetch';
import { Country } from "../interfaces/countriesInterface";

interface Props{
    label?: string;
    hasIcon: boolean;
    where: string;
    countryId?: string;
}

const Button = ({label, hasIcon, where, countryId}: Props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState([] as Country[]);

  useEffect(() => {
    const getCountryInfo = async() => {
      const data = await fetchHelper(`alpha/${ countryId }`)
      setCountry(data);
    }
    countryId && getCountryInfo()
  }, []);

  useEffect(() => {
    country.length > 0 && setIsLoading(false)
  }, [country]);
  
  const titleButton = !countryId 
                    ? label
                    : isLoading && countryId
                      ? 'Loading'
                      : country[0].name.common

  const whereTo = !countryId
                ? where
                : `/country/${ countryId }`
  
  return(
      <button className="button">

        <Link 
            to={ whereTo }
            className="button__link"
        > 
            { hasIcon && <BsArrowLeft className="button__icon"/> }  
            <span>{ titleButton }</span>
        </Link>

      </button>
      
  );
};

export default Button;
