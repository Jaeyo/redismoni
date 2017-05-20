import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectWidgets } from '../../../selector/DashBoard';
import { requestWidgets as requestWidgetsAction } from '../../../actions/DashBoard';
import WidgetContainer from '../../../containers/WidgetContainer';


class WidgetsSection extends Component {
  componentWillMount() {
    this.props.requestWidgets()
  }

  renderWidgets() {
    const { widgets } = this.props
    return widgets.map(widget => (
      <WidgetContainer key={widget.uuid} widget={widget} />
    ))
  }

  render() {
    return (
      <div>
        {this.renderWidgets()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  widgets: selectWidgets(state),
})

const mapDispatchToProps = dispatch => ({
  requestWidgets: () => dispatch(requestWidgetsAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WidgetsSection)
