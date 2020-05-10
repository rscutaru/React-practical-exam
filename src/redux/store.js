import {createStore, combineReducers} from 'redux';
import {personReducer} from './reducers/person';
import {filtersReducer} from './reducers/filter';


const rootReducer= combineReducers({
    people: personReducer,
    filter: filtersReducer
})

const store=createStore(rootReducer);

export default store;