import agent from '../domains/agent/Api';
import metric from '../domains/metric/Api';
import dashboard from '../domains/dashboard/Api';
import Urls from '../../../common/Urls';


const pages = router => {
  Object.values(Urls.pages).map(urlFunc => {
    router.get(urlFunc(), async ctx => await ctx.render('index'))
  })
}

export default router => {
  pages(router)
  agent(router)
  metric(router)
  dashboard(router)
}
