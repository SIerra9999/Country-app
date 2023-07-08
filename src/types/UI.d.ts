export type NativeName = {
    official : string,
    common : string
}

export type Currency = {
    name : string, 
    symbol : string
}

export type CountryName = {
        common : string,
        official : string,
        nativeName : Object<NativeName>
}

export type Borders = string[]

export type CountryStats = {
    name : CountryName
    capital : string[]
    languages : Object<string>
    borders : Borders
    currencies : Object<Currency>
    population : number 
    region : string
    subregion : string
    tld : string[]
    flags : {
        png : string
        svg : string
        alt : string
    }
}