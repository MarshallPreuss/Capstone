import React , {useEffect} from 'react';
import { connect } from 'react-redux';

// Bring in the Asynchronous FetchPosts action

import {fetchDetails} from '../actions/detailActions';

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
    return details.map((category)=> <Detail key={category.id} category={category} />)
    }

    return(
        <section>
            <h1 className="catTitle">Details</h1>
            <br/>
            
    <br/>
            {renderDetails()}
        </section>
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