import React from 'react';
import { Nav } from '../components/nav/Nav';
import { Home } from '../components/home/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => {
    return (
        <main className='App'>
            <Router>
                <Nav />
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        </main>
    )
}