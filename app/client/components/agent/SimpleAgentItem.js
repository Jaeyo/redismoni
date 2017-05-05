import React from 'react'
import { Card } from 'antd'


const SimpleAgentItem = ({ agent }) => (
  <Card title={agent.name}>
    <p>blabla</p>
    <p>this is simple agent item</p>
  </Card>
)

export default SimpleAgentItem
