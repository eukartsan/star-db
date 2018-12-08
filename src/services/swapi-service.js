export default class SwapiService {

    apiurl = 'https://swapi.co/api'

    imgurl = 'https://starwars-visualguide.com/assets/img'

    getResource = async (url) => {
        const res = await fetch(`${this.apiurl}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `,received ${res.status}`)
        }

        return await res.json()
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`)
        return res.results.map(this.transformCharacter)
    }

    getPeopleID = async (id) => {
        const character = await this.getResource(`/people/${id}/`)
        return this.transformCharacter(character)
    }

    getAllVehicles = async () => {
        const res = await this.getResource(`/vehicles/`)
        return res.results.map(this.transformVehicles)
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this.transformPlanet)
    }

    getPlanetsID = async (id) => {
        const character = await this.getResource(`/planets/${id}/`)
        return this.transformPlanet(character)
    }

    getAllFilms = async () => {
        const res = await this.getResource(`/films/`)
        return res.results.map(this.transformFilms)
    }

    getFilmID = async (id) => {
        const film = await this.getResource(`/films/${id}/`)
        return this.transformFilms(film)
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this.transformStarship)
    }

    getStarshipID = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`)
        return this.transformStarship(starship)
    }

    extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

    getCharacterImage = ({ id }) => {
        return `${this.imgurl}/characters/${id}.jpg`
    }

    getPlanetsImage = ({ id }) => {
        return `${this.imgurl}/planent/${id}.jpg`
    }

    getStarshipImage = ({ id }) => {
        return `${this.imgurl}/starships/${id}.jpg`
    }

    transformFilms = (film) => {
        return {
            id: this.extractId(film),
            title: film.title,
            release_date: film.release_date,
            director: film.director,
            producer: film.producer
        }
    }

    transformStarship = (starship) => {
        return {
            id: this.extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            starship_class: starship.starship_class
        }
    }

    transformPlanet = (planet) => {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    transformVehicles = (vehicles) => {
        return {
            id: this.extractId(vehicles),
            name: vehicles.name,
            model: vehicles.model,
            length: vehicles.length,
            crew: vehicles.crew,
            cost_in_credits: vehicles.cost_in_credits,
            passengers: vehicles.passengers,
            manufacturer: vehicles.manufacturer,
            consumables: vehicles.consumables,
        }
    }

    transformCharacter = (character) => {
        return {
            id: this.extractId(character),
            name: character.name,
            gender: character.gender,
            birth_year: character.birth_year,
            hair_color: character.hair_color,
            height: character.height,
            mass: character.mass,
        }
    }
}