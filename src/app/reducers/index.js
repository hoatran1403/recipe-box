import { combineReducers } from 'redux'
import recipe from './recipe'

const rootReducer = combineReducers({
  recipes: recipe
})

export default rootReducer
