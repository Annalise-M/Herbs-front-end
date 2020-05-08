import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Herbs from './Herbs.js';
import About from './AboutPage.js';
// import HerbsDetailPage from './HerbsDetailPage.js';

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
                        {/* <Route 
                            path='/Herbs/:Herbs'
                            render={(routerProps) => <HerbsDetail {...routerProps} />} 
                        /> */}
                        <Route 
                            path='/about'
                            render={(routerProps) => <About {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}