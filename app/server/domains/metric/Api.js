import { createMany } from './Dao';
import Urls from '../../../../common/Urls';


export default router => {
  router.post(Urls.apis.metrics(), async ctx => {
    const { metrics } = ctx.request.body
    await createMany(metrics)
    ctx.body = { ok: true }
  })
}
