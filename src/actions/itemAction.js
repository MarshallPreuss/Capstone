// Creating out Redux action types

export const GET_ITEMS ='GET_ITEMS'
export const GET_ITEMS_SUCCESS ='GET_ITEMS_SUCCESS'
export const GET_ITEMS_FAILURE ='GET_ITEMS_FAILURE'


// Creat my Redux Actions (using creators)

export const getItems = () => ({
    type: GET_ITEMS
})

export const getItemsSuccess = (items) => ({
    type: GET_ITEMS_SUCCESS,
    payload: items,
})

export const getItemsFailure = () => ({
    type: GET_ITEMS_FAILURE
})


// Combining all actions in an Asynchronous Thunk


export function fetchItems(){
    return async (dispatch) => {
        dispatch(getItems)

        try{
            const res = await
            fetch('http://localhost:8080/capstone/products')
            const data = await res.json()

// Make sure you send a json Array for whatever API URL being used

            dispatch(getItemsSuccess(data))

        } catch (error) {
            dispatch(getItemsFailure())
        }
    }
}