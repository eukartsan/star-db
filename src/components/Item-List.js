import React, { Component } from 'react'
import Spinner from './spinner'
import './style.css'
import SwapiService from "../services/swapi-service"

export default class ItemList extends Component {

    swapiService = new SwapiService()

    state = {
        starshipList: null
    }

    componentDidMount() {
        this.swapiService
            .getAllStarships()
            .then((starshipList) => {
                this.setState({
                    starshipList
                })
            })
    }

    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }

    render() {

        const { starshipList } = this.state

        if (!starshipList) {
            return <Spinner />
        }

        const items = this.renderItems(starshipList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}