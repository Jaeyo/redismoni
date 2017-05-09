import Agent, { agentDataStore } from './Model';
import { isEmpty } from '../../../../common/Utils';
import { ObjectDoesNotExist } from '../../common/Exceptions';


export const findAll = async () => {
  const docs = await agentDataStore.find({})
  return docs.map(doc => new Agent(doc))
}

export const getByKey = async key => {
  const docs = await agentDataStore.find({ key })
  if (isEmpty(docs))
    throw new ObjectDoesNotExist()
  return new Agent(docs[0])
}

export const create = (name, key) => new Agent({ name, key }).save()
