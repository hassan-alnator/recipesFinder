import { GET_RECIPE_BY_KEYWORD } from '../constants';

const recipesReducer = (state = [], action) => {

    switch (action.type) {
        case GET_RECIPE_BY_KEYWORD:
            return action.recipes;
        default:
            return state;
    }
}

export default recipesReducer;
