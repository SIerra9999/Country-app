import { CountryName,Borders  } from "../types/UI"

interface BorderIndex {
    name : CountryName
}


export async function fetchCountriesByBorders (countryCodes : Borders ){
    
    const requestLink :string = `https://restcountries.com/v3.1/alpha?codes=${countryCodes.join(",")}&fields=name`

        const request = await fetch(requestLink)

        if(request.ok){
            const response : BorderIndex[] = await  request.json()
            return response.map( border =>
                border.name.common)
        }

        return null

}