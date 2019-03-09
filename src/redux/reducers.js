// import {combineReducers} from 'redux';

import {
    GET_BEERS,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
} from './constants';

const initialState = {
    beers: [],
    favorites: []
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
                const index = state.favorites.indexOf(payload);
                const newFavorites = state.favorites.filter(
                    id => id !== payload
                )
                return {
                    ...state,
                    favorites: newFavorites
                }

        default:
            return state;
    }
};

export default rootReducer;
