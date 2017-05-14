import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

/* Global reducers */
import photoReducer from './photo/photo-reducer'
import cityReducer from './city/city-reducer'


const reducers = combineReducers({
    photoState: photoReducer,
    cityState: cityReducer,
    routing: routerReducer
});

export default reducers
