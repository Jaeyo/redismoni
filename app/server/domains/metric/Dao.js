import Metric, { Metrics } from './Model'


export const createMany = (metricObjs) => {
  const metrics = metricObjs.map(metricObj => new Metric(metricObj))
  return new Metrics({ metrics }).save()
}
