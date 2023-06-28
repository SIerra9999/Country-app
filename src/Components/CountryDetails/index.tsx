import React from 'react'
import { CountryStats, Currency, NativeName  } from '../../types/UI'



const CountryDetails : React.FC<CountryStats> = ({population,
    capital,
    name,
    region,
    subregion,
    tld,
    currencies,
    languages,
    flags} : CountryStats) => {


        const nativeName = name?.nativeName
        ? (Object.values(name.nativeName)[0] as NativeName).common
        : "Unknown";
      currencies = currencies
        ? (Object.values(currencies)[0] as Currency).name
        : "Unknown";
      languages = languages ? Object.values(languages).join(", ") : "Unknown";



  return (
    <div className="details-page__country-details">
    <h1 className="details-page__country-name">{name?.common}</h1>
    <h3 className="country-details__country-stat">
      Native Name: <span className="country-details__country-stat__dim-text">{nativeName}</span>
    </h3>
    <h3 className="country-details__country-stat">
      Population: <span className="country-details__country-stat__dim-text">{population}</span>
    </h3>
    <h3 className="country-details__country-stat">Region: <span className="country-details__country-stat__dim-text">{region}</span></h3>
    <h3 className="country-details__country-stat">
      Sub Region: <span className="country-details__country-stat__dim-text">{subregion}</span>
    </h3>
    <h3 className="country-details__country-stat">
      Capital: <span className="country-details__country-stat__dim-text">{capital ? capital[0] : "Unknown"}</span>
    </h3>
    <h3 className="country-details__country-stat">
      Top Level Domain: <span className="country-details__country-stat__dim-text">{tld ? tld[0] : "Unknown"}</span>
    </h3>
    <h3 className="country-details__country-stat">
      Currency: <span className="country-details__country-stat__dim-text">{currencies}</span>
    </h3>
    <h3 className="country-details__country-stat">
      Languages: <span className="country-details__country-stat__dim-text">{languages}</span>
    </h3>
  </div>
  )
}

export default CountryDetails