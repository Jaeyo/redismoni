import Urls from '../../../../common/Urls';
import { createWidget, findAllWidgets } from './Dao';


export default router => {
  router.get(Urls.apis.widgets(), async ctx => {
    ctx.body = {
      widgets: await findAllWidgets(),
    }
  })

  router.post(Urls.apis.widgets(), async ctx => {
    const { name, query } = ctx.request.body
    ctx.body = {
      widget: await createWidget(name, query),
    }
  })
}
