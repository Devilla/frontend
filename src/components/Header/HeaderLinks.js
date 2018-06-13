import React, {Component} from 'react';
import {NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import {browserHistory} from 'react-router';

class HeaderLinks extends Component {
  logout() {
    localStorage.removeItem('authToken');
    // window.location.assign(window.location.origin+'/');
    browserHistory.push('/');
  }

  upgrade() {
    browserHistory.push('/upgrade');
  }

  settings() {
    browserHistory.push('/dashboard');
  }
  myaccount() {
    browserHistory.push('/dashboard');
  }

  render() {
    return (
    <div>
      <Nav pullRight>
        <NavDropdown eventKey={4} title="Account" id="basic-nav-dropdown-right">
          <MenuItem eventKey={4.1} onClick={this.myaccount}>My Account</MenuItem>
          <MenuItem eventKey={4.2} onClick={this.settings}>Settings</MenuItem>
          <MenuItem eventKey={4.3} onClick={this.upgrade}>Upgrade </MenuItem>
          <MenuItem eventKey={4.4} onClick={this.logout}>Log out </MenuItem>
        </NavDropdown>
      </Nav>
    </div>);
  }
}

export default HeaderLinks;
