import React, { Component } from 'react';
import { Link } from 'react-router';
import { Influence, InfluenceMobile } from 'img';
import {Col} from 'react-bootstrap';
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

  render() {
    const { disableButton, openClose } = this.props;
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
              style={{ width: '40px' }}
            >
              <Link to="/dashboard" className="logo">
                <span>
                  <img src={InfluenceMobile} className="" alt="influence-img" height="40" width="40"/>
                </span>
              </Link>
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
            <div className="button-list ml-1 pl-2">
              <Link to="/new">
                {!openClose && this.state.collapse?
                  <button
                    data-tip="Create New Campaign"
                    type="button"
                    className="btn btn-primary waves-effect addnew-small-btn addnew-btn p-2 text-center" style={{borderRadius:'50px'}}
                  >
                    <i className="fi-plus " style={{paddingLeft:'3px'}} title="Create New Campaign"/>&nbsp;{' '}
                    {/* <span className="h6">New</span>{' '} */}
                  </button>
                  :
                  <button
                    data-tip="Create New Campaign"
                    type="button"
                    className="btn btn-primary waves-effect  addnew-btn  ml-4 p-2  pt-0 pb-0  w-lg "
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
                      {prop.name === 'Help' ?
                        <Link onClick={this.renderHelp} className={disableButton ? 'disabled-link' : 'nav-link'} disabled={disableButton} activeClassName="active">
                          <i data-tip={prop.name} data-place="right" className={prop.icon} title="Create New Campaign"></i>
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
                        <Link to={prop.path} className={prop.upgrade && disableButton ? 'new disabled-link' : disableButton ? 'disabled-link' : prop.upgrade ? 'new nav-link' : 'nav-link'} disabled={disableButton} activeClassName="active">
                          {
                            prop.upgrade ? '' : <i data-tip={prop.name} data-place="right" className={prop.icon} title="Create New Campaign"></i>
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
