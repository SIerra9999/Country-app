import React from 'react'
import CountryCard from '../CountryCard'
import FilteringTools from '../FilteringTools'

const CountriesDashboard = () => {

  const [countries,setCountries] = React.useState<Array<any>>([])

  React.useEffect(()=>{
    async function fetchCountries (){
      let request = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
      let response = await request.json()
      setCountries(response)
    }
    
    fetchCountries()
  },[]) 

  let mappedCountries = countries.map((country)=>{
    
    return   <CountryCard
    key={country.name.common}
    capital={country.capital[0]} 
    countryName={country.name.common} 
    region={country.region}
    population={country.population}
    flagUrl={country.flags.png}/>
    })

  return (<>

      <main className='dashboard'>

      <FilteringTools/>

      <section className="dashboard__cards-section">      {mappedCountries}</section>

    </main>
  </>

  )
}

export default CountriesDashboard