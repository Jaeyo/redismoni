import { createSelector } from 'reselect'
import _ from 'lodash'


const selectDashBoard = state => state.dashBoard

export const selectWidgets = createSelector(
  selectDashBoard,
  dashBoard => dashBoard.widgets,
)

export const selectWidgetData = (state, uuid) => createSelector(
  selectDashBoard,
  dashBoard => _.get(dashBoard, ['widgetDatas', uuid], null)
)(state)

export const selectIsWidgetLoading = (state, uuid) => createSelector(
  selectDashBoard,
  dashBoard => _.get(dashBoard, ['isWidgetLoadings', uuid], false)
)(state)
