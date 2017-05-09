import { getByKey as getAgentByKey } from '../agent/Service';
import { createMany as daoCreateMany } from './Dao';
import { BadRequest, ObjectDoesNotExist } from '../../common/Exceptions';
import { InvalidAgent } from './Exceptions';
import { influx } from '../../infra/influxdb/index';


const SAMPLE_QUERY_LIMIT = 100


export const createMany = async (agentKey, metricObjs) => {
  try {
    await getAgentByKey(agentKey)
    return daoCreateMany(metricObjs)
  } catch (err) {
    if (err instanceof ObjectDoesNotExist) {
      throw new InvalidAgent()
    }
  }
}

export const doSampleQuery = async query => {
  try {
    return await influx.query(`${query} order by time desc limit ${SAMPLE_QUERY_LIMIT}`)
  } catch(err) {
    throw new BadRequest(err.message)
  }
}
