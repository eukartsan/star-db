import React, { Component } from 'react';
import SwapiService from '../services/swapi-service'
import Spinner from './spinner'
import ErrorBlog from './errorblog'

import './style.css';

export default class RandomCharacters extends Component {

    swapiService = new SwapiService()

    state = {
        chapters: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePeople()
        this.interval = setInterval(this.updatePeople, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onChapterLoaded = (chapters) => {
        this.setState({
            chapters,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePeople = () => {
        const id = Math.floor(Math.random() * 10) + 4
        //const id = 3
        this.swapiService
            .getPeopleID(id)
            .then(this.onChapterLoaded)
            .catch(this.onError)
    }

    render() {

        const { chapters, loading, error } = this.state

        const hasData = !(loading || error)

        const errorMessage = error ? <ErrorBlog /> : null
        const spinner = loading ? <Spinner /> : null
        const content = hasData ? <ChapterView chapters={chapters} /> : null

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const ChapterView = ({ chapters }) => {

    const { id, name, gender, birth_year, hair_color, height, mass } = chapters
    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birth_year}</span>
                    </li>
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
        </React.Fragment>
    )
}