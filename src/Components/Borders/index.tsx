import React from 'react'
import Badge from '../Badge'
import { Borders} from '../../types/UI'
import { fetchCountriesByBorders } from '../../Utils/Requests'

interface BordersBarProps {
    borders : Borders
}


const BordersBar = ({borders} : BordersBarProps) => {
  const [countryNames, setCountryNames] = React.useState<string[] | null>(null)
  
  React.useEffect(()=>{
    fetchCountriesByBorders(borders).then(result =>{
      setCountryNames(result)
    })
  },[borders])

  const mappedCountries = countryNames? 
  countryNames.map(country=>(<Badge text={country}></Badge>)) : "no bordering countries"
  
  return (
    <nav className='borders'>
        <h3 className='borders__heading'>Border Countries: </h3>{mappedCountries}
    </nav>
  )
}

export default BordersBar