// Creating out Redux action types

export const GET_DETAILS ='GET_DETAILS'
export const GET_DETAILS_SUCCESS ='GET_DETAILS_SUCCESS'
export const GET_DETAILS_FAILURE ='GET_DETAILS_FAILURE'


// Creat my Redux Actions (using creators)

export const getDetails = () => ({
    type: GET_DETAILS
})

export const getDetailsSuccess = (details) => ({
    type: GET_DETAILS_SUCCESS,
    payload: details,
})

export const getDetailsFailure = () => ({
    type: GET_DETAILS_FAILURE
})


// Combining all actions in an Asynchronous Thunk


export function fetchDetails(){
    return async (dispatch) => {
        dispatch(getDetails)

        try{
            const res = await
            fetch('http://localhost:8080/capstone/product/'+ id)
            const data = await res.json()

// Make sure you send a json Array for whatever API URL being used

            dispatch(getDetailsSuccess(data.details))

        } catch (error) {
            dispatch(getDetailsFailure())
        }
    }
}