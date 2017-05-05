import { createSelector } from 'reselect'

const selectAgent = state => state.agent

export const selectAgents = createSelector(
  selectAgent,
  (agent) => agent.agents
)
