import Agent, { agentDataStore } from './model'


export const findAll = async () => {
  const docs = await agentDataStore.find({})
  if (docs == null)
    return Promise.resolve([])
  return docs.map(doc => new Agent(doc))
}

export const create = (name, key) => new Agent({ name, key }).save()
