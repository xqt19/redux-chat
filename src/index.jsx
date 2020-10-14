// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {logger}  from 'redux-logger'

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


// State and reducers
import textReducer from './containers/testReducer/text_reducer';
const reducers = combineReducers({
  changeMe: textReducer
});

// Middleware
const middlewares = applyMiddleware(logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
