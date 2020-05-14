import React, { Component } from 'react'

export default class AdminPage extends Component {
    state = {
        form: {
            name: '',
            kingdom: '',
            type_species: '',
            cool_factor: 0,
            poisonous: false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleNameChange = (e) => {
        this.setState({ form: { name: e.target.value }})
    }

    handleKingdomChange = (e) => {
        this.setState({ form: { kingdom: e.target.value }})
    }

    handleTypeSpeciesChange = (e) => {
        this.setState({ form: { type_species: e.target.value }})
    }

    handleCoolFactorChange = (e) => {
        this.setState({ form: { cool_factor: e.target.value }})
    }

    handlePoisonousChange = (e) => {
        this.setState({ form: { poisonous: e.target.value }})
    }

    render() {
        console.log(this.state.form);
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <h3>Herbs</h3>
                    <label>
                        Name:
                        <input onChange={this.handleNameChange} value={this.state.form.name} name="name" />
                    </label>
                    <label>
                        Kingdom:
                        <input onChange={this.handleKingdomChange} value={this.state.form.kingdom} name="kingdom" />
                    </label>
                    <label>
                        Species:
                        <input onChange={this.handleTypeSpeciesChange} value={this.state.form.type_species} name="type_species" />
                    </label>
                    <label>
                        Cool Factor:
                        <input onChange={this.handleCoolFactorChange} value={this.state.form.cool_factor} name="cool_factor" />
                    </label>
                    <label>
                        Is it poisonous?
                        <input onChange={this.handlePoisonousChange} checked={this.state.form.poisonous === true} name="name" type="radio" value="true" />
                    </label>
                    <label>
                        Is it Not poisonous?
                        <input onChange={this.handlePoisonousChange} checked={this.state.form.poisonous === 'false'} name="name" type="radio" value="false" />
                    </label>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}
