import React from 'react';
import './Header.scss';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import  ConnectionStatus  from './ConnectionStatus';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';

const Header = ({openCloseDropdown, dropdownStyle, logout, renderHelp, openProfile, loading, children}) => {

  return (
    <div className="customer-header">
      {loading ?
        <ProgressBar bsStyle='primary' now={ 120 }/>
        :
        <ProgressBar bsStyle='primary' now={0} />
      }
      <ConnectionStatus />
      <div className="nav-topbar-flex">
        <div className="topbar-left">
          <h4><Link onClick={() => browserHistory.goBack()}><i className="icon-arrow-left mr-3"></i></Link>{children && children.props.location.pathname == '/new'? 'Campaign Setting' :children && children.props.location.pathname.replace(/^\/+/g, '')}</h4>
        </div>

        <ul className="list-unstyled topbar-right-menu float-right mb-0 nav-custom-header  rounded-circle">
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle nav-user"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
              style={{cursor:'pointer'}}
              onClick={openCloseDropdown}
            >
              <i className=" mdi mdi-account-settings-variant"></i>
              <span className="ml-1">
              </span>
            </a>
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
