import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import conditionalGet from 'koa-conditional-get'
import etag from 'koa-etag'
import router from 'koa-router'
import convert from 'koa-convert'
import cors from 'koa-cors'
import error from './error'
import serve from 'koa-static'

export const loggingLayer = app => app.use(logger())

export const initialLayer = app =>
  app.use(bodyParser())
    .use(conditionalGet())
    .use(etag())

export const staticLayer = app => app.use(serve('public'))

export const apiLayer = (app, apiRoutes) => {
  const newRouter = router()
  newRouter.use(convert(cors()))
  apiRoutes(newRouter)
  app.use(newRouter.routes()).use(newRouter.allowedMethods())
  return newRouter
}

export const errorLayer = app => app.use(error)
