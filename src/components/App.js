import React, { Component } from 'react';
import { Route } from 'react-router';
import { Navbar } from 'react-materialize'
import RecipesContainer from '../containers/RecipesContainer';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar brand='Recipes Finder' />
                <div className="container">
                    <Route exact path="/" component={RecipesContainer} />
                </div>
            </div>
        )
    }

}