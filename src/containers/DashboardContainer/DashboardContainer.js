import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Popup from 'react-popup';

import { checkTokenExists } from 'ducks/auth';
import { Header, Sidebar } from 'components';
import {
  Radio,
  Row,
  FormGroup
} from 'react-bootstrap';

import './asset/css/bootstrap.min.scss';
import './asset/scss/icons.scss';
import './animate.min.scss';
import 'react-select/dist/react-select.css';
import 'react-popup/style.css';
import './DashboardContainer.scss';


class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: true,
      disableButton: false,
      style: {}
    };
    this.openCloseDropdown = this.openCloseDropdown.bind(this);
    this.logout = this.logout.bind(this);
    this.renderHelp = this.renderHelp.bind(this);
    this.settings = this.settings.bind(this);
    this.openProfile = this.openProfile.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);

    this.checkLogin((err) => {
      if (err) {
        browserHistory.push('/login');
      } else {
        this.checkUserDetails(this.props.profile);
      }
    });
  }

  componentWillMount() {
    document.body.style = 'background-color:#f4f6f8';
  }

  componentWillUnmount() {
    document.body.style = 'background-color:white';
  }

  checkLogin(callback) {
    const cookie = localStorage.getItem('authToken');
    const authToken = cookie
      ? JSON.parse(cookie)
      : null;
    if (authToken) {
      this.props.checkTokenExists(authToken);
      callback();
    } else {
      callback('not logged in');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.profile && nextProps.user.size != 0 && !this.state.disableButton)
      this.checkUserDetails(nextProps.profile);
    if (this.props.profile != nextProps.profile && nextProps.profile && nextProps.profile.plan)
      this.setState({ disableButton: false });
  }

  checkUserDetails(profile) {
    const user = this.props.user;
    if (user && user.size !== 0 && (!profile || !profile.plan)) {
      this.setState({ disableButton: true });
      browserHistory.push('getting-started');
    }
  }

  componentDidUpdate(e) {
    if (window.innerWidth < 993 && this.props.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1) {
      document.documentElement.classList.toggle('nav-open');
    }
  }

  openCloseDropdown() {
    if(Object.keys(this.state.style).length !== 0)
      this.setState({style: {}});
    else
      this.setState({style: {visibility: 'visible', opacity: 1}});
  }

  closeDropdown() {
    this.setState({style: {}});
  }

  logout() {
    document.body.style = 'background-color:white';
    this.openCloseDropdown();
    localStorage.removeItem('authToken');
    browserHistory.push('/');
  }

  renderHelp() {
    this.openCloseDropdown();
    Popup.create({
      title: 'How can we help you today',
      content: <div className="help-container">
        <FormGroup>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline={true}>
              &nbsp;&nbsp;I need help setting up my Campaign
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              &nbsp;&nbsp;I want to know how to use Influence
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              &nbsp;Something is not working
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              &nbsp;&nbsp;I have feedback / feature request
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              &nbsp;&nbsp;I need help with something else
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

  settings() {
    this.openCloseDropdown();
    if(this.state.disableButton)
      return;
    browserHistory.push('/dashboard');
  }

  openProfile() {
    this.openCloseDropdown();
    if(this.state.disableButton)
      return;
    browserHistory.push('/profile');
  }

  render() {
    const {  user } = this.props;
    return (
      <div className="dashboard-container">
        <Popup />
        <div className="wrapper"  >

          {!this.state.render && <p>Please wait</p>}
          {this.state.render && <Sidebar {...this.props} disableButton={this.state.disableButton} onClick={this.closeDropdown} />}
          {this.state.render &&
          <div>
            <div className="content-page" >
              <div className="topbar" >
                <nav className="navbar-custom pl-0 pr-0">
                  <Header
                    username={user.username}
                    openCloseDropdown={this.openCloseDropdown}
                    logout={this.logout}
                    renderHelp={this.renderHelp}
                    settings={this.settings}
                    openProfile={this.openProfile}
                    dropdownStyle={this.state.style}
                    {...this.props}
                  />
                </nav>
              </div>

              <div className="content dashboard-content" style={{ backgroundColor: '#FFF' }} onClick={this.closeDropdown}>
                <div className="container-fluid p-2">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  user: state.getIn(['auth', 'user']),

});

const mapDispatchToProps = {
  checkTokenExists
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
