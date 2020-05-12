import React, { Component } from 'react';
import ListItem from './ListItem.js';

export default class List extends Component {
    render() {
        return (
            <div>
                {this.props.item.map(item => {
                    return <ListItem herb={item} />
                })}
            </div>
        )
    }
}
