import React from 'react'
import Badge from '../Badge'
import { Borders} from '../../types/UI'
import { fetchCountriesByBorders } from '../../Utils/Requests'
import { Link } from 'react-router-dom'

interface BordersBarProps {
    borders : Borders
}


const BordersBar = ({borders} : BordersBarProps) => {
  const [countryNames, setCountryNames] = React.useState<string[]>([""])
  
  React.useEffect(()=>{
    fetchCountriesByBorders(borders).then(result =>{
      setCountryNames(result)
    })

  },[])

  console.log(countryNames);
  
  return (
    <nav className='borders'>
        <h3 className='borders__heading'>Border Countries: </h3>{countryNames.map(country=>(<Badge text={country}></Badge>))}
    </nav>
  )
}

export default BordersBar