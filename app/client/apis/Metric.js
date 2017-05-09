import { fetchGet } from '../common/Api';
import Urls from '../../../common/Urls';


export const doSampleQuery = async query => {
  const resp = await fetchGet(Urls.apis.metricSampleQuery(query))
  const body = await resp.json()
  if (resp.ok)
    return body.result
  throw new Error(body.error)
}
