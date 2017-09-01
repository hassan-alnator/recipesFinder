import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipesReducer from './recipesReducer';
import loadingReducer from './loadingReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
    recipes: recipesReducer,
    isLoading: loadingReducer,
    notifications: notificationReducer,
    routing: routerReducer
});

export default rootReducer;
