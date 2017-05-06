require('babel-register')
const app = require('./infra/App').default
const { initializeInflux } = require('./infra/influxdb/index')

initializeInflux()

app.listen(process.env.PORT || 3000)
