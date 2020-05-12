import React, { Component } from 'react'
import request from 'superagent'

export default class App extends Component {
    state = { Herbs: [] }

    componentDidMount = async () => {
        const data = await request.get('https://git.heroku.com/still-plateau-72252.git:3000/herbs');

        this.ListeningStateChangedEvent({ herbs: data.body })
    
    }
    render() {
        return (
            <div>
                <h3>
                Here's my detail page!
                </h3>
            </div>
        )
    }
}
