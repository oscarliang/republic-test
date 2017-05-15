import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import AppRouter from './router'
/* -------------------------------------------------------------------------- */
const rootElement = document.getElementById('root')

render((
	<Provider store={store}>
		<AppRouter store={store} />
	</Provider>
), rootElement)
