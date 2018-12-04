import React from 'react'
import Header from './Header'
import RandomCharacters from './RandomCharacters'
import ItemList from './Item-List'
import FilmsDetails from './Films'


const App = () => {
    return (
        <div>
            <Header />
            <RandomCharacters />

            <div>
                <div>
                    <ItemList />
                </div>
                <div>
                    <FilmsDetails />
                </div>
            </div>
        </div>

    )
}

export default App;