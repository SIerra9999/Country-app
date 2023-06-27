import React from 'react'
import {useParams} from "react-router-dom"

    // get country by name or id (comes from arg)
    // fetch it and show details 
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
  let [countryDetails,setCountryDetails] = React.useState<any>()

  React.useEffect(()=>{
    async function getCountryDetails() {

      const request = await fetch(`https://restcountries.com/v3.1/name/belgium?fields=${countryName},population,region,subregion,capital,tld,currencies,languages,borders`)


      const response = await request.json()
      setCountryDetails(response[0])
    }

    getCountryDetails()
  },[])


  console.log(countryDetails);
  return (
    <div>
      country details
    </div>
  )
}

export default CountryDetails