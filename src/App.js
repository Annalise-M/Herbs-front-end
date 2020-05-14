import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Herbs from './Herbs.js';
import About from './AboutPage.js';
import HerbsDetailPage from './HerbsDetailPage.js';
import AdminPage from './AdminPage.js';


//add new herb link / search form component

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
                            path='/HerbsDetailPage/:herbs'
                            render={(routerProps) => <HerbsDetailPage {...routerProps} />} 
                        />
                        <Route 
                            path='/Admin'
                            render={(routerProps) => <AdminPage {...routerProps} />} 
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