import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

/* Global reducers */
import locationReducer from './location/location-reducer'


const reducers = combineReducers({
    locationState: locationReducer,
    loadingBar: loadingBarReducer,
    routing: routerReducer
});

export default reducers
