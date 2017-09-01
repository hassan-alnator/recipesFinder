import React, { Component } from 'react'
import RecipesGrid from './RecipesGrid'
import RecipesSearchBox from './RecipesSearchBox'

export default class RecipesBook extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { getRecipeByKeyword, recipes, notifications, isLoading, resetNotification } = this.props;
        return (
            <div className="recipes-book-container">
                <RecipesSearchBox search={getRecipeByKeyword} resetNotification={resetNotification} />
                <RecipesGrid recipes={recipes} isLoading={isLoading} notifications={notifications} />
            </div>
        )
    }
}