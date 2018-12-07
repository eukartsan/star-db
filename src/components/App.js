import React, { Component } from 'react'
import Header from './Header'
import RandomCharacters from './RandomCharacters'
import ItemList from './Item-List'
import ItemDetails from './ItemDetails'
import StarshipPage from './Starship-Page'
import SwapiService from '../services/swapi-service'
import Row from './Row'

export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        showRandomChapter: true
    }

    toggleRandomChapter = () => {
        this.setState((state) => {
            return {
                showRandomChapter: !state.showRandomChapter
            }
        })
    }


    render() {
        const chapter = this.state.showRandomChapter ? <RandomCharacters /> : null

        const personDetails = (
            <ItemDetails itemId={11} />
        )

        const starshipDetails = (
            <ItemDetails itemId={5} />
        )

        return (
            <div>
                <Header />
                {chapter}

                <button
                    onClick={this.toggleRandomChapter}>
                    Toggle Random Chapter
                </button>

                <StarshipPage />

                <Row
                    left={personDetails}
                    right={starshipDetails} />

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

        )
    }
}