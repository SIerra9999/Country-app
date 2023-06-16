import React from 'react'

interface BasicCountryDetails {
    country : string
    population : string
    region : string
    capital : string
    flagUrl : string
}

const index : React.FC<BasicCountryDetails> = ({
    country,
    population,
    region,
    capital,
    flagUrl} )  => {
  
    return (
    <div className='country-card'>
        <img src={flagUrl} alt="" />
        <h2>Country: {country}</h2>
        <h4>Population : {population}</h4>
        <h4>Region : {region}</h4>
        <h4>Capital : {capital}</h4>
    </div>
  )
}

export default index