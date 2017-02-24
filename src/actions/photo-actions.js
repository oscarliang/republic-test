import * as types from './action-types'

/* Photo actions */

export function setPhotoRecords(records) {
    return {
        type: types.SET_PHOTO_RECORDS,
        records
    }
}

export function setPhotoFilterTitle(filterTitle) {
    return {
        type: types.SET_PHOTO_FILTER_TITLE,
        filterTitle
    }
}

export function setPhotoFilterAlbumId(filterAlbumId) {
    return {
        type: types.SET_PHOTO_FILTER_ALBUMID,
        filterAlbumId
    }
}
