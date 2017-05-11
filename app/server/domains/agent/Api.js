import { findAll } from './Dao';
import { create } from './Service';
import Urls from '../../../../common/Urls';


export default router => {
  router.get(Urls.apis.agents(), async ctx => {
    ctx.body = {
      agents: await findAll()
    }
  })

  router.post(Urls.apis.agents(), async ctx => {
    const { name } = ctx.request.body
    ctx.body = {
      agent: await create(name),
    }
  })
}
