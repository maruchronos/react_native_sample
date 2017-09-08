import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import dataReducer from './reducers';

export default function configureStore() {
  let store = createStore(
  	dataReducer,
  	applyMiddleware(logger)
  	);
  return store;
}