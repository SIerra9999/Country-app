import React from 'react'
import { useTheme } from '../ThemeContext'
import { Link } from 'react-router-dom'

interface BasicCountryDetails {
    countryName : string
    population : number
    region : string
    capital : string
    flagUrl : string
}

const CountryCard : React.FC<BasicCountryDetails> = ({
    countryName,
    population,
    region,
    capital,
    flagUrl} )  => {

    return (
<   Link to={`/details/${countryName}`}> 
    <div className={`country-card country-card--${useTheme().theme}`}>

        <img className='country-card__country-flag' src={flagUrl} alt={`${countryName}'s flag`} />
   
        <div className="country-card__country-details">
            <h2 className='country-card__country-name'>{countryName}</h2>
            <h5 className='country-card__country-stat'>Population :  <span     className='country-card__country-stat__dim-text'>{new Intl.NumberFormat().format (population)}</    span> </h5>
            <h5 className='country-card__country-stat'>Region : <span     className='country-card__country-stat__dim-text'>{region}</span></h5>
            <h5 className='country-card__country-stat'>Capital : <span     className='country-card__country-stat__dim-text'>{capital}</    span></h5>
        </div>

    </div>
    </Link>
  )
}

export default CountryCard