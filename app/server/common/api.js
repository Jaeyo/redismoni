import agent from '../domains/agent/api'


const pages = router => {
  [
    '/agents',
  ].map(url => {
    router.get(url, async ctx => await ctx.render('index'))
  })
}

export default router => {
  pages(router)
  agent(router)
}
