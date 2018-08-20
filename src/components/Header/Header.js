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
  // openClose,
  // openCloseSidebar,
  username
}) => {
  return (
    <div className="customer-header">
      {loading ?
        <ProgressBar bsStyle='info'  now={ 120 }/>
        :
        <ProgressBar bsStyle='info'  now={0} />
      }
      <ConnectionStatus />
      <div className="nav-topbar-flex">
        <div className="topbar-left">
          <h4><Link onClick={() => browserHistory.goBack()}><i className="icon-arrow-left"></i></Link>{children.props.location.pathname == '/new'? 'Campaign Setting' :children.props.location.pathname.replace(/^\/+/g, '')}</h4>
        </div>
        {/* <div className="topbar-left-hamburger">
          <h4><Link onClick={openCloseSidebar}><i className={openClose?'fa fa-times mr-1':'fa fa-bars mr-1'}></i></Link></h4>
        </div> */}
        <ul className="list-unstyled list-inline topbar-right float-right ml-2 mb-0 nav-custom-header">
          <li className="dropdown notification-list">
            <div className="profile-dropdown">
              <a
                className="nav-link dropdown-custom-toggle nav-user"
                // data-toggle="dropdown"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
                style={{cursor:'pointer'}}
                onClick={openCloseDropdown}
              >

                <div className="avatar" ><span className="profile-name">{username ? username.charAt(0).toUpperCase():'?'}</span></div>
                <div className="full-name" ><span>{username ? username.charAt(0).toUpperCase() + username.slice(1): 'Anonymous'} &nbsp;<i className="icon-arrow-down"></i></span></div>

              </a>
            </div>

            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown" style={dropdownStyle}>
              <div className="dropdown-item noti-title">
                <h6 className="text-overflow m-0"></h6>
              </div>

              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <i className="fi-head"></i>
                <span onClick={openProfile}>Your Profile</span>
              </a>

              <a href="javascript:void(0);" className="dropdown-item notify-item" onClick={renderHelp}>
                <i className="fi-help"></i>
                <span>Support</span>
              </a>

              <a href="javascript:void(0);" className="dropdown-item notify-item" onClick={logout} >
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
