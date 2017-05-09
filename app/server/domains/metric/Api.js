import { createMany } from './Service';
import Urls from '../../../../common/Urls';


export default router => {
  router.post(Urls.apis.metrics(), async ctx => {
    const { agentKey, metrics } = ctx.request.body
    await createMany(agentKey, metrics)
    ctx.body = { ok: true }
  })
}
