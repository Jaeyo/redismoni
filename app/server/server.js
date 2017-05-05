require('babel-register')
const app = require('./infra/App').default

app.listen(process.env.PORT || 3000)
