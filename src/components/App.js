import React, { Component } from 'react'
import Header from './Header'
import RandomCharacters from './RandomCharacters'
import ItemList from './Item-List'
import FilmsDetails from './Films'

export default class App extends Component {

    state = {
        showRandomChapter: true,
        selectedShip: null
    }

    toggleRandomChapter = () => {
        this.setState((state) => {
            return {
                showRandomChapter: !state.showRandomChapter
            }
        })
    }

    onChapterSelected = (id) => {
        this.setState({
            selectedShip: id
        })
    }

    render() {
        const chapter = this.state.showRandomChapter ? <RandomCharacters /> : null

        return (
            <div>
                <Header />
                {chapter}

                <button
                onClick={this.toggleRandomChapter}>
                    Toggle Random Chapter
                </button>

                <div>
                    <div>
                        <ItemList onItemSelected={this.onChapterSelected}/>
                    </div>
                    <div>
                        <FilmsDetails personId={this.state.selectedShip}/>
                    </div>
                </div>
            </div>

        )
    }
}