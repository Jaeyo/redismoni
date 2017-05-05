import Agent, { agentDataStore } from './model'

export const findAll = () => agentDataStore.find()

export const create = (name, key) => new Agent({ name, key }).save()
