
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

    getPeopleID(id){
        return this.getResource(`/people/${id}`)
    }
}


const swapi = new SwapiService()

swapi.getAllFilms().then((films) => {
    films.forEach((p) => {
        console.log(p.title)
    })
})

// swapi.getFilmID(2).then((p) => {
//         console.log(p.title)
// })
