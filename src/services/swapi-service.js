export default class SwapiService {

    apiurl = 'https://swapi.co/api'

    getResource = async (url) => {
        const res = await fetch(`${this.apiurl}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `,received ${res.status}`)
        }

        return await res.json()
    }

    getAllPeople = async() => {
        const res = await this.getResource(`/people/`)
        return res.results.map(this.transformChapter)
    }

    getPeopleID = async (id) => {
        const chapter = await this.getResource(`/people/${id}/`)
        return this.transformChapter(chapter)
    }

    getAllFilms = async() => {
        const res = await this.getResource(`/films/`)
        return res.results.map(this.transformFilms)
    }

    getFilmID = async(id) => {
        const film = await this.getResource(`/films/${id}/`)
        return this.transformFilms(film)
    }

    getAllStarships = async() => {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this.transformStarship)
    }

    getStarshipID = async(id) => {
        const starship = await this.getResource(`/starships/${id}/`)
        return this.transformStarship(starship)
    }

    extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

    transformFilms = (film) => {
        return {
            id: this.extractId(film),
            title: film.title,
            release_date: film.release_date,
            director: film.director,
            producer: film.producer
        };
    };

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
    };

    transformChapter = (chapter) => {
        return {
            id: this.extractId(chapter),
            name: chapter.name,
            gender: chapter.gender,
            birth_year: chapter.birth_year,
            hair_color: chapter.hair_color,
            height: chapter.height,
            mass: chapter.mass,
        }
    }
}