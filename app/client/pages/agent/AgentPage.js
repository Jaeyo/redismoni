import React, { Component } from 'react'
import { connect } from 'react-redux'
import { } from 'react-bootstrap'
import PageHeader from '../../components/headers/PageHeader'
import AgentsSection from './tabs/AgentsSection'


class AgentPage extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <AgentsSection />
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AgentPage)
