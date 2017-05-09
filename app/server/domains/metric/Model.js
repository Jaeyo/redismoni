import * as Influx from 'influx'
import { influx } from '../../infra/influxdb/index'


export const schema = {
  measurement: 'metric',
  fields: {
    value: Influx.FieldType.FLOAT,
  },
  tags: ['key1', 'key2', 'key3', 'key4', 'key5',]
}


export default class Metric {
  constructor({ key1, key2, key3, key4, key5, value }) {
    this.key1 = key1
    this.key2 = key2
    this.key3 = key3
    this.key4 = key4
    this.key5 = key5
    this.value = value
  }

  toPoint() {
    return {
      measurement: schema.measurement,
      tags: {
        key1: this.key1,
        key2: this.key2,
        key3: this.key3,
        key4: this.key4,
        key5: this.key5,
      },
      fields: {
        value: this.value,
      }
    }
  }

  save() {
    return influx.writePoints([this.toPoint()])
  }
}


export class Metrics {
  constructor({ metrics }) {
    this.metrics = metrics
  }

  save() {
    return influx.writePoints(this.metrics.map(metric => metric.toPoint()))
  }
}
