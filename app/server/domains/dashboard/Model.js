import datastore from 'nedb-promise';
import { save } from '../../common/NedbModel';
import uuidGen from 'uuid';


export const widgetDataStore = datastore({
  file: './db/widget.db',
  autoload: true,
})


export default class Widget {
  constructor({ uuid, name, query }) {
    this.uuid = uuid
    this.name = name
    this.query = query
  }

  save() {
    if (this.uuid == null)
      this.uuid = uuidGen.v4()

    return save(this, widgetDataStore)
  }
}
