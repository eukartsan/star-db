export default class SwapiService {

    apiurl = 'https://swapi.co/api'

    async getResource(url) {
        const res = await fetch(`${this.apiurl}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `,received ${res.status}`)
        }

        return await res.json()
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this.transformChapter);
    }

    async getPeopleID(id) {
        const chapter = await this.getResource(`/people/${id}/`);
        return this.transformChapter(chapter);
    }

    async getAllFilms() {
        const res = await this.getResource(`/films/`);
        return res.results.map(this.transformFilms);
    }

    async getFilmID(id) {
        const film = await this.getResource(`/films/${id}/`);
        return this.transformFilms(film);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this.transformStarship);
    }

    async getStarshipID(id) {
        const starship = await this.getResource(`/starships/${id}/`);
        return this.transformStarship(starship);
    }

    extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
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