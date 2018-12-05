import React, { Component } from 'react'
import Header from './Header'
import RandomCharacters from './RandomCharacters'
import ItemList from './Item-List'
import ItemDetails from './ItemDetails'

export default class App extends Component {

    state = {
        showRandomChapter: true,
        selectedShip: 5
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

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onChapterSelected} />
                    </div>
                    <div className="col-md-6">
                        <ItemDetails itemId={this.state.selectedShip} />
                    </div>
                </div>
            </div>

        )
    }
}