import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import { Link, browserHistory } from 'react-router'
import Urls from '../../common/Urls'


export default () => (
  <Navbar>
    <NavbarBrand>
      <Link to={Urls.pages.home()}>Redismoni</Link>
    </NavbarBrand>
    <Nav>
      <NavItem onClick={() => browserHistory.push(Urls.pages.agents())}>agent</NavItem>
      <NavItem>
      </NavItem>
    </Nav>
  </Navbar>
)

