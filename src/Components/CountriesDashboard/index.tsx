import React from 'react'
import CountryCard from '../CountryCard'

const CountriesDashboard = () => {

  const [countries,setCountries] = React.useState<Array<any>>([])

  React.useEffect(()=>{
    async function fetchCountries (){
      let request = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
      let response = await request.json()
      setCountries(response)
    }
    
    fetchCountries()
    console.log(countries);
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

    // use intersection observer to show a reasonable amount of countries
  return (
    <div className='dashboard'>
      {mappedCountries}
    </div>
  )
}

export default CountriesDashboard