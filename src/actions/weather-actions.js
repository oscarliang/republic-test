import * as types from './action-types'

/* weather actions */
export function setWeatherSearchkeywords(searchkeywords) {
    return {
        type: types.SET_WEATHER_SEARCHKEYWORDS,
        searchkeywords
    }
}

export function setWeatherRefresh(searchkeywordsRefresh) {
    return {
        type: types.SET_WEATHER_REFRESH,
        searchkeywordsRefresh
    }
}
