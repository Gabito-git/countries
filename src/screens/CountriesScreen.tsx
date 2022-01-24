import { BsSearch } from "react-icons/bs";

const CountriesScreen = () => {
  return (
    <div className="theme countries">
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

      </div>
    </div>
  )
};

export default CountriesScreen;
