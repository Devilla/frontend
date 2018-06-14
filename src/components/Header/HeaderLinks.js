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
    browserHistory.push('/profile');
  }

  render() {
    return (
    <div>
      <Nav pullRight>
        <NavDropdown eventKey={4} title="My Account" id="basic-nav-dropdown" className="text-muted h5 ">
           <MenuItem eventKey={4.1} className= "small-meta">Welcome! </MenuItem>   
          <MenuItem divider/>
          <MenuItem eventKey={4.1} onClick={this.myaccount}><i className="fi-head"></i>&nbsp; Profile</MenuItem>
          <MenuItem eventKey={4.2} onClick={this.settings}><i className="fi-cog"></i>&nbsp;Settings</MenuItem>
          <MenuItem eventKey={4.3} onClick={this.upgrade}><i className="fi-bar-graph"></i>&nbsp;Upgrade </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={4.4} onClick={this.logout}><i className="fi-unlock"></i>&nbsp;Log out </MenuItem>
        </NavDropdown>
      </Nav>
    </div>);
  }
}

export default HeaderLinks;
