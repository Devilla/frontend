import React from 'react';
import './Header.scss';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import  ConnectionStatus  from './ConnectionStatus';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';

const Header = ({
  openCloseDropdown,
  dropdownStyle,
  logout,
  renderHelp,
  openProfile,
  loading,
  children,
  username
}) => {
  return (
    <div className="customer-header">
      {loading ?
        <ProgressBar bsStyle='info'  now={ 120 }/>
        :''
      }
      <div className="cookie-notice-container" style={{display:'block'}}>
        <div className="cookie-text">
          <span className="cookie-label">You have reached the 30 day limit, to keep your campaigns running, Please Followed by the upgrade button.</span>
          <button type="button">Upgrade</button>
        </div>
      </div>
      <ConnectionStatus />
      <div className="nav-topbar-flex">
        <div className="topbar-left">
          <h4><Link onClick={() => browserHistory.goBack()}><i className="icon-arrow-left"></i></Link>{children.props.location.pathname == '/new'? 'Campaign Setting' :children.props.location.pathname.replace(/^\/+/g, '')}</h4>
        </div>
        <ul className="list-unstyled list-inline topbar-right float-right ml-2 mb-0 nav-custom-header">
          <li className="dropdown notification-list">
            <div className="profile-dropdown name-header">
              <a
                className="nav-link dropdown-custom-toggle nav-user"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
                style={{cursor:'pointer'}}
                onClick={openCloseDropdown}
              >

                <div className="avatar" ><span className="profile-name">{username ? username.charAt(0).toUpperCase():'?'}</span></div>
                <div className="full-name" >
                  <span>{username ? username.charAt(0).toUpperCase() + username.slice(1): 'Anonymous'} &nbsp;

                  </span>

                </div>
                <div>
                  {dropdownStyle.visibility == 'visible'?
                    <i className="icon-arrow-up"></i>
                    :
                    <i className="icon-arrow-down"></i>
                  }
                </div>

              </a>
            </div>

            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown" style={dropdownStyle}>

              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <i className="fi-head"></i>
                <span onClick={openProfile}>Your Profile</span>
              </a>

              <a href="javascript:void(0);" className="dropdown-item notify-item" onClick={renderHelp}>
                <i className="fi-help"></i>
                <span>Support</span>
              </a>

              <a href="javascript:void(0);" className="dropdown-item notify-item logout-btn" onClick={logout} >
                <i className="fi-power"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  loading: state.getIn(['loading', 'state']),
});

export default connect(mapStateToProps)(Header);
