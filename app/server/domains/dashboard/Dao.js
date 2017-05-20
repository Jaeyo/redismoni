import Widget from './Model'
import { widgetDataStore } from './Model'
import { isEmpty } from '../../../../common/Utils';


export const findAllWidgets = async () => {
  const docs = await widgetDataStore.find({})
  return docs.map(doc => new Widget(doc))
}

export const getWidgetByUuid = async uuid => {
  const docs = await widgetDataStore.find({ uuid })
  if (isEmpty(docs)) {
    return null
  }
  return new Widget(docs[0])
}

export const createWidget = (name, type, query) => new Widget({ name, type, query }).save()
