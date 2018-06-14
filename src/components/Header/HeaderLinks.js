import React, { Component } from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { browserHistory, Link } from 'react-router';

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
          <NavDropdown eventKey={4} title={<i className="fi-speech-bubble"></i>} id="basic-nav-dropdown" className="text-muted h5 dropdown notification-list" >
            <MenuItem eventKey={4.1} onClick={() => { browserHistory.push("/dashboard") }}>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
                <div className="dropdown-item noti-title">
                  <h5 className="m-0"><span className="float-right"> </span>Get Help</h5>
                </div>
                <div className="" style={{ maxHeight: "100px" }}>
                  <Link to="#hello" className="dropdown-item notify-item">
                    <button type="button" className="btn btn-block btn-info waves-effect waves-light w-lg"> <span>Click to talk</span> </button>
                  </Link>
                </div>
              </div>
            </MenuItem>
          </NavDropdown>
          <MenuItem eventKey={5} onClick={() => { browserHistory.push("/upgrade") }} className="text-muted h5"><i className="fi-bar-graph-2 "></i> &nbsp;Upgrade </MenuItem>
          <NavDropdown eventKey={6} title="My Account" id="basic-nav-dropdown" className="text-muted h5 ">
            <MenuItem eventKey={6.1} className="small-meta">Welcome! </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={6.2} onClick={this.myaccount}><i className="fi-head"></i>&nbsp; Profile</MenuItem>
            <MenuItem eventKey={6.3} onClick={this.settings}><i className="fi-cog"></i>&nbsp;Settings</MenuItem>
            <MenuItem eventKey={6.4} onClick={this.upgrade}><i className="fi-bar-graph"></i>&nbsp;Upgrade </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={6.5} onClick={this.logout}><i className="fi-unlock"></i>&nbsp;Log out </MenuItem>
          </NavDropdown>
        </Nav>
      </div>);
  }
}

export default HeaderLinks;
