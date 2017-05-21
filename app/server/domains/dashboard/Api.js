import Urls from '../../../../common/Urls';
import { createWidget, findAllWidgets } from './Dao';
import { getWidgetDataByUuid } from './Service';


export default router => {
  // get widgets
  router.get(Urls.apis.widgets(), async ctx => {
    ctx.body = {
      widgets: await findAllWidgets(),
    }
  })

  // add widget
  router.post(Urls.apis.widgets(), async ctx => {
    const { name, type, query } = ctx.request.body
    ctx.body = {
      widget: await createWidget(name, type, query),
    }
  })

  // get widget data
  router.get(Urls.apis.widgetData(), async ctx => {
    const { uuid } = ctx.params
    ctx.body = {
      data: await getWidgetDataByUuid(uuid),
    }
  })
}
