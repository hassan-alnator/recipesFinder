import {
    GET_RECIPE_BY_KEYWORD,
    LOADING_OFF,
    LOADING_ON,
    NO_RECIPES_FOUND,
    RESET_NOTIFICATIONS
} from '../constants';

import recipeApi from '../services/recipesApi';


export const loadingOn = () => {
    return {
        type: LOADING_ON
    }
}

export const loadingOff = () => {
    return {
        type: LOADING_OFF
    }
}

export const displayNotification = (term) => {
    return {
        type: NO_RECIPES_FOUND,
        message: `Oh Sorry , No Recipes Found For ${term}`
    }
}

export const resetNotification = () => {
    return {
        type: RESET_NOTIFICATIONS
    }
}

export const getRecipeByKeyword = search_term => {

    // using thunk we can return plain function insted of plain objects in actions
    return (dispatch) => {

        // Trigger Loading
        dispatch(loadingOn());

        // Search For Recipes using the API
        recipeApi.getRecipes(search_term).then((recipes) => {

            // If Recipes Found Dispatch the result
            if (recipes.results.length > 0) {
                dispatch({
                    type: GET_RECIPE_BY_KEYWORD,
                    recipes: recipes.results
                })
                // Else Dispatch not found
            } else {
                dispatch(displayNotification(search_term))
            }

            // Disable the loading
            dispatch(loadingOff());
        })
    }

}




