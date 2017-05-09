import uuid from 'uuid'
import { create as daoCreate } from './Dao'
import { getByKey as daoGetByKey } from './Dao'


export const getByKey = key => daoGetByKey(key)

export const create = name => daoCreate(name, uuid.v4())
