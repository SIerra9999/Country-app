import React from "react";
import { CountryStats, Currency, NativeName } from "../../types/UI";
import { useTheme } from "../ThemeContext";

const CountryDetails: React.FC<CountryStats> = ({
  population,
  capital,
  name,
  region,
  subregion,
  tld,
  currencies,
  languages,
  flags,
}: CountryStats) => {


  const nativeName = name?.nativeName
    ? (Object.values(name.nativeName)[0] as NativeName).common
    : "Unknown";
  currencies = currencies
    ? (Object.values(currencies)[0] as Currency).name
    : "Unknown";
  languages = languages ? Object.values(languages).join(", ") : "Unknown";

  return (
    <div className="country-details">
      
      <h1 className="country-details__country-name">{name?.common}</h1>

      <div className="country-details__stats-columns">
      <div className="country-details__stats-columns__left">
        <h3 className="country-details__country-stat">
          Native Name:{" "}
          <span className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${useTheme().theme}`}>
            {nativeName}
          </span>
        </h3>
        <h3 className="country-details__country-stat">
          Population:{" "}
          <span className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${useTheme().theme}`}>
            {population}
          </span>
        </h3>
        <h3 className="country-details__country-stat">
          Region:{" "}
          <span className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${useTheme().theme}`}>
            {region}
          </span>
        </h3>
        <h3 className="country-details__country-stat">
          Sub Region:{" "}
          <span className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${useTheme().theme}`}>
            {subregion}
          </span>
        </h3>
        <h3 className="country-details__country-stat">
          Capital:{" "}
          <span className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${useTheme().theme}`}>
            {capital ? capital[0] : "Unknown"}
          </span>
        </h3>
      </div>

      <div className="country-details__stats-columns__right">
        <h3 className="country-details__country-stat">
          Top Level Domain:{" "}
          <span className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${useTheme().theme}`}>
            {tld ? tld[0] : "Unknown"}
          </span>
        </h3>
        <h3 className="country-details__country-stat">
          Currency:{" "}
          <span className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${useTheme().theme}`}>
            {currencies}
          </span>
        </h3>
        <h3 className="country-details__country-stat">
          Languages:{" "}
          <span className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${useTheme().theme}`}>
            {languages}
          </span>
        </h3>
      </div>
      </div>

    </div>
  );
};

export default CountryDetails;
