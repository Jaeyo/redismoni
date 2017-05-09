import { getAgents } from '../apis/Agent'


export const actions = {
  requestAgents: 'agent:requestAgents',
  successAgents: 'agent:successAgents',
  failureAgents: 'agent:failureAgents',
}

const _requestAgents = () => ({
  type: actions.requestAgents,
})

const _successAgents = agents => ({
  type: actions.successAgents,
  agents,
})

const _failureAgents = msg => ({
  type: actions.failureAgents,
  msg,
})

export const requestAgents = () => async (dispatch, getState) => {
  try {
    dispatch(_requestAgents())
    const agents = await getAgents()
    dispatch(_successAgents(agents))
  } catch({ message }) {
    dispatch(_failureAgents(message))
  }
}