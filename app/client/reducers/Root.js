import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import agent from './Agent';
import addWidget from './AddWidget';
import dashBoard from './DashBoard';


export default combineReducers({
  routing,
  agent,
  addWidget,
  dashBoard,
})
