import React from 'react';
import { browserHistory } from 'react-router';
import PageHeader from '../../components/headers/PageHeader';
import { Button } from 'react-bootstrap';
import Urls from '../../../../common/Urls';
import WidgetsSection from './sections/WidgetsSection';


const DashBoardPage = () => (
  <div>
    <PageHeader />
    <div>
      <Button onClick={() => browserHistory.push(Urls.pages.addWidget())}>add widget</Button>
    </div>
    <WidgetsSection />
  </div>
)

export default DashBoardPage
