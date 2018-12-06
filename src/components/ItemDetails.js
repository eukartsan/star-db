import React, { Component } from 'react';
import './style.css'
import SwapiService from '../services/swapi-service'
import Spinner from './spinner'
import ErrorButton from './ErrorButton'

export default class ItemDetails extends Component {

    swapiService = new SwapiService()

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }
    }

    updateItem() {
        const { itemId } = this.props
        if (!itemId) {
            return
        }

        this.swapiService
            .getStarshipID(itemId)
            .then((item) => {
                this.setState({ item })
            })
    }

    render() {

        const {item} = this.state

        if (!item) {
            return <span>Select a person from a list</span>
        }

        const { id, name, model, manufacturer, costInCredits, length, crew, passengers, starship_class } = item

        return (
            <div className="item-details card">
                <img className="item-image"
                     src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                     alt="starship"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Model</span>
                            <span>{model}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Manufacturer</span>
                            <span>{manufacturer}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Cost In Credits</span>
                            <span>{costInCredits}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Length</span>
                            <span>{length}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Crew</span>
                            <span>{crew}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Passengers</span>
                            <span>{passengers}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Starship class</span>
                            <span>{starship_class}</span>
                        </li>
                    </ul>
                </div>
                <ErrorButton />
            </div>
        )
    }
}