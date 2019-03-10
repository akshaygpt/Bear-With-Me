import axios from 'axios';

import {
    GET_BEERS,
    REMOVE_FROM_FAVORITES,
    ADD_TO_FAVORITES,
    SHOW_BEER_DETAILS_MODAL,
    HIDE_BEER_DETAILS_MODAL
} from './constants';

export const getBeersSync = data => ({
    type: GET_BEERS,
    payload: data
});

export const getBeersThunk = (filter=null) => {
    const fetchBeers = filter ?
        'https://api.punkapi.com/v2/beers?beer_name='+filter :
        'https://api.punkapi.com/v2/beers'

    return dispatch => {
        axios.get(fetchBeers)
            .then(response => {
                return dispatch(getBeersSync(response.data));
            })
            .catch(error => console.log(error));
    }
}

export const addToFavorites = id => ({
    type: ADD_TO_FAVORITES,
    payload: id
});

export const removeFromFavorites = id => ({
    type: REMOVE_FROM_FAVORITES,
    payload: id
});

export const showBeerDetailsModal = id => ({
    type: SHOW_BEER_DETAILS_MODAL,
    payload: id
});

export const hideBeerDetailsModal = () => ({
    type: HIDE_BEER_DETAILS_MODAL
});
