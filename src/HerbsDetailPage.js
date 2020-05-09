import React, { Component } from 'react'
import request from 'superagent'

export default class App extends Component {
    state = { Herbs: [] }

    componentDidMount = async () => {
        const data = await request.get('localhost:3000/herbs');

        this.ListeningStateChangedEvent({ herbs: data.body })
    }
}

// export default class HerbsDetailPage extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>
//                 Here's my deatail page!
//                 </h3>
//             </div>
//         )
//     }
// }
