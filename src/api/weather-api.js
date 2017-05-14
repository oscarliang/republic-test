import Promise from 'promise'
import 'whatwg-fetch'

/* get photo list from the remote server */
export const getWeatherAPI = (location) => {
	let promise = new Promise(function (resolve, reject) {
		let GET_WEATHER_DETAIL =  'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20'+ location +'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
		fetch(
			GET_WEATHER_DETAIL, {
				method: 'GET'
			})
			.then(response => (response.json()))
			.then(response => {
				resolve(response)
			})
			.catch(err => { reject(err) })
	})

	return promise
}
