import { createSelector } from 'reselect';

const selectAddWidget = state => state.addWidget

export const selectSampleQueryResult = createSelector(
  selectAddWidget,
  (agent) => agent.sampleQueryResult
)
