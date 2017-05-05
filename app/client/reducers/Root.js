import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import agent from './Agent'


export default combineReducers({
  routing,
  agent,
})
