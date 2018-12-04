
export default class SwapiService {

    apiurl = 'https://swapi.co/api'

    async getResource(url) {
        const res = await fetch(`${this.apiurl}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `,received ${res.status}`)
        }

        return await res.json()
    }

    async getAllFilms(){
        const res = await this.getResource(`/films/`)
        return res.results
    }

    getFilmID(id){
        return this.getResource(`/films/${id}/`)
    }

    getPlanet(id){
        return this.getResource(`/planets/${id}`)
    }

    async getAllVehicles(){
        const res = await this.getResource(`/vehicles/`)
        return res.results
    }

    getVehiclesID(id){
        return this.getResource(`/vehicles/${id}`)
    }

    async getAllSpecies(){
        const res = await this.getResource(`/species/`)
        return res.results
    }

    getSpeciesID(id){
        return this.getResource(`/species/${id}`)
    }

    async getPeopleID(id){
        const chapters = await this.getResource(`/people/${id}`)
        return this.transformChapters(chapters)
    }

    extractId(item) {
        const idReg = /\/([0-9]*)\/$/
        return item.url.match(idReg)[1]
    }

    transformChapters(chapters){
        return{
            id: this.extractId(chapters),
            name: chapters.name,
            gender: chapters.gender,
            birth_year: chapters.birth_year,
            hair_color: chapters.hair_color,
            height: chapters.height,
            mass: chapters.mass
        }
    }
}


const swapi = new SwapiService()

// swapi.getAllFilms().then((films) => {
//     films.forEach((p) => {
//         console.log(p.title)
//     })
// })

// swapi.getFilmID(2).then((p) => {
//         console.log(p.title)
// })
