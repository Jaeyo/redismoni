import datastore from 'nedb-promise'
import { save } from '../../common/model'


export const agentDataStore = datastore({
  file: './db/agent.db',
  autoload: true,
})


export default class Agent {
  constructor({ id, name, key }) {
    this.id = id
    this.name = name
    this.key = key
  }

  save() { return save(this, agentDataStore) }
}
