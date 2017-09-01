
import { NO_RECIPES_FOUND, RESET_NOTIFICATIONS } from '../constants';

const notificationReducer = (state = false, action) => {

    switch (action.type) {
        case NO_RECIPES_FOUND:
            return action.message;
        case RESET_NOTIFICATIONS:
            return false;
        default:
            return state;
    }
}

export default notificationReducer;
