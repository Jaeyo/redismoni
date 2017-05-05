require('babel-register')
const Agent = require('./app/server/domains/agent/model').default


const agent = new Agent({ name: 'hello', key: 'keyeeee' })
async function test() {
  const result = await agent.save()
  console.log(result)
  console.log(agent)
}

test()

console.log('end')
