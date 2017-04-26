

export default router => {
  router.get('/', async ctx => {
    ctx.body = 'hello'
  })
}