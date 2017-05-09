import { getByKey as getAgentByKey } from '../agent/Service';
import { createMany as daoCreateMany } from './Dao';
import { ObjectDoesNotExist } from '../../common/Exceptions';
import { InvalidAgent } from './Exceptions';


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
