import React, {Component} from 'react';
import { Nav, NavDropdown, MenuItem} from 'react-bootstrap';
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

  render() {
    return (<div>
      <div className="brodcastmsg">
        {/* <span>Welcome to useinfluence.co</span> */}

      </div>
      <Nav pullRight="pullRight">
        <NavDropdown eventKey={4} title="Account" id="basic-nav-dropdown-right">
          <MenuItem eventKey={4.1} onClick={this.upgrade}>Upgrade</MenuItem>
          <MenuItem eventKey={4.2} onClick={this.logout}>Logout</MenuItem>

        </NavDropdown>

      </Nav>
    </div>);
  }
}

export default HeaderLinks;
