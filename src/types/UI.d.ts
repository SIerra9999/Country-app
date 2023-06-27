export type CountryStats = {
    name : {
        common : string,
        official : string,
        nativeName : {official : string,
        common : string}[]
    },
    capital : string[],
    languages : string[],
    borders : string[],
    currencies : {name : string, symbol : string}[],
    population : number, 
    region : string,
    subregion : string,
    tld : string[]
}