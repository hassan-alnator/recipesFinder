import { LOADING_OFF, LOADING_ON } from '../constants';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case LOADING_OFF:
            return false;
        case LOADING_ON:
            return true;
        default:
            return state;
    }
}

export default loadingReducer;
