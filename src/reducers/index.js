import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authenticationReducer from './authentication_reducer';

const rootReducer = combineReducers({
    form,
    auth: authenticationReducer
});

export default rootReducer;
