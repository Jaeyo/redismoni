import { fetchGet, fetchPost } from '../common/Api'
import Urls from '../../../common/Urls'


export const getAgents = async () => {
  const resp = await fetchGet(Urls.apis.agents())
  const body = await resp.json()
  if (resp.ok)
    return body.agents
  throw new Error(body.error)
}

export const addAgent = async payload => {
  const resp = await fetchPost(Urls.apis.agents(), payload)
  return resp.ok
}
