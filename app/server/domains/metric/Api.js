import { createMany, doSampleQuery } from './Service';
import Urls from '../../../../common/Urls';


export default router => {
  router.post(Urls.apis.metrics(), async ctx => {
    const { agentKey, metrics } = ctx.request.body
    await createMany(agentKey, metrics)
    ctx.body = { ok: true }
  })

  router.get(Urls.apis.metricSampleQuery(), async ctx => {
    const query = ctx.request.query.q
    ctx.body = {
      result: await doSampleQuery(query)
    }
  })
}
