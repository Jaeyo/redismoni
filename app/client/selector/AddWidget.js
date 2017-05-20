import { createSelector } from 'reselect';

const selectAddWidget = state => state.addWidget

export const selectSampleQueryResult = createSelector(
  selectAddWidget,
  addWidget => addWidget.sampleQueryResult
)
