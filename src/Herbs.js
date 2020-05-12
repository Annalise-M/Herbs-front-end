import React, { Component } from 'react';
import request from 'superagent';
import List from './List.js';

export default class Herbs extends Component {
    state = {
        loading: false,
        herbs: []
    }

    async componentDidMount() {
        // const data = await request.get('https://still-plateau-72252.herokuapp.com/herbs');
        const data = await request.get('http://localhost:5555/herbs');
        this.setState({herbs: data.body, loading: false})
    }
    render() {
        return (
            <div>
                {
                    this.state.loading ?
                    <h2>Loading</h2>
                    :
                    <List data={this.state.herbs}/>
                }
            </div>
        )
    }
}
