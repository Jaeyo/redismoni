import { fetchGet, fetchPost } from '../common/api'


export const getAgents = () => fetchGet('/api/agents')

export const addAgent = payload => fetchPost('/api/agents', payload)
