import * as types from '../../actions/action-types'

export const initialState = {
	searchkeywords : '',
	searchkeywordsRefresh: true
}

const weatherReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.SET_WEATHER_SEARCHKEYWORDS:
		return Object.assign({}, state, {
			searchkeywords: action.searchkeywords
		})

		case types.SET_WEATHER_REFRESH:
		return Object.assign({}, state, {
			searchkeywordsRefresh: action.searchkeywordsRefresh
		})

		default:
		return state

	}
}

export default weatherReducer;