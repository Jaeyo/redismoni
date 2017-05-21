import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageHeader from '../../components/headers/PageHeader'
import { addAgent, getAgents } from '../../apis/Agent'
import { selectAgents } from '../../selector/Agent'
import { requestAgents as requestAgentsAction } from '../../actions/Agent'
import { Button, FormControl } from 'react-bootstrap'


class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      agentName: ''
    }
  }

  refresh() {
    this.props.requestAgents()
  }

  async addAgent() {
    const { agentName } = this.state
    const result = await addAgent({ name: agentName })
    if (result) {
      this.props.requestAgents()
    }
  }

  onAgentNameChange(e) {
    const agentName = e.target.value
    this.setState(() => ({ agentName }))
  }

  render() {
    const { agentName } = this.state
    const { agents } = this.props

    return (
      <div>
        <PageHeader />
        <div>
          <Button onClick={() => this.refresh()}>refresh</Button>
          {agents.map(agent => <div key={agent.uuid}>{agent.name}</div>)}
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

const mapStateToProps = state => ({
  agents: selectAgents(state),
})

const mapDispatchToProps = dispatch => ({
  requestAgents: () => dispatch(requestAgentsAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage)
