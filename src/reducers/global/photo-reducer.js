import * as types from '../../actions/action-types'

export const initialState = {
	records: [],
	filterTitle : '',
	filterAlbumId : ''
}

const photoReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.SET_PHOTO_RECORDS:
		return Object.assign({}, state, {
			records: action.records
		})

		case types.SET_PHOTO_FILTER_TITLE:
		return Object.assign({}, state, {
			filterTitle: action.filterTitle
		})

		case types.SET_PHOTO_FILTER_ALBUMID:
		return Object.assign({}, state, {
			filterAlbumId: action.filterAlbumId
		})
		default:
		return state

	}
}

export default photoReducer;
