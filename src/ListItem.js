import React, { Component } from 'react'
import request from 'superagent';

export default class ListItem extends Component {
    
    async componentDidMount(){
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get('search') || '';
        this.setState({ searchQuery: query });

        const response = await request.get(`https://git.heroku.com/still-plateau-72252.git/herbs`);
        //get my heroku webaddress input to the response. 

        this.setState({ herbs: response.body })
    }
        
    render() {
        return (
                <ul>
                this.state.herbs.map((herb) => {

                    <div>
                        <h3>Name: {this.props.herb.name}</h3>
                        <p>Kingdom: {this.props.herb.kingdom}</p>
                        <p>Species: {this.props.herb.type_species}</p>
                        <p>Cool Factor: {this.props.herb.cool_factor}</p>
                        <p>Poisonous: {String(this.props.herb.poisonous)}</p>
                    </div> })
                    }
                </ul>
        )
    }
}