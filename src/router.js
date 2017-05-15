import React from 'react'

// Browser history 是由 React Router 创建浏览器应用推荐的 history
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Containers
import containers from './containers'
import Full from './components/common/Full/Full'

import { syncHistoryWithStore} from 'react-router-redux'


const AppRouter = ({ store }) => {

	const history = syncHistoryWithStore(hashHistory, store)

	/*
	* close home side menu when route changes
	* only apply when the side main menu is in use
	*/

	return (
		<Router history={history}>
			<Route path="/" name="Home" component={Full}>
				<IndexRoute component={containers.WeatherContainer}/>
				<Route path="weather" name="Weather Forecast" component={containers.WeatherContainer}/>
			</Route>
		</Router>
	)
}

export default AppRouter
