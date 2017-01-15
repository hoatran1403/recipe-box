import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

//import components
import App from './components/App'
import rootReducer from './reducers'

const loggerMiddleware = createLogger();

//get localstorage state
const persistedState = localStorage.getItem("_user_recipes_") ? JSON.parse(localStorage.getItem("_user_recipes_")) : {}

const store = createStore(rootReducer,persistedState, applyMiddleware(loggerMiddleware))

store.subscribe(() => {
  localStorage.setItem("_user_recipes_", JSON.stringify(store.getState()))
})

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
