import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeader from '../../components/headers/PageHeader';
import { Accordion, Panel } from 'react-bootstrap';
import CustomQuerySection from './sections/CustomQuerySection';


class AddWidgetPage extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <div>
          <h1>add widget</h1>
          <Accordion>
            <Panel header="custom query widget" eventKey="1" defaultExpanded={true}>
              <CustomQuerySection />
            </Panel>
            <Panel header="redis widget" eventKey="2">
            </Panel>
          </Accordion>
        </div>
      </div>
    )
  }
}

export default connect(
)(AddWidgetPage)
