import createReducer from '../utils/Reducer'
import _ from 'lodash'
import { actions } from '../actions/DashBoard'


const initialState = {
  widgets: [],
  widgetDatas: {},
  isWidgetLoadings: {},
}

const requestWidgets = (state, action) => state

const successWidgets = (state, { widgets }) =>
  _.merge({}, state, { widgets })

const failureWidgets = (state, action) => state

const requestWidgetData = (state, { uuid }) =>
  _.merge({}, state, {
    isWidgetLoadings: {
      [uuid]: true,
    }
  })

const successWidgetData = (state, { uuid, data }) =>
  _.merge({}, state, {
    widgetDatas: {
      [uuid]: data,
    }
  })

const failureWidgetData = (state, action) => state


export default createReducer(initialState, {
  [actions.requestWidgets]: requestWidgets,
  [actions.successWidgets]: successWidgets,
  [actions.failureWidgets]: failureWidgets,

  [actions.requestWidgetData]: requestWidgetData,
  [actions.successWidgetData]: successWidgetData,
  [actions.failureWidgetData]: failureWidgetData,
})
