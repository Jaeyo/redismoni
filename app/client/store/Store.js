import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../reducers/Root'
import thunk from 'redux-thunk'


export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      routerMiddleware(browserHistory),
      thunk,
    )
  )
}
