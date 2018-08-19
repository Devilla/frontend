import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import Loading from 'react-loading-animation';

import { fetchCampaignInfo } from 'ducks/campaign';
import { updateUser } from 'ducks/auth';

import './GettingStarted.scss';

class GettingStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: true,
      campaignValid: false,
      profileComplete: false,
      intergrationComplete: false,
      enrolled: false
    };
  }

  componentWillMount() {
    const { campaignInfo, fetchCampaignInfo, profile } = this.props;
    const { uniqueVisitorQouta, uniqueVisitors, uniqueVisitorsQoutaLeft, firstName, lastName, city, state, address, country, phoneNumber } = profile;
    if(!campaignInfo)
      fetchCampaignInfo();
    else
      this.validateCampaign(campaignInfo);
    if(profile && uniqueVisitorQouta && uniqueVisitors && uniqueVisitorsQoutaLeft && firstName && lastName && city && state && address && country && phoneNumber)
      this.setState({ profileComplete: true });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.campaignInfo != this.props.campaignInfo)
      this.validateCampaign(nextProps.campaignInfo);
  }

  validateCampaign = (campaignInfo) => {
    const campaignValid = campaignInfo.uniqueUsers.length && campaignInfo.uniqueUsers[0].hits.total ?true:false;
    const { user } = this.props;
    this.setState({ campaignValid });
    if(campaignValid && user.path == '/getting-started') {
      let userUpdate = {};
      userUpdate['path'] = '/dashboard';
      userUpdate['id'] = user._id;
      this.props.updateUser(userUpdate);
    }
  }

  render() {
    const { campaignValid, profileComplete, intergrationComplete, enrolled } = this.state;
    const { profile, campaignInfo } = this.props;
    return (
      <Loading strokeWidth="2" style={{height: '700px', width: '10%'}} isLoading={!profile || !campaignInfo} >
        <div className="transition-item list-modal-container">
          <div className="list-header">
            <p className="list-header-para">You can get started in less then 5 minutes.</p>
          </div>
          <div className="list-content row border-between">
            <Col md={6} className="list1-content">
              <p className="list-content-para">Create your first campaign.</p>
              <button className="btn btn-primary" onClick={() => browserHistory.push('new')}>
                <i className="fa fa-plus"></i>
                <p className="list-content-button-para">New Campaign</p>
              </button>
            </Col>
            <Col md={6} className="list2-content">
              <p className="list-content-para">Quick start checklist</p>
              <div className="list-checklist">
                <div className="form-check">
                  {campaignValid ?
                    <i className="fa fa-check-circle"></i>
                    :
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  }
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Launch you first campaign
                  </label>
                  <i className="fa fa-angle-right" onClick={() => browserHistory.push('/new')}></i>
                </div>
                <div className="form-check">
                  {profileComplete?
                    <i className="fa fa-check-circle"></i>
                    :
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  }
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Complete my profile
                  </label>
                  <i className="fa fa-angle-right" onClick={() => browserHistory.push('/profile')}></i>
                </div>
                <div className="form-check">
                  {intergrationComplete?
                    <i className="fa fa-check-circle"></i>
                    :
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  }
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Integrate with other accounts
                  </label>
                  <i className="fa fa-angle-right" onClick={() => browserHistory.push('/integrations')}></i>
                </div>
                <div className="form-check">
                  {enrolled?
                    <i className="fa fa-check-circle"></i>
                    :
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  }
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Enroll into "Beta" feature club
                  </label>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  campaignInfo: state.getIn(['campaign', 'campaignInfo']),
  user: state.getIn(['auth', 'user'])
});

const mapDispatchToProps = {
  fetchCampaignInfo,
  updateUser
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(GettingStarted);
