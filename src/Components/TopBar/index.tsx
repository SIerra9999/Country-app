import React from 'react'

import { useTheme } from '../ThemeContext'


const TopBar = () => {

  const currentTheme = useTheme()
  console.log(currentTheme)
  return (
    <header className='top-bar'>
        <h1 className='top-bar__welcome-message'>where in the word?</h1>
        <button className='top-bar__theme-switcher' onClick={()=>{
          
          if(currentTheme.theme ==="light"){
            currentTheme.setTheme("dark")
          }else {
            currentTheme.setTheme("light")
          }

          console.log(currentTheme.theme)
        }}> {`(Icon)`}Dark Mode</button>
    </header>
  )
}

export default TopBar