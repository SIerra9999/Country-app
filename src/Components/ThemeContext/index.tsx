import React from 'react'

type possibleThemes = "light"|"dark"

const ThemeContext = React.createContext<possibleThemes>("light")

const ThemeContextProvider = ({children} : React.PropsWithChildren) => {

    const [theme,setTheme] = React.useState<possibleThemes>("light")
    //@ts-ignore
    return (<ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>)

}

const useTheme = () =>{
    const theme = React.useContext(ThemeContext)
    return theme
}

export { ThemeContextProvider, useTheme} 


