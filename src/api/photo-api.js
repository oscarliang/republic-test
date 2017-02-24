import Promise from 'promise'
import 'whatwg-fetch'
import store from '../store'
import * as actions from '../actions/photo-actions'

/* remote photo detail api url */
export const GET_PHOTO_DETAIL = "https://jsonplaceholder.typicode.com/photos";


/* get photo list from the remote server */
export const getPhotosAPI = () => {
	let promise = new Promise(function (resolve, reject) {

		fetch(
			GET_PHOTO_DETAIL, {
				method: 'GET'
			})
			.then(response => (response.json()))
			.then(response => {
				store.dispatch(actions.setPhotoRecords(response))
				resolve(response)}
			)
			.catch(err => {reject(err)})
		})

		return promise
	}
