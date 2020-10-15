// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {logger}  from 'redux-logger';
import reduxPromise from 'redux-promise'

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


// State and reducers
import {textReducer, jokeReducer} from './containers/testReducer/text_reducer';
const reducers = combineReducers({
  changeMe: textReducer, //dummy text reducer
  changeMe2: jokeReducer, //dummy chuck norris joke promise reducer
});

// Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger,reduxPromise));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
      <App />
  </Provider>,
  document.getElementById('root')
);
