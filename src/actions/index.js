import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

const API_URL = 'http://localhost:3090';

const authError = error => {
    return {
        type: AUTH_ERROR,
        payload: error
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
