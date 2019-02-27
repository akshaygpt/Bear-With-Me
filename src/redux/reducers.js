// import {combineReducers} from 'redux';

import {GET_BEERS} from './constants';

const initialState = {
    beers: []
}

function rootReducer(state=initialState, action){
    switch (action.type){
        case GET_BEERS:
            return Object.assign({}, state, {
                beers: action.payload
            })

        default:
            return state;
    }
};

export default rootReducer;
