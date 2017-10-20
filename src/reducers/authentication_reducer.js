import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    RESET_AUTH_ERROR
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case AUTH_USER: {
            return { ...state, authenticated: true, error: '' };
        }
        case UNAUTH_USER: {
            return { ...state, authenticated: false, error: '' };
        }
        case AUTH_ERROR: {
            return { ...state, error: action.payload };
        }
        case RESET_AUTH_ERROR: {
            return { ...state, error: '' };
        }
        default: {
            return state;
        }
    }
};
