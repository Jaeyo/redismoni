import { getWidgetByUuid } from './Dao';
import { execQuery } from '../metric/Service';


export const getWidgetDataByUuid = async uuid => {
  const widget = await getWidgetByUuid(uuid)
  const data = await execQuery(widget.query)
  return data
}
