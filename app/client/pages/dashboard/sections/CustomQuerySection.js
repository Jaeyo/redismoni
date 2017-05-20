import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormControl, Button } from 'react-bootstrap'
import { requestSampleQuery as requestSampleQueryAction, requestAddWidget as requestAddWidgetAction } from '../../../actions/AddWidget';
import { selectSampleQueryResult } from '../../../selector/AddWidget';
import { isEmpty } from '../../../../../common/Utils';
import MetricDataGrid from '../../../components/metric/MetricDataGrid';
import MetricDataLineChart from '../../../components/metric/MetricDataLineChart';
import { message } from 'antd'
import { widgetTypes } from '../../../../../common/domains/dashboard/Constants';


class CustomQuerySection extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      query: 'select * from metric',
    }
  }

  onChangeInput(e) {
    const query = e.target.value
    this.setState(() => ({ query }))
  }

  onSubmit(e) {
    const { name, query } = this.state
    const { requestAddWidget } = this.props

    if (isEmpty(name)) {
      message.error('name is empty')
      return
    }

    if (isEmpty(query)) {
      message.error('query is empty')
      return
    }

    const type = widgetTypes.lineChart
    requestAddWidget(name, type, query)
  }

  render() {
    const { sampleQueryResult, requestSampleQuery } = this.props
    const { name, query } = this.state
    return (
      <div>
        <FormControl
          type="text"
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
          placeholder="name"
        />
        <FormControl
          type="text"
          value={query}
          onChange={e => this.setState({ query: e.target.value })}
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
  requestAddWidget: (name, type, query) => dispatch(requestAddWidgetAction(name, type, query)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomQuerySection)
