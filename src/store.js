import { createStore, applyMiddleware } from 'redux'
import {hashHistory } from 'react-router'

import { routerMiddleware } from 'react-router-redux'
/* -------------------------------------------------------------------------- */
import * as storage from 'redux-storage'
import reducers from './reducers'
/* -------------------------------------------------------------------------- */
import createEngine from 'redux-storage-engine-localstorage'

// Now it's time to decide which storage engine should be used
let engine = createEngine('employee-self-service-app')

const localStorageMiddleware = storage.createMiddleware(engine)
/* -------------------------------------------------------------------------- */
const ourRouterMiddleware = routerMiddleware(hashHistory);

// To load the previous state we create a loader function with our prepared
// engine. The result is a function that can be used on any store object you
// have at hand :)
const load = storage.createLoader(engine);

let store = {};

store = createStore(reducers, applyMiddleware(
	ourRouterMiddleware,
	localStorageMiddleware
))

load(store);

export default store
