import * as actions from '../actions/detailAction';

export const initialState ={
    details:[],
    loading: false,
    hasErrors: false
}

export default function detailsReducer(state = initialState, action){
    switch(action.type){

        case actions.GET_DETAILS:
            return {...state, loading:true}

        case actions.GET_DETAILS_SUCCESS:
            return {details: action.payload, loading:false, hasErrors:false}

        case actions.GET_DETAILS_FAILURE:
            return {...state, loading:false, hasErrors:true}

            

        default:
            return state;
    }
}