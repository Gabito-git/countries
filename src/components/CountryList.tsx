import { Country } from "../interfaces/countriesInterface";
import CountryCard from "./CountryCard";

interface Props{
  countries: Country[]
}

const CountryList = ({ countries }: Props) => {
  return (
      <div className="countrylist">
        { countries.map( country =>(
          <CountryCard key={country.cca2} country={country} />
        ) )}
      </div>
  );
};

export default CountryList;
