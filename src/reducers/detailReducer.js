import * as actions from '../actions/detailActions';

export const initialState ={
    details:[],
    //id: 0,
    loading: false,
    hasErrors: false
}

export default function detailsReducer(state = initialState, action){
    switch(action.type){

        case actions.GET_DETAILS:
            return {...state, loading:true}

        case actions.GET_DETAILS_SUCCESS:
            return {details: action.payload, loading:false, hasErrors:false}
            //id: action.payload.id

        case actions.GET_DETAILS_FAILURE:
            return {...state, loading:false, hasErrors:true}

            

        default:
            return state
    }
}