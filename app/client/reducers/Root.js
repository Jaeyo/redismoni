import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import agent from './agent'


export default combineReducers({
  routing,
  agent,
})
