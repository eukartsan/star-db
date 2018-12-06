import React, {Component} from 'react'
import ItemList from './Item-List'
import ItemDetails from './ItemDetails'
import ErrorBlog from './errorblog'
import SwapiService from '../services/swapi-service'

export default class StarshipPage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedShip: 5,
        hasError: false
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    onChapterSelected = (id) => {
        this.setState({
            selectedShip: id
        })
    }

    render(){

        if(this.state.hasError){
            return <ErrorBlog />
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onChapterSelected}
                        getData={this.swapiService.getAllStarships}
                    />
                </div>
                <div className="col-md-6">
                    <ItemDetails itemId={this.state.selectedShip} />
                </div>
            </div>
        )
    }
}