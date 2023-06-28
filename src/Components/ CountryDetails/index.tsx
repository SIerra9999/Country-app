import React from 'react'
import {useParams} from "react-router-dom"
import {CountryStats,Currency,NativeName} from "../../types/UI"
import { Link } from 'react-router-dom'
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


  const {countryName} = useParams() as {countryName : string}
  let [countryDetails,setCountryDetails] = React.useState<CountryStats>()

  React.useEffect(()=>{
    async function getCountryDetails() {

      const request = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders`)


      const response = await request.json()
      setCountryDetails(response[0])
    }

    getCountryDetails()
  },[])
    let {
      population,
      capital,
      name,
      region,
      subregion,
      tld,
      currencies,
      languages} = countryDetails || {}

    const nativeName = name?.nativeName ? (Object.values(name.nativeName)[0] as NativeName).common : "Unknown"
    currencies = currencies ? (Object.values(currencies)[0] as Currency).name : "Unknown"
    languages = languages? Object.values(languages).join(", ") : "Unknown"
    console.log(languages);
    

  return (
    <div className='details-page'>

      <Link to="/" className='details-page__back-button'> Back</Link>
      <div className="details-page__country-details">
        <h1 className='details-page__country-name'>{name?.common}</h1>
          <h3 className="country-details__country-stat">
          Native Name: {nativeName}</h3> 
          <h3 className="country-details__country-stat">Population: {population}</h3>
          <h3 className="country-details__country-stat">Region: {region}</h3>
          <h3 className="country-details__country-stat">Sub Region: {subregion}</h3>
          <h3 className="country-details__country-stat">Capital: {capital ? capital[0] : "Unknown" }</h3>
          <h3 className="country-details__country-stat">Top Level Domain: {tld? tld[0] : "Unknown"}</h3>
          <h3 className="country-details__country-stat">Currency: {currencies}</h3>
          <h3 className="country-details__country-stat">Languages: {languages}</h3>
      </div>
    </div>
  )
}

export default CountryDetails