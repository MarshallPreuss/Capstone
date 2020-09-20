import React , {useEffect} from 'react';
import { connect } from 'react-redux';

// Bring in the Asynchronous FetchPosts action

import {fetchDetails} from '../actions/detailAction';

import { Detail } from '../components/Detail';

// Redux state is now in the props of this component

const DetailPage = ({dispatch, loading, details, hasError}) => {
    useEffect(()=> {
        dispatch(fetchDetails())
    }, [dispatch])

    // Show loading, error, or success fetch

const renderDetails = () => {
    if(loading){
        return <p>One Sec... Loading Posts</p>
    } 
    if(hasError){
        return <p>Unable to display Posts</p>
    }

    if(details) {
    return details.map((detail)=> <Detail key={detail.id} detail={detail} />)
    } else {
        return [];
    }

    }

    return(
        renderDetails()
    )
}


// Map Redux state to the React component props

const mapStateToProps = (state) => ({
    loading: state.details.loading,
    details: state.details.details,
    hasErrors: state.details.hasErrors
})


// Connecting Redux to React

export default connect(mapStateToProps)(DetailPage)