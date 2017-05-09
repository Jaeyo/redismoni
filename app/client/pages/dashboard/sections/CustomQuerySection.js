import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormControl, Button } from 'react-bootstrap'
import { requestSampleQuery as requestSampleQueryAction } from '../../../actions/AddWidget';
import { selectSampleQueryResult } from '../../../selector/AddWidget';
import { isEmpty } from '../../../../../common/Utils';
import MetricDataGrid from '../../../components/metric/MetricDataGrid';
import MetricDataLineChart from '../../../components/metric/MetricDataLineChart';


class CustomQuerySection extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
    }
  }

  onChangeInput(e) {
    const query = e.target.value
    this.setState(() => ({ query }))
  }

  onSubmit(e) {
    // TODO
  }

  render() {
    const { sampleQueryResult, requestSampleQuery } = this.props
    const { query } = this.state
    return (
      <div>
        <FormControl
          type="text"
          value={query}
          onChange={e => this.onChangeInput(e)}
          placeholder="query"
        />
        <Button onClick={e => requestSampleQuery(query)}>preview</Button>
        <Button onClick={e => this.onSubmit(e)}>submit</Button>
        {isEmpty(sampleQueryResult) ? null : (
          <div>
            <MetricDataGrid data={sampleQueryResult} />
            <MetricDataLineChart data={sampleQueryResult} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sampleQueryResult: selectSampleQueryResult(state),
})

const mapDispatchToProps = dispatch => ({
  requestSampleQuery: query => dispatch(requestSampleQueryAction(query)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomQuerySection)
