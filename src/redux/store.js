import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from './reducers';
// import {createLogger} from 'redux-logger';

// const logger = createLogger({
//     duration: true
// });

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);
