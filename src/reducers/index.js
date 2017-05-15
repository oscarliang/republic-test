import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

/* Global reducers */
import photoReducer from './photo/photo-reducer'
import cityReducer from './city/city-reducer'


const reducers = combineReducers({
    photoState: photoReducer,
    cityState: cityReducer,
    loadingBar: loadingBarReducer,
    routing: routerReducer
});

export default reducers
