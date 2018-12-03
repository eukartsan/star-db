import React, { Component } from 'react';
import SwapiService from '../services/swapi-service'

import './style.css';

export default class RandomCharacters extends Component {

    swapiService = new SwapiService()

    state = {
        id: null,
        name: null,
        hair_color: null,
        height: null,
        mass: null
    }

    constructor(){
        super()
        this.updatePeople()
    }

    updatePeople() {
        const id = Math.floor(Math.random()*10) + 2
        this.swapiService
            .getPeopleID(id)
            .then((chapter) => {
                this.setState({
                    id,
                    name: chapter.name,
                    hair_color: chapter.hair_color,
                    height: chapter.height,
                    mass: chapter.mass
                })
            })
    }

    render() {

        const { id, name, hair_color, height, mass } = this.state

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Hair color</span>
                            <span>{hair_color}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Height</span>
                            <span>{height}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Mass</span>
                            <span>{mass}</span>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}