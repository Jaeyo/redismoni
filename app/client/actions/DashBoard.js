import { message as msg } from 'antd'
import { getWidgetData, findWidgets } from '../apis/Dashboard'


export const actions = {
  requestWidgets: 'DashBoard:requestWidgets',
  successWidgets: 'DashBoard:successWidgets',
  failureWidgets: 'DashBoard:failureWidgets',

  requestWidgetData: 'DashBoard:requestWidgetData',
  successWidgetData: 'DashBoard:successWidgetData',
  failureWidgetData: 'DashBoard:failureWidgetData',
}

const _requestWidgets = () => ({
  type: actions.requestWidgets,
})

const _successWidgets = widgets => ({
  type: actions.successWidgets,
  widgets,
})

const _failureWidgets = msg => ({
  type: actions.failureWidgets,
  msg,
})

const _requestWidgetData = uuid => ({
  type: actions.requestWidgetData,
  uuid,
})

const _successWidgetData = (uuid, data) => ({
  type: actions.successWidgetData,
  uuid,
  data,
})

const _failureWidgetData = msg => ({
  type: actions.failureWidgetData,
  msg,
})

export const requestWidgets = () => async (dispatch, getState) => {
  try {
    dispatch(_requestWidgets())
    const widgets = await findWidgets()
    dispatch(_successWidgets(widgets))
  } catch ({ message }) {
    dispatch(_failureWidgets(message))
    msg.error(message)
  }
}

export const requestWidgetData = (uuid) => async (dispatch, getState) => {
  try {
    dispatch(_requestWidgetData(uuid))
    const data = await getWidgetData(uuid)
    dispatch(_successWidgetData(uuid, data))
  } catch ({ message }) {
    dispatch(_failureWidgetData(message))
    msg.error(message)
  }
}
