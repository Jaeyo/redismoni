import { fetchGet, fetchPost } from '../common/Api';
import Urls from '../../../common/Urls';


export const findWidgets = async () => {
  const resp = await fetchGet(Urls.apis.widgets())
  const body = await resp.json()
  if (resp.ok)
    return body.widgets
  throw new Error(body.error)
}

export const addWidget = async (name, type, query) => {
  const resp = await fetchPost(Urls.apis.widgets(), { name, type, query })
  const body = await resp.json()
  if (resp.ok)
    return body.widget
  throw new Error(body.error)
}

export const getWidgetData = async uuid => {
  const resp = await fetchGet(Urls.apis.widgetData(uuid))
  const body = await resp.json()
  if (resp.ok)
    return body.data
  throw new Error(body.error)
}
