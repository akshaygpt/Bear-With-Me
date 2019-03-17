// import {combineReducers} from 'redux';
import {modalBeerIdSelector} from './selectors';

import {
    GET_BEERS,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    SHOW_BEER_DETAILS_MODAL,
    HIDE_BEER_DETAILS_MODAL
} from './constants';

const initialState = {
    beers: [],
    favorites: [],
    modalBeerId: -1
}

function rootReducer(state=initialState, action){
    const payload = action.payload;

    switch (action.type){
        case GET_BEERS:
            return Object.assign({}, state, {
                beers: payload
            })

        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    payload
                ]
            }

        case REMOVE_FROM_FAVORITES:
            const newFavorites = state.favorites.filter(
                id => id !== payload
            )
            return {
                ...state,
                favorites: newFavorites
            }

        case SHOW_BEER_DETAILS_MODAL:
            return {
                ...state,
                modalBeerId: payload
            }

            case HIDE_BEER_DETAILS_MODAL:
                const newState = {
                    ...state,
                    modalBeerId: -1
                }
                modalBeerIdSelector(newState);
                return newState;

        default:
            return state;
    }
};

export default rootReducer;
