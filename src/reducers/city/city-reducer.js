import * as types from '../../actions/action-types'

export const initialState = {
	searchkeywords : '',
	searchkeywordsFresh: true
}

const cityReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.SET_CITY_SEARCHKEYWORDS:
		return Object.assign({}, state, {
			searchkeywords: action.searchkeywords
		})

		case types.SET_CITY_FRESH:
		return Object.assign({}, state, {
			searchkeywordsFresh: action.searchkeywordsFresh
		})

		default:
		return state

	}
}

export default cityReducer;