import { fetchGet, fetchPost } from '../common/api'


export const getAgents = async () => {
  const resp = await fetchGet('/api/agents')
  const body = await resp.json()
  if (resp.ok)
    return body.agents
  throw new Error(body.msg)
}

export const addAgent = async payload => {
  const resp = await fetchPost('/api/agents', payload)
  return resp.ok
}
