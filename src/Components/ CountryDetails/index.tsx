import React from "react";
import { useParams } from "react-router-dom";
import { CountryStats, Currency, NativeName } from "../../types/UI";
import { Link } from "react-router-dom";
/*
        THE DETAILS SHOULD BE : 
        - flag
        - name
        - native name
        - population
        - region 
        - sub region
        - capital
        - top level domain 
        - currencies
        - languages 
        - border countries
    */

const CountryDetails = () => {
  const { countryName } = useParams() as { countryName: string };
  let [countryDetails, setCountryDetails] = React.useState<CountryStats>();

  React.useEffect(() => {
    async function getCountryDetails() {
      const request = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
      );

      const response = await request.json();
      setCountryDetails(response[0]);
    }

    getCountryDetails();
  }, []);

  let {
    population,
    capital,
    name,
    region,
    subregion,
    tld,
    currencies,
    languages,
    flags,
  } = countryDetails || {};

  const nativeName = name?.nativeName
    ? (Object.values(name.nativeName)[0] as NativeName).common
    : "Unknown";
  currencies = currencies
    ? (Object.values(currencies)[0] as Currency).name
    : "Unknown";
  languages = languages ? Object.values(languages).join(", ") : "Unknown";

  return (
    <main className="details-page">
      <Link to="/" className="details-page__back-button ">
        Back
      </Link>
      <section className="details-section">

        <img
          className="details-page__country-flag"
          src={flags?.png}
          alt={flags?.alt}
        />
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

        {/* make borders component */}
      </section>
    </main>
  );
};

export default CountryDetails;
