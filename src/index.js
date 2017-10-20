import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Thunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/authentication/signin';
import Signout from './components/authentication/signout';
import Signup from './components/authentication/signup';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App} />
                <Route path="/signin" component={Signin} />
                <Route path="/signout" component={Signout} />
                <Route path="/signup" component={Signup} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('.container')
);

registerServiceWorker();
