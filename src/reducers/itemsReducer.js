import * as actions from '../actions/itemAction';

export const initialState ={
    items:[],
    loading: false,
    hasErrors: false
}

export default function itemsReducer(state = initialState, action){
    switch(action.type){

        case actions.GET_ITEMS:
            return {...state, loading:true}

        case actions.GET_ITEMS_SUCCESS:
            return {items: action.payload, loading:false, hasErrors:false}

        case actions.GET_ITEMS_FAILURE:
            return {...state, loading:false, hasErrors:true}

            

        default:
            return state;
    }
}