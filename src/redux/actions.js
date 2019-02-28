import axios from 'axios';

import {GET_BEERS} from './constants';

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
                // console.log(123, response);
                return dispatch(getBeersSync(response.data));
            })
            .catch(error => console.log(error));
    }
}
