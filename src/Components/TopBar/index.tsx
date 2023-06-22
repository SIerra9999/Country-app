import React from 'react'

import { useTheme } from '../ThemeContext'


const TopBar = () => {

  const theme = useTheme()
  console.log(theme)
  return (
    <header className='top-bar'>
        <h1 className='top-bar__welcome-message'>where in the word?</h1>
        <button className='top-bar__theme-switcher' onClick={()=>{
          //@ts-ignore
          theme.setTheme("Dark")

          console.log(theme)
        }}> {`(Icon)`}Dark Mode</button>
    </header>
  )
}

export default TopBar