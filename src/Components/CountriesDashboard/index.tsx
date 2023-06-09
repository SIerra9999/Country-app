import React from 'react'

const CountriesDashboard = () => {
  React.useEffect(()=>{
    async function fetchCountries (){
      let request = await fetch("https://restcountries.com/v3.1/name/algeria")
      let response = await request.json()
      console.log(response[0]);
    }

    fetchCountries()
  },[]) 
    // fetch the countries 
    // create react router 
    // use intersection observer to show a reasonable amount of countries
  return (
    <div>CountriesDashboard</div>
  )
}

export default CountriesDashboard