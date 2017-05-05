import Koa from 'koa'
import { loggingLayer, initialLayer, staticLayer, apiLayer, errorLayer } from './middlewares'
import apis from '../common/Api'

const app = new Koa()

loggingLayer(app)
initialLayer(app)
apiLayer(app, apis)
staticLayer(app)
errorLayer(app)

export default app
