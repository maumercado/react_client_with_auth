import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Thunk from 'redux-thunk';

import Header from './components/header';
import App from './components/app';
import Feature from './components/feature';
import RequireAuth from './components/authentication/require_authentication';
import Signin from './components/authentication/signin';
import Signout from './components/authentication/signout';
import Signup from './components/authentication/signup';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
    store.dispatch({
        type: AUTH_USER
    });
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/feature" component={RequireAuth(Feature)} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/signout" component={Signout} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('.container')
);

registerServiceWorker();
