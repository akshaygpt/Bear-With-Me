import React, {Component} from 'react';
import {HashRouter as Router, Route} from "react-router-dom";

import HomePage from './containers/HomePage';
import FavoritesPage from './containers/FavoritesPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route
                        exact
                        path="/"
                        component={HomePage}
                    />
                    <Route
                        path="/favorites"
                        component={FavoritesPage}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
