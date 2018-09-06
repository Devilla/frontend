import React, { Component } from 'react';
import { Link } from 'react-router';
import { Influence, InfluenceMobile } from 'img';
import { Col } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';

import appRoutes from 'routes/app';
import './Sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      collapse:true
    };
  }

  activeRoute() {
    return 1;
  }

  handleCollapse() {
    this.setState({collapse: !this.state.collapse});
  }

  setBreadCrumbs(crumb) {
    const breadcrumb = {
      name: crumb.name,
      path: crumb.path
    };
    this.props.setBreadCrumbs([breadcrumb]);
  }

  render() {
    const { disableButton, openClose, user, renderHelp } = this.props;
    const campaignValidation = user && user.path == '/getting-started';

    return (
      <div id="side-menu" className="left side-menu" style={!openClose && this.state.collapse  ?{width: '70px'}:{}}>
        <div className="slimscroll-menu">
          <div className="user-box">
            <h5></h5>
            <p className="text-muted"></p>
          </div>
          {!openClose && this.state.collapse?
            <div
              className="topbar-left"
              style={{ width: '62px' }}
            >
              <span>
                <Link to="/dashboard" className="logo">
                  <img src={InfluenceMobile} className="" alt="influence-img" height="60" width="60"/>
                </Link>
              </span>
            </div>
            :
            <div
              className="topbar-left mt-3 ml-2 pt-2 pl-2"
              style={{ width: '200px' }}
            >
              <Link to="/dashboard" className="logo ">
                <span>
                  <img src={Influence} className="ml-2" alt="influence-img" height="40" />
                </span>
              </Link>
            </div>
          }



          <div id="sidebar-menu">
            <div className="button-list">
              <Link to={user && user.status == 'paused'?'':'/new'} className={user && user.status == 'paused'?'disabled-link':''} data-tip={user && user.status == 'paused'? 'Resume your account to create Campaign' : 'Create New Campaign'}>
                {!openClose && this.state.collapse?
                  <button
                    type="button"
                    className="btn btn-primary waves-effect addnew-small-btn addnew-btn p-2 text-center" style={user && user.status == 'paused'?{backgroundColor: 'gray'}:{borderRadius:'50px'}}
                    onClick={() => this.setBreadCrumbs({name: 'Create Campaign', path: '/new'})}
                  >
                    <i className="fi-plus " style={{paddingLeft:'3px'}} />&nbsp;{' '}
                  </button>
                  :
                  <button
                    type="button"
                    className="btn btn-primary waves-effect  addnew-btn  ml-4 p-2  pt-0 pb-0  w-lg "
                    onClick={() => this.setBreadCrumbs({name: 'Create Campaign', path: '/new'})}
                  >
                    <i className="fi-plus "/>&nbsp;{' '}
                    <span className="h6">New</span>{' '}
                  </button>
                }

              </Link>
            </div>
            <ul className="metismenu mt-5" id="side-menu">
              {appRoutes.map((prop, key) => {
                if (!prop.redirect)
                  return (
                    <li className={prop.upgrade ? 'active newbtn' : this.activeRoute(prop.path)} key={key}>
                      {prop.name === 'Help & Support' ?
                        <Link onClick={renderHelp} data-tip={prop.name} data-place="right" className={prop.upgrade && disableButton ? 'new disabled-link' : (disableButton || campaignValidation) && prop.name != 'Getting Started' ? 'disabled-link nav-link card' : prop.upgrade ? 'new nav-link' : 'nav-link card'} disabled={(disableButton || campaignValidation)  && prop.name != 'Getting Started'} activeClassName="active">
                          {
                            prop.upgrade ? '' : <i className={prop.icon} ></i>
                          }
                          {openClose && this.state.collapse ?
                            <span>{prop.upgrade}{prop.name}</span>
                            :
                            !this.state.collapse ?
                              <span>{prop.upgrade}{prop.name}</span>
                              :
                              null
                          }
                        </Link>
                        :
                        <Link onClick={() => this.setBreadCrumbs(prop)} to={prop.path} data-tip={prop.name} data-place="right" className={prop.upgrade && disableButton ? 'new disabled-link' : (disableButton || campaignValidation) && prop.name != 'Getting Started' ? 'disabled-link nav-link card' : prop.upgrade ? 'new nav-link' : 'nav-link card'} disabled={(disableButton || campaignValidation)  && prop.name != 'Getting Started'} activeClassName="active">
                          { prop.name=='Getting Started' && <span className="red-dot"></span> }
                          {
                            prop.upgrade ? '' : <i className={prop.icon} ></i>
                          }
                          {openClose && this.state.collapse ?
                            <span>{prop.upgrade}{prop.name}</span>
                            :
                            !this.state.collapse ?
                              <span>{prop.upgrade}{prop.name}</span>
                              :
                              null
                          }
                        </Link>
                      }
                    </li>
                  );
                return null;
              })
              }
              {this.state.collapse?
                <div className="custombottom"  style={{width: '40px',marginTop: '228px'}}>
                  <hr/>
                  <Col md={1} className="">
                    <div className="text-left">
                      <i className="icon-arrow-right" onClick={()=>this.handleCollapse()}></i>
                    </div>
                    <hr/>
                  </Col>
                </div>
                :
                <div className="custombottom ">
                  <hr/>
                  <Col md={12}>
                    <div className="text-right">
                      <i className="icon-arrow-left" onClick={()=>this.handleCollapse()}></i>
                    </div>
                    <hr/>
                  </Col>
                </div>
              }
            </ul>
          </div>
          <div className="clearfix" />
        </div>
        <ReactTooltip />
      </div>
    );
  }
}


export default Sidebar;
