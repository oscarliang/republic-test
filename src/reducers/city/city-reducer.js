import * as types from '../../actions/action-types'

export const initialState = {
	searchkeywords : ''
}

const cityReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.SET_CITY_SEARCHKEYWORDS:
		return Object.assign({}, state, {
			searchkeywords: action.searchkeywords
		})

		default:
		return state

	}
}

export default cityReducer;