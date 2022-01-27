
const CountryCard = () => {
  return (
      <div className="countrycard theme">

            <img 
                src="https://flagcdn.com/w320/tz.png"
                alt="flag" 
                className="countrycard__flag"
            />

          <div className="countrycard__country-info">
            <h2 className="countrycard__country-name">Iceland</h2>
            <div className="countrycard__country-text">
                <p>Pupulation: <span>334.200</span></p>
                <p>Region: <span>Europe</span></p>
                <p>Capital: <span>Kabul</span></p>
            </div>
         </div>  
          
      </div>
  );
};

export default CountryCard;
