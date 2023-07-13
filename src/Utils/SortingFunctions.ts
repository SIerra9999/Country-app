import { CountryStats } from "../types/UI"


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



export { sortByName }