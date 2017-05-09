import { doSampleQuery } from '../apis/Metric'
import { message as msg } from 'antd'


export const actions = {
  requestSampleQuery: 'addWidget:requestSampleQuery',
  successSampleQuery: 'addWidget:successSampleQuery',
  failureSampleQuery: 'addWidget:failureSampleQuery',
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

export const requestSampleQuery = query => async (dispatch, getState) => {
  try {
    dispatch(_requestSampleQuery())
    const result = await doSampleQuery(query)
    dispatch(_successSampleQuery(result))
  } catch({ message }) {
    dispatch(_failureSampleQuery(message))
    msg.error(message)
  }
}