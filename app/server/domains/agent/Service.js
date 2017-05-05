import uuid from 'uuid'
import { create as daoCreate } from './Dao'


export const create = name => daoCreate(name, uuid.v4())
