import { CountryStats, Regions  } from "../types/UI"
import { fetchAllCountries } from "./Requests"


function sortByName(countryArr: CountryStats[]) {
    return countryArr.sort((a,b) => {
        if (a.name.common < b.name.common) {
            return -1
        }
        if (a.name.common > b.name.common){
            return 1 
        }

        return 0
    })
}

function filterByRegion(countryArr : CountryStats[], selectedRegion : Regions | "All" ) {
    return countryArr.filter(country => {
        if (selectedRegion === "All") {
            return countryArr
        }
        return country.region === selectedRegion
    } )
}


export { sortByName, filterByRegion }