import { apiUrlRootPath } from '../../common/Constants'
import { createMany } from './Dao'


export default router => {
  router.post(`/${apiUrlRootPath}/metrics`, async ctx => {
    const { metrics } = ctx.request.body
    await createMany(metrics)
    ctx.body = { ok: true }
  })
}

