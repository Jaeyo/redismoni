import uuid from 'uuid'
import { create as daoCreate } from './dao'


export const create = name => daoCreate(name, uuid.v4())
