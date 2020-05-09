import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Herbs from './Herbs.js';
import About from './AboutPage.js';
import HerbsDetailPage from './HerbsDetailPage.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path='/'
                            exact
                            render={(routerProps) => <Herbs {...routerProps} />} 
                        />
                        <Route 
                            path='/HerbsDetailPage/:Herbs'
                            render={(routerProps) => <HerbsDetailPage {...routerProps} />} 
                        />
                        <Route 
                            path='/About'
                            render={(routerProps) => <About {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}