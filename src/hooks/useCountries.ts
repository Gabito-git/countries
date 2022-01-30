import { useEffect, useState } from "react";
import { fetchHelper } from "../helpers/fetch";
import { Country } from "../interfaces/countriesInterface";

export const useCountries = () => {
    const [countries, setCountries] = useState([] as Country[]);
    const [region, setRegion] = useState('');
    const [countryName, setCountryName] = useState('');
  
    useEffect(() => {
      const getAllCountries = async() => {
        const data = await fetchHelper('all');
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
        return await fetchHelper(`region/${ region }`)
      }
  
      const countriesCache = cache( getCountriesByRegion);
      region && countriesCache( region )
  
    }, [region]);

    useEffect(() => {
        const getCountry = async() => {
          const data = await fetchHelper(`name/${ countryName }`)
    
          Array.isArray(data) 
            ? setCountries(data) 
            : setCountries([])
        }
    
        countryName && getCountry();
      }, [countryName]);
      
      const handleSelectChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setRegion(e.target.value)
      }
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountryName( e.target.value )
      }
      
    return{
        countries,
        region,
        countryName,

        handleInputChange,
        handleSelectChange
    }
};

