import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Widget from '../components/widget/Widget'
import { requestWidgetData } from '../actions/DashBoard'
import { selectIsWidgetLoading, selectWidgetData } from '../selector/DashBoard'


const mapStateToProps = (state, { widget }) => ({
  isLoading: selectIsWidgetLoading(state, widget.uuid),
  data: selectWidgetData(state, widget.uuid),
})

const mapDispatchToProps = dispatch => ({
  requestWidgetData: uuid => dispatch(requestWidgetData(uuid)),
})

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  _.merge(stateProps, dispatchProps, ownProps)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Widget)
