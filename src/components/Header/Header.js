import React from 'react';
import './Header.scss';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import  ConnectionStatus  from './ConnectionStatus';
import { connect } from 'react-redux';
import { ProgressBar, Nav, Navbar, NavDropdown, MenuItem, Breadcrumb } from 'react-bootstrap';
import moment from 'moment';

const Header = ({
  profile,
  logout,
  renderHelp,
  openProfile,
  loading,
  username,
  breadcrumb,
  setBreadCrumbs
}) => {

  const removeItems = (index) => {
    let breadcrumbs = breadcrumb;
    breadcrumbs.splice(index+1);
    setBreadCrumbs(breadcrumbs);
  };

  const renderBreadCrums = () => {
    return breadcrumb.map((crumb, index) => <Breadcrumb.Item active key={crumb.name+index}><Link to={crumb.path?crumb.path:''} onClick={() => removeItems(index)}>{crumb.name}</Link></Breadcrumb.Item>);
  };

  return (
    <div className="customer-header">
      {loading ?
        <ProgressBar bsStyle='info'  now={ 120 }/>
        :''
      }
      <div
        className="cookie-notice-container"
        style={
          profile &&
          profile.plan &&
          profile.plan.name == 'Beta Plan' &&
          profile.uniqueVisitors > 1000 &&
          moment(profile.plan.updated_at).format() <= moment().format() ?
            { display: 'block', marginBottom: '-10px' }
            :
            { display: 'none' }
        }>
        <div className="cookie-text">
          <span className="cookie-label text-center"><i className="fa fa-spinner fa-pulse mr-2"></i>You have reached your 30 day free account limit, please upgrade to keep your campaign running.</span>
          <button type="button" onClick={()=>{browserHistory.push('/upgrade');}}>Upgrade</button>
        </div>
      </div>
      <ConnectionStatus />
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Breadcrumb>
              {renderBreadCrums()}
            </Breadcrumb>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown
            eventKey={3}
            title={
              <div className="dropdown-title">
                <div className="avatar" ><span className="profile-name">{username ? username.charAt(0).toUpperCase():'?'}</span></div>
                <div className="user-name" >
                  <span>{username ? username.charAt(0).toUpperCase() + username.slice(1): 'Anonymous'}</span>
                </div>
                <div className="dropdown-arrow">
                  <i className="icon-arrow-up"></i>
                  <i className="icon-arrow-down"></i>
                </div>
              </div>
            }
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={3.1}>
              <i className="fi-head"></i>
              <span onClick={openProfile}>Your Profile</span>
            </MenuItem>
            <MenuItem eventKey={3.3} onClick={() => renderHelp(null, true)}>
              <i className="fi-help"></i>
              <span>Support</span>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4} onClick={logout}>
              <i className="fi-power"></i>
              <span>Logout</span>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};


const mapStateToProps = state => ({
  loading: state.getIn(['loading', 'state']),
});

export default connect(mapStateToProps)(Header);
