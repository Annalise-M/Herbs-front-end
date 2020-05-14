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
                {/* do I need to add the following? 
                <script type="" src="/herbs/herbsDetailPage.js"></script> 
                this.props.history.push('/')
                but as a user/auth selected herb out of all herbs...?
                */}
                </h3>
            </div>
        )
    }
}
