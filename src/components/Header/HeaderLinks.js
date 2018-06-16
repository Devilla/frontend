import React, {Component} from 'react';
import {
  Nav,
  NavDropdown,
  MenuItem,
  Radio,
  Row,
  FormGroup
} from 'react-bootstrap';
import {browserHistory, Link} from 'react-router';
import Popup from 'react-popup';

class HeaderLinks extends Component {
  logout() {
    localStorage.removeItem('authToken');
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

  help() {
    browserHistory.push('/help');
  }
  renderHelp() {
    Popup.create({
      title: 'How can we help you today',
      content: <div className="help-container">
        <FormGroup>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              I need help setting up my team
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              I want to know how to use flock
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              Something is not working
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              I have feedback / feature request
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              I need help with something else
            </Radio>
          </Row>
        </FormGroup>
        <Row>
          <h4>Tell us more</h4>
          <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Briefly explain what happened and steps to replicate the issue."></textarea>
        </Row>
      </div>,
      buttons: {
        left: [{
          text: 'Cancel',
          className: 'warning',
          action: function () {
            Popup.close();
          }
        }],
        right: [{
          text: 'Submit',
          className: 'primary',
          action: function () {
            Popup.close();
          }
        }]
      }
    }, true);
  }

  render() {
    return (
      <div>
        <Nav pullRight className="mr-5">
          <NavDropdown eventKey={4} title={<i className="fi-bell"></i>} id="basic-nav-dropdown" className="text-muted h4 dropdown notification-list" >
            <MenuItem eventKey={4.1} onClick={() => browserHistory.push('/dashboard')}>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
                <div className="dropdown-item noti-title">
                  <h5 className="m-0"><span className="float-right"> </span>Get Help</h5>
                </div>
                <div className="" style={{ maxHeight: '100px' }}>
                  <Link to="#hello" className="dropdown-item notify-item">
                    <button type="button" className="btn btn-block btn-info waves-effect waves-light w-lg"> <span>Click to talk</span> </button>
                  </Link>
                </div>
              </div>
            </MenuItem>
          </NavDropdown>

          <NavDropdown eventKey={6} title={<i className="fi-menu"></i>} id="basic-nav-dropdown" className="text-muted h4 ">
            <MenuItem eventKey={6.1} className="small-meta">Welcome! </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={6.2} onClick={this.myaccount}><i className="fi-head"></i>&nbsp; Profile</MenuItem>
            <MenuItem eventKey={6.3} onClick={this.upgrade}><i className="fi-bar-graph"></i>&nbsp;Upgrade </MenuItem>
            <MenuItem eventKey={6.4} onClick={this.renderHelp}><i className="fi-speech-bubble"></i>&nbsp;Help </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={6.5} onClick={this.settings}><i className="fi-cog"></i>&nbsp;Settings</MenuItem>
            <MenuItem eventKey={6.6} onClick={this.logout}><i className="fi-unlock"></i>&nbsp;Log out </MenuItem>
          </NavDropdown>
        </Nav>
      </div>);
  }
}

export default HeaderLinks;
