import React from 'react'
import {useParams} from "react-router-dom"

const CountryDetails = () => {

    const {countryName} = useParams() as {countryName : string}


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

  return (
    <div>CountryDetails of {countryName}</div>
  )
}

export default CountryDetails