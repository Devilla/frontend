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
      step: 1,
      openModal: true,
      campaignValid: false,
      profileComplete: false,
      intergrationComplete: false,
      enrolled: false
    };
  }

  componentWillMount() {
    const { campaignInfo, fetchCampaignInfo, profile } = this.props;
    const { uniqueVisitorQouta, uniqueVisitors, uniqueVisitorsQoutaLeft, firstName, lastName, address, phoneNumber } = profile;
    if(!campaignInfo)
      fetchCampaignInfo();
    else
      this.validateCampaign(campaignInfo);
    if(profile && uniqueVisitorQouta && uniqueVisitors && uniqueVisitorsQoutaLeft && firstName && lastName && address && phoneNumber)
      this.setState({ profileComplete: true, step: 3 });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.campaignInfo != this.props.campaignInfo)
      this.validateCampaign(nextProps.campaignInfo);
  }

  validateCampaign = (campaignInfo) => {
    var campaignValid;
    if(campaignInfo.uniqueUsers.length)
      campaignInfo.uniqueUsers.map(users => {
        if(users.hits.total)
          campaignValid = true;
      });
    else
      campaignValid = false;
    const { user } = this.props;
    this.setState({ campaignValid });
    if(campaignValid && !this.state.profileComplete)
      this.setState({ step: 2 });
    if(campaignValid && user.path == '/getting-started') {
      let userUpdate = {};
      userUpdate['path'] = '/dashboard';
      userUpdate['id'] = user._id;
      this.props.updateUser(userUpdate);
    }
  }

  render() {
    const { step, campaignValid, profileComplete, intergrationComplete} = this.state;
    const { profile, campaignInfo, user } = this.props;
    return (
      <Loading strokeWidth="2" style={{height: '700px', width: '10%'}} isLoading={!profile || !campaignInfo} >
        <div className="transition-item list-modal-container card">
          <div className="list-header">
            <p className="list-header-para">Hello {user.username}!  {step == 1?'Let`s get started.':step == 2?'You`re almost done':'Final Step'}</p>
          </div>
          <div className="list-content row border-between mr-0 ml-0">
            <Col md={6} className="list1-content pb-4 pr-0">
              <p className="list-content-para btn sub-text">Step {step}</p>
              <button className="btn" onClick={() => browserHistory.push(step == 1?'new':step == 2?'profile':'integrations')}>
                <i className="fa fa-plus"></i>
                <p className="list-content-button-para">{step == 1?'New Campaign':step == 2?'Update Profile':'Integrate'}</p>
              </button>
            </Col>
            <Col md={6} className="list2-content pb-4 pl-0">
              <p className="list-content-para sub-text">Quick start checklist</p>
              <div className="list-checklist">
                <div className="form-check card-box mb-2 p-1" onClick={() => browserHistory.push('/new')}>
                  {campaignValid ?
                    <i className="fa fa-check-circle"></i>
                    :
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  }
                  <label className="form-check-label pr-0" htmlFor="defaultCheck1">
                    Launch you first campaign
                  </label>
                  <i className="fa fa-angle-right" ></i>
                </div>

                <div className="form-check card-box mb-2 p-1" onClick={() => browserHistory.push('/profile')}>
                  {profileComplete?
                    <i className="fa fa-check-circle"></i>
                    :
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  }
                  <label className="form-check-label pr-0" htmlFor="defaultCheck1">
                    Complete my profile
                  </label>
                  <i className="fa fa-angle-right" ></i>
                </div>

                <div className="form-check card-box mb-2 p-1" onClick={() => browserHistory.push('/integrations')} >
                  {intergrationComplete?
                    <i className="fa fa-check-circle"></i>
                    :
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  }
                  <label className="form-check-label pr-0" htmlFor="defaultCheck1">
                    Integrate with other accounts
                  </label>
                  <i className="fa fa-angle-right" ></i>
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
