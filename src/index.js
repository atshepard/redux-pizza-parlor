import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const orderReducer = (state = [], action) => {
    if (action.type === 'ADD_ORDER') {
        return [...state, action.payload]
    }
    return state;
}

const menuReducer = (state = [], action) => {
    if (action.type === 'GET_MENU') {
        return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        orderReducer,
        menuReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
