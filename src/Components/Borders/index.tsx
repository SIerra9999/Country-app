import React from 'react'
import Badge from '../Badge'
import { Borders} from '../../types/UI'

interface BordersBarProps {
    borders : Borders
}


const BordersBar = ({borders} : BordersBarProps) => {
  return (
    <div>
        {borders.map(country=>(<Badge>{country}</Badge>))}
    </div>
  )
}

export default BordersBar