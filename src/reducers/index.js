import {combineReducers} from 'redux';
import itemsReducer from './itemsReducer';
import detailsReducer from './detailReducer';


const rootReducer = combineReducers({
    items:itemsReducer,
    details:detailsReducer
})


export default rootReducer;