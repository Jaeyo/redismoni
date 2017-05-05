import datastore from 'nedb-promise'
import { save } from '../../common/model'


export const agentDataStore = datastore({
  file: './db/agent.db',
  autoload: true,
})


export default class Agent {
  constructor({ _id, name, key }) {
    this._id = _id
    this.name = name
    this.key = key
  }

  save() {
    return save(this, agentDataStore)
  }
}
