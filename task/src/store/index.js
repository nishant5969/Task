import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import cartReducer from '../reducer/cartreducer';

let store = createStore(cartReducer, applyMiddleware(promiseMiddleware));

export default store;