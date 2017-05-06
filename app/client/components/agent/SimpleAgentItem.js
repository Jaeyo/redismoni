import React from 'react'
import { Panel } from 'react-bootstrap'


const SimpleAgentItem = ({ agent }) => (
  <Panel header={agent.name}>
    <p>blabla</p>
    <p>blabla</p>
    <p>blabla</p>
  </Panel>
)

export default SimpleAgentItem
