import axios from 'axios';

import {GET_BEERS} from './constants';
// import {fetchBeers} from '../services';

export const getBeersSync = data => ({
    type: GET_BEERS,
    payload: data
});

export const getBeersThunk = () => {
    return dispatch => {
        axios.get('https://api.punkapi.com/v2/beers')
            .then(response => {
                console.log(123, response);
                return dispatch(getBeersSync(response.data));
            })
            .catch(error => console.log(error));
    }
}
