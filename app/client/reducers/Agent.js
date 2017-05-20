import createReducer from '../utils/Reducer'
import _ from 'lodash'
import { actions } from '../actions/Agent'


const initialState = {
  agents: [],
}


const requestAgent = (state, action) => state

const successAgent = (state, { agents }) =>
  _.merge({}, state, ({
    agents,
  }))

const failureAgent = (state, action) => state

export default createReducer(initialState, {
  [actions.requestAgents]: requestAgent,
  [actions.successAgents]: successAgent,
  [actions.failureAgents]: failureAgent,
})
