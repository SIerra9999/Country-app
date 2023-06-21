import React from 'react'

import { ThemeContext,setTheme } from '../ThemeContext'


const TopBar = () => {

  const currentTheme = React.useContext(ThemeContext)

  return (
    <header className='top-bar'>
        <h1 className='top-bar__welcome-message'>where in the word?</h1>
        <button className='top-bar__theme-switcher' onClick={()=>{
          if(currentTheme=== "dark"){
            setTheme("light")
          }
          setTheme("dark")
        }}> {`(Icon)`}Dark Mode</button>
    </header>
  )
}

export default TopBar