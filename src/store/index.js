import { createStore } from 'redux';
import rootReducer from './reducers/index';

const initState = {};

const store = createStore(rootReducer, initState);
export default store;
