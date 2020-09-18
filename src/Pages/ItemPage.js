import React , {useEffect} from 'react';
import { connect } from 'react-redux';

// Bring in the Asynchronous FetchPosts action

import {fetchItems} from '../actions/itemAction';

import { Item } from '../components/Item';

// Redux state is now in the props of this component

const ItemPage = ({dispatch, loading, items, hasError}) => {
    useEffect(()=> {
        dispatch(fetchItems())
    }, [dispatch])

    // Show loading, error, or success fetch

const renderItems = () => {
    if(loading){
        return <p>One Sec... Loading Posts</p>
    } 
    if(hasError){
        return <p>Unable to display Posts</p>
    }

    if(items) {
    return items.map((item)=> <Item key={item.id} item={item} />)
    } else {
        return [];
    }

    }

    return(
        renderItems()
    )
}


// Map Redux state to the React component props

const mapStateToProps = (state) => ({
    loading: state.items.loading,
    items: state.items.items,
    hasErrors: state.items.hasErrors
})


// Connecting Redux to React

export default connect(mapStateToProps)(ItemPage)