import { CountryName,Borders } from "../types/UI"


export async function fetchCountriesByBorders (countryCodes : Borders ){
    
    const requestLink :string = `https://restcountries.com/v3.1/alpha?codes=${countryCodes.join(",")}&fields=name`

        const request = await fetch(requestLink)
        const response : CountryName[] = await request.json()

        return response.map((border)=> border.name.common )

}