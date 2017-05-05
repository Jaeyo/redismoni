import createReducer from '../utils/reducer'
import { actions } from '../actions/agent'


const initialState = {
  agents: [],
}


const requestAgent = (state, action) => state

const successAgent = (state, { agents }) => Object.assign({}, state, ({
  agents,
}))

const failureAgent = (state, action) => state

export default createReducer(initialState, {
  [actions.requestAgents]: requestAgent,
  [actions.successAgents]: successAgent,
  [actions.failureAgents]: failureAgent,
})
