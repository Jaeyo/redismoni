

export default router => {
  router.get('/test', async ctx => {
    ctx.body = 'hello'
  })
}