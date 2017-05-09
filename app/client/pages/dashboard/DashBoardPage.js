import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import PageHeader from '../../components/headers/PageHeader'
import { Button } from 'react-bootstrap'
import Urls from '../../../../common/Urls';


class DashBoardPage extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <div>
          <Button onClick={() => browserHistory.push(Urls.pages.addWidget())}>add widget</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
)(DashBoardPage)
