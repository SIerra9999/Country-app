import { CountryStats, Regions } from "../types/UI"

function sortByName(countryArr: CountryStats[]) {
    return countryArr.sort((a, b) => {
        if (a.name.common < b.name.common) {
            return -1
        }
        if (a.name.common > b.name.common) {
            return 1
        }

        return 0
    })
}

function sortByMatch(countryArr: CountryStats[], query: string) {

    if (query.length === 0) {
        return sortByName(countryArr)
    }

    let matched = countryArr.filter(country => country.name.common.toUpperCase().startsWith(query.toUpperCase()))
    let unmatched = countryArr.filter(country => !country.name.common.toUpperCase().startsWith(query.toUpperCase()))
    let all = [...matched, ...unmatched]
    return all
}

function filterByRegion(countryArr: CountryStats[], selectedRegion: Regions | "All") {
    return sortByName(countryArr.filter(country => {
        if (selectedRegion === "All") {
            return countryArr
        }
        return country.region === selectedRegion
    }))
}


export { sortByName, filterByRegion, sortByMatch }