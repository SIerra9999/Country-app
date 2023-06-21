import React from 'react'

type possibleThemes = "light"|"dark"

const [theme,setTheme] = React.useState<possibleThemes>("light")

const ThemeContext = React.createContext<possibleThemes>(theme)

export { ThemeContext, setTheme} 


