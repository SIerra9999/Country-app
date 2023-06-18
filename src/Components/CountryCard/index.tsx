import React from 'react'

interface BasicCountryDetails {
    countryName : string
    population : string
    region : string
    capital : string
    flagUrl : string
}

const index : React.FC<BasicCountryDetails> = ({
    countryName,
    population,
    region,
    capital,
    flagUrl} )  => {
  
    return (
    <div className='country-card'>
        <img className='country-card__country-flag' src={flagUrl} alt={`${countryName}'s flag`} />
   
        <div className="country-card__country-details">
        <h2>{countryName}</h2>
        <h4 className='country-card__country-stat'>Population :  <span className='country-card__country-stat__dim-text'>{population}</span> </h4>
        <h4 className='country-card__country-stat'>Region : <span className='country-card__country-stat__dim-text'>{region}</span></h4>
        <h4 className='country-card__country-stat'>Capital : <span className='country-card__country-stat__dim-text'>{capital}</span></h4>
        </div>

    </div>
  )
}

export default index