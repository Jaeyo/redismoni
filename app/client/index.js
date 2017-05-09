import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'
import configureStore from './store/Store'
import { syncHistoryWithStore } from 'react-router-redux'
import Urls from '../../common/Urls';
import { Provider } from 'react-redux'
import App from './App'
import HomePage from './pages/home/HomePage'
import AgentPage from './pages/agent/AgentPage'
import DashBoardPage from './pages/dashboard/DashBoardPage'
import AddWidgetPage from './pages/dashboard/AddWidgetPage';
import './index.css'


const store = configureStore({})
const history = syncHistoryWithStore(browserHistory, store)

const router = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path={Urls.pages.agents()} component={AgentPage} />
      <Route path={Urls.pages.dashBoard()} component={DashBoardPage} />
      <Route path={Urls.pages.addWidget()} component={AddWidgetPage} />
    </Route>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);
