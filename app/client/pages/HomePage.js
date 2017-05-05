import React, { Component } from 'react'
import PageHeader from '../components/headers/PageHeader'
import { Button, FormControl } from 'react-bootstrap'
import { addAgent, getAgents } from '../apis/agent'


export default class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      agents: [],
      agentName: '',
    }
  }

  async refresh() {
    const agents = await getAgents()
    this.setState(() => ({ agents }))
  }

  async addAgent() {
    const { agentName } = this.state
    addAgent({ name: agentName })
  }

  onAgentNameChange(e) {
    const agentName = e.target.value
    this.setState(() => ({ agentName }))
  }

  render() {
    const { agents, agentName } = this.state

    return (
      <div>
        <PageHeader />
        <div>
          <Button onClick={() => this.refresh()}>refresh</Button>
          {agents.map(agent => <div>{agent.name}</div>)}
          <hr />
          <FormControl
            type="text"
            value={agentName}
            placeholder="agent name"
            onChange={e => this.onAgentNameChange(e)}
          />
          <Button onClick={() => this.addAgent()}>add agent</Button>
        </div>
      </div>
    )
  }
}
