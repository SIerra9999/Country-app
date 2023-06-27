import React from 'react'
import {useParams} from "react-router-dom"
import {CountryStats} from "../../types/UI"
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

    console.log(countryDetails);
    //const {population} = {...countryDetails as any} as CountryStats
    const {population} = countryDetails || {}


  return (
    <div>
      <h1>{countryDetails?.name.common}</h1>
      <h1>{population}</h1>
    </div>
  )
}

export default CountryDetails