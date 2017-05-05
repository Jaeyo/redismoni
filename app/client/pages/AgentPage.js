import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageHeader from '../components/headers/PageHeader'


class AgentPage extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <div>hello</div>
      </div>
    )
  }
}

export default connect(
)(AgentPage)
