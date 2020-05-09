import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <div>
                <h3>Name: {this.props.herb.name}</h3>
                <p>Kingdom: {this.props.herb.kingdom}</p>
                <p>Species: {this.props.herb.type_species}</p>
                <p>Cool Factor: {this.props.herb.cool_factor}</p>
                <p>Poisonous: {String(this.props.herb.poisonous)}</p>
            </div>
        )
    }
}
