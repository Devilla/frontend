import React, { Component } from 'react';
import { Link ,browserHistory } from 'react-router';
import { Influence } from 'img';
import { Col, ProgressBar } from 'react-bootstrap';
import { connect }  from  'react-redux';
import appRoutes from 'routes/app';
import { fetchCampaign,successCampaign } from 'ducks/campaign';
import './Sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      quotaPercentage:0,
      dropValue: {display: 'none'}
    };
    this.openDropdown = this.openDropdown.bind(this);
  }
  componentWillReceiveProps(){
    this.state.quotaPercentage=this.props.profile?Math.round(100*this.props.profile.uniqueVisitors/this.props.profile.uniqueVisitorQouta):null;
  }

  
  handleRouteChange(e, campaign) {
    if (e.target.className === 'react-flexible-switch react-flexible-switch--active' ||
      e.target.className === 'react-flexible-switch react-flexible-switch--inactive' ||
      e.target.className === 'react-flexible-switch-circle' ||
      e.target.className === 'ml-3 icon-trash'
    )
      return;
    this.props.successCampaign(campaign);
    browserHistory.push('/new');
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

  componentDidMount() {
    this.props.fetchCampaign();
  }

  render() {
    const { disableButton} = this.props;
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
                  className="btn btn-pink waves-effect  ml-4 p-2  pt-0 pb-0 mb-4 w-lg "
                >
                  <i className="fi-plus "/>&nbsp;{' '}
                  <span className="h5">New</span>{' '}
                </button>
              </Link>
            </div>
            
            <ul className="metismenu mt-5" id="side-menu">
              {appRoutes.map((prop, key) => {
                if (!prop.redirect)
                  return (
                    <li className={prop.upgrade ? ' newbtn' : this.activeRoute(prop.path)} key={key}>
                      {prop.name === 'Help' ?
                        <Link onClick={this.renderHelp} className={disableButton ? 'disabled-link' : 'nav-link mt-0 mb-0 pr-0'} disabled={disableButton} activeClassName="active">
                          <i className={prop.icon}></i>
                          <span>{prop.upgrade}{prop.name}</span>
                        </Link>
                        :
                        <Link to={prop.path} className={prop.upgrade && disableButton ? 'new disabled-link mt-0 mb-0 pr-0' : disableButton ? 'disabled-link mt-0 mb-0 pr-0' : prop.upgrade ? 'new nav-link mt-0 mb-0 pr-0' : 'nav-link mt-0 mb-0 pr-0'} disabled={disableButton} activeClassName="">
                          {
                            prop.upgrade ? '' : <i className={prop.icon}></i>
                          }
                        
                          {prop.name !== 'Campaigns' ? <span>{prop.name}</span> : (
                            <span>
                              <Link to='/campaigns' ><span > {prop.name}  </span></Link><span className="menu-arrow" onClick= {this.openDropdown}>  </span>
                            
                              <span style={this.state.dropValue} className='text-center mt-3 pt-2 pb-2 pr-5'>
                                { this.props.campaigns ? this.props.campaigns.map((campaign) => (
                                  <span>
                                    <span className="gap-fill"></span>
                                    <Link to='/new'><div className='text-muted text-left pl-3' onClick={(e) => this.handleRouteChange(e, campaign)} ><i className="fi-tag"></i>&nbsp;&nbsp;{ campaign.campaignName } </div></Link>
                                  </span>
                                )) : (
                                  ''
                                )
                                }

                              </span>
                            </span>
                          )
                          } 
                        </Link>
                      }
                    </li>
                  );
                return null;
              })}
              <div className="custombottom ml-2 mb-5">
                <hr/>
                <div className="ml-3 pb-3">
                  <i className='pb-2 fi-cloud'></i>
                  <span className="ml-2 textColor">Plan Usage</span>
                </div>
                <Col md={12}>
                  <ProgressBar className="text-center">
                    <ProgressBar striped active bsStyle={this.state.quotaPercentage<60?'info':this.state.quotaPercentage<90?'warning':'danger'} now={this.state.quotaPercentage} key={1} />
                  </ProgressBar>
                  <div className="ml-4 ">
                    <p className=" textColor" textColor>{this.state.quotaPercentage} % consumed.</p>
                  </div>
                  <div className="ml-3">
                    <Link to='/Upgrade'><button
                      type="button"
                      className="btn btn-outline-primary btn-rounded waves-light waves-effect"
                    >
                      <i className="fi-arrow-up"></i>
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

const mapStateToProps = state => ({
  campaigns: state.getIn(['campaign', 'campaigns'])
});


const mapDispatchToProps = {
  fetchCampaign,
  successCampaign
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

