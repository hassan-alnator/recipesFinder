import React, { Component } from 'react';
import Recipe from './Recipe';
import Loading from './Loading';
import Notification from './Notification';
export default class RecipesGrid extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { isLoading, recipes, notifications } = this.props;

        // if isLoading Display the loading Component
        if (isLoading) return <Loading />;

        // if there is a notification display it
        if (notifications) return <Notification message={notifications} />

        return (
            <div>
                {
                    recipes.map((recipe, index) => {
                        return <Recipe key={index} {...recipe} />
                    })
                }
            </div>
        )
    }
}

