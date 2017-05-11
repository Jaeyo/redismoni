import { fetchPost } from '../common/Api';
import Urls from '../../../common/Urls';


export const addWidget = async (name, query) => {
  const resp = await fetchPost(Urls.apis.widgets(), { name, query })
  const body = await resp.json()
  if (resp.ok)
    return body.widget
  throw new Error(body.error)
}
