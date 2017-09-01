import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, ConnectedRouter } from 'react-router-redux'

import rootReducer from './reducers'
import App from './components/App'

const history = createHistory()
const loggerMiddleware = createLogger()

/* eslint-disable no-underscore-dangle */
let store = createStore(
    rootReducer,
    process.env.NODE_ENV != "production" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
    routerMiddleware(history)
)
/* eslint-enable */

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)