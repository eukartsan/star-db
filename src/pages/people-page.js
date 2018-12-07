import React, { Component } from 'react'
import ItemDetails from '../components/ItemDetails'
import ItemList from '../components/Item-List'
import Row from '../components/Row';

export default class PeoplePage extends Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    };

    render() {
        const { selectedItem } = this.state

        return (
            <Row
                left={<ItemList onItemSelected={this.onItemSelected} />}
                right={<ItemDetails itemId={selectedItem} />} />
        )
    }

}