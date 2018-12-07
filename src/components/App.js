import React, { Component } from 'react'
import Header from './Header'
import RandomCharacters from './RandomCharacters'
import ItemDetails, { Record } from './ItemDetails'
import SwapiService from '../services/swapi-service'
import StarshipPage from './Starship-Page'
import Row from './Row'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ItemList from '../components/Item-List'

export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        showRandomChapter: true
    }

    render() {

        const { getPeopleID, getPlanetsID, getChapterImage, getStarshipImage } = this.swapiService

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPeopleID}
                getImage={getChapterImage}>

                <Record field="gender" label="Gender" />

            </ItemDetails>
        )

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getPlanetsID}
                getImage={getStarshipImage}
            >
            </ItemDetails>
        )

        return (
            <Router>
                <div>
                    <Header />
                    <RandomCharacters />

                    <Route path="/people" component={PeoplePage} />
                    <Route path="/planets" component={PlanetsPage} />
                    <Route path="/starships" component={StarshipsPage} />

                    {/*<Row*/}
                    {/*left={personDetails}*/}
                    {/*right={starshipDetails} />*/}

                    {/*<div className="row mb2">*/}
                    {/*<div className="col-md-6">*/}
                    {/*<ItemList*/}
                    {/*onItemSelected={this.onChapterSelected}*/}
                    {/*getData={this.swapiService.getAllPeople}*/}
                    {/*renderItem={(item) => item.name}*/}
                    {/*/>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6">*/}
                    {/*<ItemDetails itemId={this.state.selectedShip} />*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    {/*<div className="row mb2">*/}
                    {/*<div className="col-md-6">*/}
                    {/*<ItemList*/}
                    {/*onItemSelected={this.onChapterSelected}*/}
                    {/*getData={this.swapiService.getAllVehicles}*/}
                    {/*renderItem={(item) => item.name}/>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6">*/}
                    {/*<ItemDetails personId={this.state.selectedShip} />*/}
                    {/*</div>*/}
                    {/*</div>*/}

                </div>
            </Router>
        )
    }
}