import * as types from './action-types'

/* location actions */

export function setLocationSearchkeywords(searchkeywords) {
    return {
        type: types.SET_LOCATION_SEARCHKEYWORDS,
        searchkeywords
    }
}

export function setLocationRefresh(searchkeywordsRefresh) {
    return {
        type: types.SET_LOCATION_REFRESH,
        searchkeywordsRefresh
    }
}
