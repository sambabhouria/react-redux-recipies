import { combineReducers } from 'redux'
import todos from './todo'
import visibilityFilter from './visibility-filter'

export default combineReducers({
  todos,
  visibilityFilter
})