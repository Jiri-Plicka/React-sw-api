
export interface BaseSWPeopleResponse {
    count: number;
    next: string;
    previous: any;
    results: BaseSWPeople[];
}

export interface BaseSWPeople {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: [];
    films: [];
    species: [];
    vehicles: [];
    starships: [];
    created: string;
    edited: string;
    url: string;
}

export interface BaseSWPlanetsResponse {
    count: number;
    next: string;
    previous: string;
    results: BaseSWPlanets[];
}

export interface BaseSWPlanets {
    name: string;
    climate: string;
    gravity: string;
    terrain: string;
    population: number;
}