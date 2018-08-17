import React, { Component } from 'react';
import { Link } from 'react-router';
import { Influence } from 'img';
import { Col, ProgressBar } from 'react-bootstrap';
import mobile from 'is-mobile';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import appRoutes from 'routes/app';
import './Sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      quotaPercentage:0,
      selectedCampaign: {},
      fromDate: moment().subtract(7, 'd'),
      toDate: moment(),
      openFirst: false,
      openSecond: false
    };
  }

  activeRoute() {
    return 1;
  }

  selectCampaign = (e) => {
    this.setState({selectedCampaign: {
      id: e.target.id,
      campaignName: e.target.innerHTML
    }});
  }

  renderCampaigns = () => {
    let campaignInfo = this.props.campaignInfo;
    if(campaignInfo) {
      return campaignInfo.websiteLive.map(campaign => {
        return <div key={campaign._id} className="dropdown-item text-right" id={campaign._id} onClick={this.selectCampaign}>{campaign.campaignName}</div>;
      });
    }
  }

  handleFromDateChange = (date) => {
    this.setState({ fromDate: date, openFirst: false });
  }

  handleToDateChange = (date) => {
    this.setState({ toDate: date, openSecond: false });
  }

  visitorCount() {
    let visitorCount = 0, signupsCount = 0;
    if(this.props.campaignInfo && this.props.campaignInfo.uniqueUsers.length) {
      let campaignDetails = this.props.campaignInfo.websiteLive.filter(campaign => {
        if(this.state.selectedCampaign.id)
          return campaign._id == this.state.selectedCampaign.id;
        else
          return campaign;
      });

      campaignDetails.map(campaign => {
        let user = campaign.uniqueUsers;
        let signups = campaign.signups;
        (user && user.aggregations) ? user.aggregations.users.buckets.map(bucket => {
          if(moment(bucket.key_as_string).isAfter(moment(this.state.fromDate)) && moment(bucket.key_as_string).isBefore(moment(this.state.toDate)) ) {
            visitorCount = visitorCount + bucket.visitors.sum_other_doc_count + bucket.visitors.buckets.length;
          }
        }) : 0;
        (signups && signups.userDetails) ? signups.userDetails.map(user => {
          if(moment(user.timestamp).isAfter(moment(this.state.fromDate)) && moment(user.timestamp).isBefore(moment(this.state.toDate)) ) {
            signupsCount = signupsCount + 1;
          }
        }) : 0;
      });
      return {visitorCount: visitorCount, signupsCount: signupsCount};
    } else
      return {visitorCount: visitorCount, signupsCount: signupsCount};
  }

  render() {
    const { disableButton, profile, openClose } = this.props;
    let quotaPercentage = profile?Math.round(100*profile.uniqueVisitors/profile.uniqueVisitorQouta):0;

    const countValue = this.visitorCount();
    const conversionPercent = countValue.signupsCount && countValue.visitorCount ?((countValue.signupsCount/countValue.visitorCount)*100).toFixed(2):0;

    return (
      <div className="left side-menu" style={!openClose && mobile() ?{width: '60px'}:{}}>
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
                {!openClose && mobile()?
                  <button
                    type="button"
                    className="btn btn-primary waves-effect addnew-small-btn addnew-btn  p-2  pt-0 pb-0"
                  >
                    <i className="fi-plus "/>&nbsp;{' '}
                  </button>
                  :
                  <button
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
                          <i className={prop.icon}></i>
                          {openClose && mobile() ?
                            <span>{prop.upgrade}{prop.name}</span>
                            :
                            !mobile() ?
                              <span>{prop.upgrade}{prop.name}</span>
                              :
                              null
                          }
                        </Link>
                        :
                        <Link to={prop.path} className={prop.upgrade && disableButton ? 'new disabled-link' : disableButton ? 'disabled-link' : prop.upgrade ? 'new nav-link' : 'nav-link'} disabled={disableButton} activeClassName="active">
                          {
                            prop.upgrade ? '' : <i className={prop.icon}></i>
                          }
                          {openClose && mobile() ?
                            <span>{prop.upgrade}{prop.name}</span>
                            :
                            !mobile() ?
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
              {mobile() && openClose ?
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
                :
                !mobile()?
                  <div className="custombottom">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Conversion Story</h5>
                        <p className="card-text">See your conversions % over a period of time.</p>
                        <div className="change-percent-sidebar">
                          <p>
                            Change - {conversionPercent}%
                            {conversionPercent>0?
                              <i className="fa fa-arrow-up"></i>
                              :
                              <i className="fa fa-arrow-down"></i>
                            }
                          </p>
                        </div>
                        <div className="datepicker-sidebar">
                          <div>
                            <button
                              className="btn btn-primary date-picker-btn"
                              onClick={() => this.setState({openFirst: !this.state.openFirst})}>
                              {this.state.fromDate.format('DD-MM-YYYY')}
                            </button>
                            {this.state.openFirst &&
                              <DatePicker
                                selected={this.state.fromDate}
                                onChange={this.handleFromDateChange}
                                minDate={moment().subtract(60, 'years')}
                                maxDate={moment().subtract(1, 'day')}
                                withPortal
                                inline
                              />
                            }
                          </div>
                          <p>to</p>
                          <div>
                            <button
                              className="btn btn-primary date-picker-btn"
                              onClick={() => this.setState({openSecond: !this.state.openSecond})}>
                              {this.state.toDate.format('DD-MM-YYYY')}
                            </button>
                            {this.state.openSecond &&
                              <DatePicker
                                selected={this.state.toDate}
                                onChange={this.handleToDateChange}
                                minDate={moment().subtract(60, 'years')}
                                maxDate={moment()}
                                withPortal
                                inline
                              />
                            }
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div>
                          <div className="btn-group campaign-dropdown">
                            <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              {this.state.selectedCampaign.campaignName?this.state.selectedCampaign.campaignName:'All Campaigns'}
                            </button>
                            <div className="dropdown-menu">
                              <div className="dropdown-item text-right" id={null} onClick={this.selectCampaign}>All Campaigns</div>
                              {this.renderCampaigns()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    {/* <Col md={12}>
                      <div className="text-center">
                        <ProgressBar striped active bsStyle={quotaPercentage<60?'info':quotaPercentage<90?'warning':'danger'} now={quotaPercentage} key={1} />
                      </div>
                      <div className="ml-4 ">
                        <p className="textColor">{quotaPercentage} % consumed.</p>
                      </div>
                      <hr/>
                    </Col> */}
                  </div>
                  :
                  null
              }

            </ul>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}


export default Sidebar;
