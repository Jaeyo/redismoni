import { apiUrlRootPath } from '../../common/constants'
import { findAll } from './dao'
import { create } from './service'


export default router => {
  router.get(`/${apiUrlRootPath}/agents`, async ctx => {
    ctx.body = {
      agents: await findAll()
    }
  })

  router.post(`/${apiUrlRootPath}/agents`, async ctx => {
    const { name } = ctx.request.body
    const agent = await create(name)
    ctx.body = { agent }
  })
}
