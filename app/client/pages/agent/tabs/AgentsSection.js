import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectAgents } from '../../../selector/Agent'
import { requestAgents as requestAgentsAction } from '../../../actions/Agent'
import { Button } from 'react-bootstrap'
import SimpleAgentItem from '../../../components/agent/SimpleAgentItem'


class AgentsSection extends Component {
  render() {
    const { agents, requestAgents } = this.props
    return (
      <div>
        <Button onClick={() => requestAgents()}>refresh</Button>
        {agents.map(agent => <SimpleAgentItem key={agent.uuid} agent={agent} /> )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  agents: selectAgents(state)
})

const mapDispatchToProps = dispatch => ({
  requestAgents: () => dispatch(requestAgentsAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgentsSection)
