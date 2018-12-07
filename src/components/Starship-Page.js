import React, { Component } from 'react'
import ItemList from './Item-List'
import ItemDetails from './ItemDetails'
import ErrorBlog from './errorblog'
import SwapiService from '../services/swapi-service'
import Row from './Row'


class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorBlog />
        }
        return this.props.children
    }
}

export default class StarshipPage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedShip: 5
    }


    onChapterSelected = (id) => {
        this.setState({
            selectedShip: id
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorBlog />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onChapterSelected}
                getData={this.swapiService.getAllStarships}>
                {(item) => (`${item.model} (${item.length}, ${item.passengers})`)}
            </ItemList>
        )

        const personDetals = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedShip} />
            </ErrorBoundry>
        )

        return (
            <Row
                left={itemList}
                right={personDetals} />
        )
    }
}