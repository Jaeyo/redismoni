import Content from '../../domain/models/Content'


export default router => {
  router.get('/test', async ctx => {
    ctx.body = new Content(132, 'test')
  })
}