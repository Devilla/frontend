import React from 'react';
import { Avatar1 } from 'img';
import './Header.scss';

const Header = ({ openCloseDropdown, dropdownStyle, logout, renderHelp, openProfile }) => {
  return (
    <ul className="list-unstyled topbar-right-menu float-right mb-0 nav-custom-header">
      <li className="dropdown notification-list">
        <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
          <i className="fi-bell" style={{fontSize:'25px'}}></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
          <div className="dropdown-item noti-title">
            <h5 className="m-0">
              <span className="float-right"></span>Get Help
            </h5>
          </div>

          <div className="dropnavbars">
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <button type="button" className="btn btn-block btn-info waves-effect waves-light w-lg"> <span>Click to talk</span> </button>
            </a>
          </div>
        </div>
      </li>
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
          <img src={Avatar1} alt="user" className="rounded-circle" />
          <span className="ml-1">
            <i className="mdi mdi-chevron-down"></i>
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown" style={dropdownStyle}>
          <div className="dropdown-item noti-title">
            <h6 className="text-overflow m-0">Welcome !</h6>
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
  );
};

export default Header;
