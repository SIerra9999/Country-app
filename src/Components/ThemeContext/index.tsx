import React from 'react'

type possibleThemes = "light"|"dark"

type contextReturn = {
    theme : possibleThemes,
    setTheme : (theme : possibleThemes)=>{}
}

const ThemeContext = React.createContext<contextReturn>({theme : "light" , setTheme : (theme :string)=>{ return theme} })

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


