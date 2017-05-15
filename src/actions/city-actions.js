import * as types from './action-types'

/* city actions */

export function setCitySearchkeywords(searchkeywords) {
    return {
        type: types.SET_CITY_SEARCHKEYWORDS,
        searchkeywords
    }
}

export function setCityRefresh(searchkeywordsFresh) {
    return {
        type: types.SET_CITY_FRESH,
        searchkeywordsFresh
    }
}
