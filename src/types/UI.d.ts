export type NativeName = {official : string,
    common : string}
export type Currency = {name : string, symbol : string}

export type CountryStats = {
    name : {
        common : string,
        official : string,
        nativeName : Object<NativeName>
    },
    capital : string[],
    languages : Object<string>,
    borders : string[],
    currencies : Object<Currency>,
    population : number, 
    region : string,
    subregion : string,
    tld : string[]
}