import {createStore, combineReducers} from 'redux';
import {personReducer} from './reducers/person';
import {filtersReducer} from './reducers/filter';
import { sortReducer } from './reducers/sort';


const rootReducer= combineReducers({
    people: personReducer,
    filter: filtersReducer,
    sort: sortReducer,
})

const store=createStore(rootReducer);

export default store;