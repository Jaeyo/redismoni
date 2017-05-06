import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { browserHistory, Link } from 'react-router'
import Urls from '../../common/Urls'


export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={Urls.pages.home()}>
          Redismoni
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem onClick={() => browserHistory.push(Urls.pages.agents())}>agent</NavItem>
    </Nav>
  </Navbar>
)
