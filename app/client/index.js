import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'
import configureStore from './store/Store'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import App from './App'
import HomePage from './pages/HomePage'
import './index.css'
import AgentPage from './pages/AgentPage'


const store = configureStore({})
const history = syncHistoryWithStore(browserHistory, store)

const router = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/agents" component={AgentPage} />
    </Route>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);
