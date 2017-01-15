import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

//import components
import App from './components/App'
import rootReducer from './reducers'

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
