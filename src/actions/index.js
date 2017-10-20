import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, RESET_AUTH_ERROR } from './types';

const API_URL = 'http://localhost:3090';

const authError = error => {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export const removeAuthError = () => {
    return dispatch => {
        dispatch({
            type: RESET_AUTH_ERROR
        });
    };
};

export const signinUser = ({ email, password }, cb) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/signin`, {
                email,
                password
            });
            localStorage.setItem('token', response.data.token);
            dispatch({ type: AUTH_USER });
            cb();
        } catch (error) {
            dispatch(authError('Bad login info'));
        }
    };
};

export const signupUser = ({ email, password }) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/signup`, {
                email,
                password
            });
            localStorage.setItem('token', response.data.token);
            dispatch({ type: AUTH_USER });
            // cb();
        } catch (error) {
            console.log(error);
            dispatch(authError('Bad registration info'));
        }
    };
};

export const signoutUser = () => {
    localStorage.removeItem('token');
    return dispatch => {
        dispatch({
            type: UNAUTH_USER
        });
    };
};
