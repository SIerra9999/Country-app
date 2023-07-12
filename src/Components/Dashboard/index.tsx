import React from 'react'
import CountryCard from '../CountryCard'
import FilteringTools from '../FilteringTools'
import {useCountryContext} from '../CountriesContext'

const CountriesDashboard = () => {

  const {countries} = useCountryContext()

  //@ts-ignore give this a proper type 
  let mappedCountries = countries? countries.map((country)=>{
    
    return   <CountryCard
    key={country.name.common}
    capital={country.capital[0]} 
    countryName={country.name.common} 
    region={country.region}
    population={country.population}
    flagUrl={country.flags.png}/>
    }) : "loading ..."

  return (<>

      <main className='dashboard'>

      <FilteringTools/>
      
      <section className="dashboard__cards-section">
        {mappedCountries}
      </section>

    </main>
  </>

  )
}

export default CountriesDashboard