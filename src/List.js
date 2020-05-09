import React, { Component } from 'react';
import ListItem from './ListItem.js';

export default class List extends Component {
    render() {
        return (
            <div>
                {this.props.data.map(item => {
                    return <ListItem herb={item} />
                })}
            </div>
        )
    }
}
