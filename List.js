import React, { Component } from 'react';
import ListItem from './ListItem.js';

export default class List extends Component {
    render() {
        return (
            <div>
                console.log('hi there!');
                {this.props.data.map(item => {
                    return <ListItem Herb={item} />
                })}
            </div>
        )
    }
}
