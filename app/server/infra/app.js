import Koa from 'koa'
import { loggingLayer, initialLayer, apiLayer, errorLayer } from './middlewares'
import apis from '../application/apis'

const app = new Koa()

loggingLayer(app)
initialLayer(app)
apiLayer(app, apis)
errorLayer(app)

export default app
