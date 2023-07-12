import React from "react"
import {fetchAllCountries} from '../../Utils/Requests'

interface CountryContextData{
    countries : any
    setCountries : React.Dispatch<React.SetStateAction<any>>
}

const CountryContext = React.createContext<CountryContextData| undefined>(undefined)

export const CountryContextProvider = ({children} : React.PropsWithChildren) => {
    const [countries,setCountries] = React.useState<CountryContextData["countries"]>()
    React.useEffect(()=>{
        fetchAllCountries().then(result=> {setCountries(result)})

    },[])
    return <CountryContext.Provider  value={{countries,setCountries}}>{children}</CountryContext.Provider>
}


export const useCountryContext = () =>{

    return React.useContext(CountryContext) as CountryContextData
}