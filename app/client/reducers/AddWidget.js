import createReducer from '../utils/Reducer'
import { actions } from '../actions/AddWidget'


const initialState = {
  sampleQueryResult: [],
}


const requestSampleQuery = (state, action) => state

const successSampleQuery = (state, { result }) => Object.assign({}, state, ({
  sampleQueryResult: result,
}))

const failureSampleQuery = (state, action) => state

export default createReducer(initialState, {
  [actions.requestSampleQuery]: requestSampleQuery,
  [actions.successSampleQuery]: successSampleQuery,
  [actions.failureSampleQuery]: failureSampleQuery,
})
