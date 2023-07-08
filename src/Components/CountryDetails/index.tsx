import React from "react";
import { CountryStats, Currency} from "../../types/UI";
import { useTheme } from "../ThemeContext";
import BordersBar from "../Borders";
import { formatNumber } from "../../Utils/FormattingFunction";

const CountryDetails: React.FC<CountryStats> = ({
  population,
  capital = ["unknown"],
  name = {common : "unknown", nativeName : {} , official : "unknown"},
  region,
  subregion,
  tld,
  currencies = {},
  languages = [],
  borders,
}: CountryStats) => {
  let nativeName : string

  currencies = currencies.name ? (Object.values(currencies)[0] as Currency).name
    : "undefined";
  languages = languages ? Object.values(languages).join(", ") : "Unknown";
  try {
    nativeName = name.nativeName[Object.keys(name.nativeName)[0]].official;
  } catch (error) {
    nativeName = name.official
  }


  return (
    <div className="country-details">
      <h1 className="country-details__country-name">{name.common}</h1>

      <div className="country-details__stats-columns">
        <div className="country-details__stats-columns__left">
          <h3 className="country-details__country-stat">
            Native Name:{" "}
            <span
              className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${
                useTheme().theme
              }`}
            >
              {nativeName}
            </span>
          </h3>
          <h3 className="country-details__country-stat">
            Population :
            <span
              className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${
                useTheme().theme
              }`}
            >
              {formatNumber(population)}
            </span>
          </h3>
          <h3 className="country-details__country-stat">
            Region:{" "}
            <span
              className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${
                useTheme().theme
              }`}
            >
              {region}
            </span>
          </h3>
          <h3 className="country-details__country-stat">
            Sub Region:{" "}
            <span
              className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${
                useTheme().theme
              }`}
            >
              {subregion ? subregion : "unknown"}
            </span>
          </h3>
          <h3 className="country-details__country-stat">
            Capital:{" "}
            <span
              className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${
                useTheme().theme
              }`}
            >
              {capital}
            </span>
          </h3>
        </div>

        <div className="country-details__stats-columns__right">
          <h3 className="country-details__country-stat">
            Top Level Domain:{" "}
            <span
              className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${
                useTheme().theme
              }`}
            >
              {tld ? tld[0] : "Unknown"}
            </span>
          </h3>
          <h3 className="country-details__country-stat">
            Currency:{" "}
            <span
              className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${
                useTheme().theme
              }`}
            >
              {currencies}
            </span>
          </h3>
          <h3 className="country-details__country-stat">
            Languages:{" "}
            <span
              className={`country-details__country-stat__dim-text country-details__country-stat__dim-text--${
                useTheme().theme
              }`}
            >
              {languages.length ? languages : "unknown"}
            </span>
          </h3>
        </div>
      </div>
      {borders ? <BordersBar borders={borders} /> : null}
    </div>
  );
};

export default CountryDetails;
