import { fetchGet, fetchPost } from '../common/api'


export const getAgents = async () => {
  const resp = await fetchGet('/api/agents')
  return resp.ok ? (await resp.json()).agents : []
}

export const addAgent = async payload => {
  const resp = await fetchPost('/api/agents', payload)
  return resp.ok
}
