import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Popup from 'react-popup';
import { ToastContainer } from 'react-toastify';
import Loading from 'react-loading-animation';
import PageTransition from 'react-router-page-transition';

import { checkTokenExists } from 'ducks/auth';
import { setBreadCrumbs } from 'ducks/breadcrumb';
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
import './toast.scss';
import 'react-datepicker/dist/react-datepicker.css';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: true,
      disableButton: false,
      style: {},
      openClose: false
    };
  }

  componentWillMount() {

    document.body.style = 'background-color:#fafafa';
    this.checkLogin((err) => {
      if (err) {
        browserHistory.push('/login');
      }
    });
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

  componentDidUpdate(e) {
    if (window.innerWidth < 993 && this.props.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1) {
      document.documentElement.classList.toggle('nav-open');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.children != nextProps.children)
      window.scrollTo(0, 0);
  }

  openCloseDropdown = () => {
    if(Object.keys(this.state.style).length !== 0)
      this.setState({style: {}});
    else
      this.setState({style: {visibility: 'visible', opacity: 1}});
  }

  openCloseSidebar = () => {
    this.setState({openClose: !this.state.openClose});
  }


  closeDropdown = () => {
    this.setState({style: {}});
  }

  logout = () => {
    document.body.style = 'background-color:white';
    this.openCloseDropdown();
    localStorage.removeItem('authToken');
    browserHistory.push('/home');
  }

  renderHelp = (e, dropdown) => {
    if(dropdown)
      this.openCloseDropdown();
    Popup.create({
      title: 'How can we help you today?',
      content: <div className="help-container">
        <FormGroup>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline={true} className="radio-text" style={{textTransform:'none'}}>
              &nbsp;&nbsp; &nbsp; &nbsp;I need help setting up my Campaign
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline" className="radio-text" style={{textTransform:'none'}}>
              &nbsp;&nbsp; &nbsp; &nbsp;I want to know how to use Influence
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline" className="radio-text" style={{textTransform:'NONE'}}>
              &nbsp;&nbsp; &nbsp; &nbsp;Something is not working
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline" className="radio-text" style={{textTransform:'NONE'}}>
              &nbsp;&nbsp; &nbsp; &nbsp;I have feedback / feature request
            </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline" className="radio-text" style={{textTransform:'NONE'}}>
              &nbsp;&nbsp; &nbsp; &nbsp;I need help with something else
            </Radio>
          </Row>
        </FormGroup>
        <Row>
          <h4>Tell us more</h4>
          <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Briefly explain about the issue you are facing."></textarea>
        </Row>
      </div>,
      buttons: {
        right: [{
          text: 'Submit',
          className: 'success',
          action: function () {
            Popup.close();
          }
        }]
      }
    }, true);
  }

  settings = () => {
    this.openCloseDropdown();
    if(this.state.disableButton)
      return;
    browserHistory.push('/dashboard');
  }

  openProfile = () => {
    this.openCloseDropdown();
    if(this.state.disableButton)
      return;

    let breadcrumb = this.props.breadcrumb;
    breadcrumb = breadcrumb.filter(crumb => crumb.name !== 'Profile Settings');
    breadcrumb.push({
      name: 'Profile Settings',
      path: '/profile'
    });
    this.props.setBreadCrumbs(breadcrumb);

    browserHistory.push('/profile');
  }

  render() {
    const {  user, profile } = this.props;
    const { style , openClose, disableButton } = this.state;
    return (
      <div className="dashboard-container">
        <Popup />
        <div className="wrapper"  >

          {(!user || user.size == 0) && (!profile || profile == undefined) && <Loading strokeWidth="2" style={{height: '700px', width: '10%'}} isLoading={true} />}
          {user && (profile || profile !== undefined) && <Sidebar {...this.props} renderHelp={this.renderHelp} openClose={openClose} openCloseSidebar={this.openCloseSidebar} disableButton={disableButton} onClick={this.closeDropdown} />}
          {user && (profile || profile !== undefined) &&
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
                    dropdownStyle={style}
                    openClose={openClose}
                    openCloseSidebar={this.openCloseSidebar}
                    {...this.props}
                  />
                </nav>
              </div>

              <div className="content dashboard-content" style={{ backgroundColor: '#f9f9f9' }} onClick={this.closeDropdown}>
                <div>
                  <PageTransition className="content">
                    {this.props.children}
                  </PageTransition>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
        <ToastContainer hideProgressBar={true} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  campaignInfo: state.getIn(['campaign', 'campaignInfo']),
  user: state.getIn(['auth', 'user']),
  breadcrumb: state.getIn(['breadcrumb', 'breadcrumb'])
});

const mapDispatchToProps = {
  checkTokenExists,
  setBreadCrumbs
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(DashboardContainer);
