import React from 'react'

import { useTheme } from '../ThemeContext'


const TopBar = () => {



  const {theme, setTheme} = useTheme()

  const switchThemeOnClick = ()=>{
          
    if(theme ==="light"){
      setTheme("dark")
    }else {
      setTheme("light")
    }
  }

  return (
    <header className={`top-bar top-bar--${theme}`}>
        <h1 className='top-bar__welcome-message'>where in the world?</h1>
        <button 
        className='top-bar__theme-switcher' 
        onClick={switchThemeOnClick}>
          <span className="top-bar__theme-switcher__icon material-symbols-outlined">
        brightness_low
        </span></button>
    </header>
  )
}

export default TopBar