import Widget from './Model'
import { widgetDataStore } from './Model'


export const findAllWidgets = async () => {
  const docs = await widgetDataStore.find({})
  return docs.map(doc => new Widget(doc))
}

export const createWidget = (name, query) => new Widget({ name, query }).save()
