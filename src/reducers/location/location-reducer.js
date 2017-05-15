import * as types from '../../actions/action-types'

export const initialState = {
	searchkeywords : '',
	searchkeywordsRefresh: true
}

const locationReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.SET_LOCATION_SEARCHKEYWORDS:
		return Object.assign({}, state, {
			searchkeywords: action.searchkeywords
		})

		case types.SET_LOCATION_REFRESH:
		return Object.assign({}, state, {
			searchkeywordsRefresh: action.searchkeywordsRefresh
		})

		default:
		return state

	}
}

export default locationReducer;