import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

/* Global reducers */
import weatherReducer from './weather/weather-reducer'


const reducers = combineReducers({
    weatherState: weatherReducer,
    loadingBar: loadingBarReducer,
    routing: routerReducer
});

export default reducers
