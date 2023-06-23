import React from 'react'

import { useTheme } from '../ThemeContext'


const TopBar = () => {

  const {theme, setTheme} = useTheme()
  return (
    <header className={`top-bar top-bar--${theme}`}>
        <h1 className='top-bar__welcome-message'>where in the word?</h1>
        <button className='top-bar__theme-switcher' onClick={()=>{
          
          if(theme ==="light"){
            setTheme("dark")
          }else {
            setTheme("light")
          }

          console.log(theme)
        }}> {`(Icon)`}Dark Mode</button>
    </header>
  )
}

export default TopBar