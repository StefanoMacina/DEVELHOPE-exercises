/**
 * START: Follow the instructions below.
 */

// Add a type annotation to this variable that describes the object it contains.
type Country = {
    code : string,
    population : number
}

const countryPopulation : Country = {
    code: "NZ",
    population: 5_135_300,
};

// Define a `Country` interface that describes the object in this variable.
// Add the `Country` type as a type annotation for this variable.

interface Country2 {
    name:string,
    code : string,
    population : number
}

const countryData : Country2 = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

// Define a `Currency` type alias that describes the object in this variable.
// Add the `Currency` type as a type annotation for this variable.

type Currency = {
    name : string,
    code  : string,
    symbol : string
}

const currencyData = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};

// ----

export {};
