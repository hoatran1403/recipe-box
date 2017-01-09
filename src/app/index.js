import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//import components
import App from './components/App'
import rootReducer from './reducers'

//import css
import bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'

const store = createStore(rootReducer)

render(
  <Provider store = { store }>
  <App />
  </Provider>, document.getElementById('root'));
