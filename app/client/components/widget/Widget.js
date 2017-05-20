import React, { Component } from 'react'
import { widgetTypes } from '../../../../common/domains/dashboard/Constants'
import MetricDataLineChart from '../metric/MetricDataLineChart'


export default class Widget extends Component {
  componentWillMount() {
    const { widget } = this.props
    const { uuid } = widget
    this.props.requestWidgetData(uuid)
  }

  render() {
    const { widget, isLoading, data } = this.props
    const { type } = widget

    // TODO IMME: isLoaindg

    if (type === widgetTypes.lineChart) {
      return <MetricDataLineChart data={data} />
    }
  }
}
