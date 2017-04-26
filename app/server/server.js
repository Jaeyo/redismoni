require('babel-register')
const app = require('./infra/app').default

app.listen(process.env.PORT || 3000)
