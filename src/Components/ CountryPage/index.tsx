import React from "react";
import { useParams } from "react-router-dom";
import { CountryStats} from "../../types/UI";
import { Link } from "react-router-dom";
import CountryDetails from "../CountryDetails";


const CountryPage = () => {
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

  let { alt, png} = countryDetails?.flags || {};



  return (
    <main className="details-page">
      <Link to="/" className="details-page__back-button ">
        Back
      </Link>
      <section className="details-section">

        <img
          className="details-page__country-flag"
          src={png}
          alt={alt}
        />
        <CountryDetails {...countryDetails as CountryStats} />

      </section>

    </main>
  );
};

export default CountryPage;
