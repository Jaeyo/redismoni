import { doSampleQuery } from '../apis/Metric';
import { message as msg } from 'antd';
import { addWidget } from '../apis/Dashboard';


export const actions = {
  requestSampleQuery: 'addWidget:requestSampleQuery',
  successSampleQuery: 'addWidget:successSampleQuery',
  failureSampleQuery: 'addWidget:failureSampleQuery',

  requestAddWidget: 'addWidget:requestAddWidget',
  successAddWidget: 'addWidget:successAddWidget',
  failureAddWidget: 'addWidget:failureAddWidget',
}

const _requestSampleQuery = () => ({
  type: actions.requestSampleQuery,
})

const _successSampleQuery = result => ({
  type: actions.successSampleQuery,
  result,
})

const _failureSampleQuery = msg => ({
  type: actions.failureSampleQuery,
  msg,
})

const _requestAddWidget = () => ({
  type: actions.requestAddWidget,
})

const _successAddWidget = () => ({
  type: actions.successAddWidget,
})

const _failureAddWidget = msg => ({
  type: actions.failureAddWidget,
  msg,
})

export const requestSampleQuery = query => async (dispatch, getState) => {
  try {
    dispatch(_requestSampleQuery())
    const result = await doSampleQuery(query)
    dispatch(_successSampleQuery(result))
  } catch ({ message }) {
    dispatch(_failureSampleQuery(message))
    msg.error(message)
  }
}

export const requestAddWidget = (name, query) => async (dispatch, getState) => {
  try {
    dispatch(_requestAddWidget())
    await addWidget(name, query)
    dispatch(_successAddWidget())
    msg.info('widget added')
  } catch ({ message }) {
    dispatch(_failureAddWidget(message))
    msg.error(message)
  }
}