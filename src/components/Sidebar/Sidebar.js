import React, { Component } from 'react';
import { Link } from 'react-router';
import { Influence } from 'img';
import appRoutes from 'routes/app';
import './Sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      dropValue: {display: 'none'}
    };
    this.openDropdown = this.openDropdown.bind(this);
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }

  openDropdown() {
    if(this.state.dropValue.display == 'none')
      this.setState({dropValue: {display:'block'}});
    else
      this.setState({dropValue: {display:'none'}});
  }

  render() {
    const { disableButton } = this.props;
    return (
      <div className="left side-menu">
        <div>
          <div className="user-box">
            <h5></h5>
            <p className="text-muted"></p>
          </div>
          <div className="topbar-left mt-3 ml-2 pt-2 pl-2" style={{width:'200px'}}>
            <Link to="/dashboard" className="logo ">
              <span>
                <img src={Influence} alt="influence-img" height="35" />
              </span>
            </Link>
          </div>


          <div id="sidebar-menu">
            <div className="button-list">
              <Link to="/new"><button type="button" className="btn  btn-pink waves-effect  ml-4 p-2  pt-0 pb-0 mb-4 w-lg "><i className="fi-plus " style={{fontSize:'15px'}}></i>&nbsp; <span className="h5">New</span> </button></Link>
            </div>

            <ul className="metismenu" id="side-menu">
              {
                appRoutes.map((prop, key) => {
                  if (!prop.redirect)
                    return (
                      <li className={prop.upgrade ? 'active newbtn' : this.activeRoute(prop.path)} key={key}>
                        {prop.name === 'Help' ?
                          <Link onClick={this.renderHelp} className={disableButton ? 'disabled-link' : 'nav-link'} disabled={disableButton} activeClassName="active">
                            <i className={prop.icon}></i>
                            <span>{prop.upgrade}{prop.name}</span>
                          </Link>
                          :
                          <Link to={prop.path} className={prop.upgrade && disableButton ? 'new disabled-link' : disableButton ? 'disabled-link' : prop.upgrade ? 'new nav-link' : 'nav-link'} disabled={disableButton} activeClassName="active">
                            {
                              prop.upgrade ? '' : <i className={prop.icon}></i>
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
                <a onClick={this.openDropdown}><i className="fi-location-2"></i> <span> Beta Features </span> <span className="menu-arrow"></span></a>
                <ul className="nav-second-level" aria-expanded="false" style={this.state.dropValue}>
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
