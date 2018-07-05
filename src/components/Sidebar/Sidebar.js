import React, { Component } from 'react';
import { Link } from 'react-router';
import { Influence } from 'img';
import { Col, ProgressBar } from 'react-bootstrap';
import appRoutes from 'routes/app';
import './Sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      quotaPercentage:0,

    };

  }



  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }


  render() {
    const { disableButton, profile } = this.props;
    let quotaPercentage = profile?Math.round(100*profile.uniqueVisitors/profile.uniqueVisitorQouta):0;

    return (
      <div className="left side-menu">
        <div>
          <div className="user-box">
            <h5></h5>
            <p className="text-muted"></p>
          </div>
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
          <div id="sidebar-menu">
            <div className="button-list ml-2 pl-2">
              <Link to="/new">
                <button
                  type="button"
                  className="btn btn-pink waves-effect  ml-4 p-2  pt-0 pb-0  w-lg "
                >
                  <i className="fi-plus "/>&nbsp;{' '}
                  <span className="h6">New</span>{' '}
                </button>
              </Link>
            </div>

            <ul className="metismenu mt-5" id="side-menu">
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
              })
              }
              <div className="custombottom ml-2 mb-5">
                <hr/>

                <Col md={12} className="pt-4">
                  <div className="text-center">
                    <ProgressBar striped active bsStyle={quotaPercentage<60?'info':quotaPercentage<90?'warning':'danger'} now={quotaPercentage} key={1} />
                  </div>
                  <div className="ml-4 ">
                    <p className="textColor">{quotaPercentage} % consumed.</p>
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
