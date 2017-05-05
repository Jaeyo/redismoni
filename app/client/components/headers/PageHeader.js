import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { browserHistory } from 'react-router'


export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        Redismoni
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem onClick={() => browserHistory.push('/home2')}>test1</NavItem>
      <NavItem>
      </NavItem>
    </Nav>
  </Navbar>
)

