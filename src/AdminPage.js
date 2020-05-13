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

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <h3>Herbs</h3>
                    <label>
                        Name:
                        <input name="name" />
                    </label>
                    <label>
                        Kingdom:
                        <input kingdom="kingdom" />
                    </label>
                    <label>
                        Species:
                        <input type_species="type_species" />
                    </label>
                    <label>
                        Cool Factor:
                        <input cool_factor="cool_factor" />
                    </label>
                    <label>
                        Poisonous:
                        <input poisonous="poisonous" />
                    </label>
                </form>
                
            </div>
        )
    }
}
