import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './Containers/App';
import { searchRobots, requestRobots } from './reducers';

import './index.css';

const logger = createLogger();
const rootReducer = combineReducers({
    searchRobots: searchRobots,
    requestRobots: requestRobots
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
