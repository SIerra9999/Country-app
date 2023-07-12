import { CountryName, Borders,CountryStats } from "../types/UI"

interface BorderIndex {
    name: CountryName
}


export async function fetchCountriesByBorders(countryCodes: Borders) {

    const requestLink: string = `https://restcountries.com/v3.1/alpha?codes=${countryCodes.join(",")}&fields=name`

    const request = await fetch(requestLink)

    if (request.ok) {
        const response: BorderIndex[] = await request.json()
        return response.map(border =>
            border.name.common)
    }

    return null

}

export async function fetchAllCountries() :Promise<CountryStats[]> {
    let request = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
    
    if (request.ok) {
        let response = await request.json()

        return response
    }
    
    return []

}