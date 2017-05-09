import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/Root'


export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(browserHistory),
        thunk,
      ),
    ),
  )
}
