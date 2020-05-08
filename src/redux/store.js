import {createStore} from 'redux';
import {personReducer} from './reducers/person';

const store=createStore(personReducer);

export default store;