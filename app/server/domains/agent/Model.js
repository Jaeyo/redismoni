import datastore from 'nedb-promise'
import { save } from '../../common/NedbModel'
import uuidGen from 'uuid';


export const agentDataStore = datastore({
  file: './db/agent.db',
  autoload: true,
})


export default class Agent {
  constructor({ uuid, name, key }) {
    this.uuid = uuid
    this.name = name
    this.key = key
  }

  save() {
    if (this.uuid == null)
      this.uuid = uuidGen.v4()

    return save(this, agentDataStore)
  }
}
