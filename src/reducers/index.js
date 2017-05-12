import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

/* Global reducers */
import photoReducer from './photo/photo-reducer'

const reducers = combineReducers({
    photoState: photoReducer,
    routing: routerReducer
});

export default reducers
