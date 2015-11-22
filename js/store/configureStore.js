import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import persistState from 'redux-localstorage';
import thunkMiddleware from 'redux-thunk';
import {devTools} from 'redux-devtools';
import * as reducers from '../reducers/index';

let createStoreWithMiddleware;

// Configure the dev tools when in DEV mode
if (__DEV__) {
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    devTools(),
    persistState()
  )(createStore);
} else {
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware)(createStore),
    persistState()
  );
}

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
