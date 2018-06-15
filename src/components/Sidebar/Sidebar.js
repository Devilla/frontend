import React, { Component } from 'react';
import { Link, } from 'react-router';
import HeaderLinks from '../Header/HeaderLinks';
import logo from '../../containers/DashboardContainer/asset/images/influence.png';
import appRoutes from 'routes/app';
import './Sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    }
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }



  render() {
    const { disableButton } = this.props;
    return (

      <div className="left side-menu">
        <div>
          <div className="user-box">
            <h5></h5>
            <p clasName="text-muted"></p>
          </div>
          <div className="topbar-left mt-3 pt-1">
            <Link to="/dashboard" class="logo ">
              <span>
                <img src={logo} alt="influence-img" height="35" />
              </span>
            </Link>
          </div>


          <div id="sidebar-menu">
            <div className="button-list">
              <Link to="/new"><button type="button" className="btn  btn-pink waves-effect  ml-5 p-2  pt-0 pb-0 mb-4 w-lg "><i className="fi-file-add " style={{fontSize:"15px"}}></i>&nbsp; <span className="h4">New</span> </button></Link>
            </div>

            <ul className="metismenu" id="side-menu">
              {this.state.width <= 991 ? (<HeaderLinks />) : null}
              {
                appRoutes.map((prop, key) => {
                  if (!prop.redirect)
                    return (
                      <li className={prop.upgrade ? "active newbtn" : this.activeRoute(prop.path)} key={key}>
                        {prop.name === 'Help' ?
                          <Link onClick={this.renderHelp} className={disableButton ? 'disabled-link' : "nav-link"} disabled={disableButton} activeClassName="active">
                            <i className={prop.icon}></i>
                            <span>{prop.upgrade}{prop.name}</span>
                          </Link>
                          :
                          <Link to={prop.path} className={prop.upgrade && disableButton ? "new disabled-link" : disableButton ? 'disabled-link' : prop.upgrade ? "new nav-link" : "nav-link"} disabled={disableButton} activeClassName="active">
                            {
                              prop.upgrade ? "" : <i className={prop.icon}></i>
                            }
                            <span>{prop.upgrade}{prop.name}</span>
                          </Link>
                        }
                      </li>
                    );
                  return null;
                })
              }
              <li className="menu-title">More</li>
              <li>
                  <a href ="#dashboard"><i className="fi-location-2"></i> <span> Beta Features </span> <span className="menu-arrow"></span></a>
                  <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="#dashboard">Live Stream</a></li>
                  </ul>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>


    );
  }
}

export default Sidebar;
