import React, { Component } from 'react';
import { Link } from 'react-router';
import { Influence } from 'img';
import {Col, ProgressBar } from 'react-bootstrap';
import appRoutes from 'routes/app';
import './Sidebar.scss';
//import 'containers/DashboardContainer/asset/css/style.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      uniqueVisitors:20000,
      uniqueVisitorQouta:30000,
      uniqueVisitorsQoutaLeft:29130,
    };
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }

  render() {
    var { disableButton, quotaPercentage=Math.round(100*this.state.uniqueVisitors/this.state.uniqueVisitorQouta) } = this.props;
    return (
      <div className="left side-menu">
        <div>
          <div className="user-box">
            <h5 />
            <p clasName="text-muted" />
          </div>
          <div
            className="topbar-left mt-3 ml-2 pt-2 pl-2"
            style={{ width: '200px' }}
          >
            <Link to="/dashboard" className="logo ">
              <span>
                <img src={Influence} alt="influence-img" height="35" />
              </span>
            </Link>
          </div>

          <div id="sidebar-menu">
            <div className="button-list ml-2 pl-2">
              <Link to="/new">
                <button
                  type="button"
                  className="btn btn-pink waves-effect  ml-4 p-2  pt-0 pb-0 mb-4 w-lg "
                >
                  <i className="fi-plus " style={{ fontSize: '15px' }} />&nbsp;{' '}
                  <span className="h5">New</span>{' '}
                </button>
              </Link>
            </div>

            <ul className="metismenu" id="side-menu">
              {appRoutes.map((prop, key) => {
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
              })}
              <hr />
              <div className="custombottom ml-2">
                <hr/>
                <div className="ml-3 pb-3">
                  <i className='pb-2 fi-cloud'></i>
                  <span className="ml-2 textColor">Plan Usage</span>
                </div>
                <Col md={12}>
                  <ProgressBar className="text-center">
                    <ProgressBar striped active bsStyle={quotaPercentage<60?'info':quotaPercentage<90?'warning':'danger'} now={quotaPercentage} key={1} />
                  </ProgressBar>
                  <div className="ml-4 ">
                    <p className=" textColor" textColor>{quotaPercentage} % consumed.</p>
                  </div>
                  <div className="ml-3">
                    <Link to='/Upgrade'><button
                      type="button"
                      className="btn btn-outline-primary btn-rounded waves-light waves-effect"
                    >
                      <i className="fi-cloud-upload"></i>
                  &nbsp;{' '}
                      <span className="p">Upgrade</span>{' '}
                    </button></Link>
                  </div>
                  <hr/>
                </Col>
              </div>
            </ul>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default Sidebar;
