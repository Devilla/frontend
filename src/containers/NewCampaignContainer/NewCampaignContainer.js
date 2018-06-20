import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { browserHistory } from 'react-router';
import copy from 'copy-to-clipboard';
import Popup from 'react-popup';

import { validatewebsite } from 'components/Common/function';
import { createCampaign, clearCampaign } from 'ducks/campaign';
import { fetchElastic, clearElastic } from 'ducks/elastic';
import { fetchOneRules, createRules, updateRules } from 'ducks/rules';
import { fetchNotification } from 'ducks/notification';
import { createConfiguration, fetchConfiguration, fetchCampaignConfiguration, clearConfiguration, updateConfiguration, createSuccess } from 'ducks/configuration';
import { fetchLeadUrl, fetchDisplayUrl, createPageUrl, clearPageUrl, removePageUrl } from 'ducks/pageurl';
import { CampaignSettings, Campaign } from 'components';
import './NewCampaignContainer.scss';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

function validate(campaignname, website) {
  // true means invalid, so our conditions got reversed
  return {
    name: campaignname.length === 0,
    email: !validatewebsite(website)
  };
}

class NewCampaignContainer extends Component {
  constructor() {
    super();
    this.state = {
      campaignname: '',
      website: '',
      status: {},
      errorName: '',
      errorWebsiteUrl: '',
      activeClass: 1
    };
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handleCampaignNameChange = this.handleCampaignNameChange.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    this.handleCampaignAuth = this.handleCampaignAuth.bind(this);
    this.handleWebsiteAuth = this.handleWebsiteAuth.bind(this);
    this.setActiveState = this.setActiveState.bind(this);
    this.handlePixelCopy = this.handlePixelCopy.bind(this);
    this.verifyPixelStatus = this.verifyPixelStatus.bind(this);
    this.goLive = this.goLive.bind(this);
  }

  handleCampaignNameChange(evt) {
    this.setState({campaignname: evt.target.value, errorName:'' });
  }

  handleWebsiteChange(evt) {
    this.setState({website: evt.target.value, errorWebsiteUrl: ''});
  }

  handleCampaignAuth(evt) {
    if (evt.target.value === '')
      this.setState({errorName: 'Enter campaign name'});
  }

  handleWebsiteAuth(evt) {
    if(evt.target.value) {
      this.setState({errorWebsiteUrl: 'Enter website url'});
    } else if(!validatewebsite(evt.target.value)) {
      this.setState({errorWebsiteUrl: 'Enter a valid website url'});
    }
  }

  handleNextButton(evt) {
    evt.preventDefault();
    const data = {
      campaignName: this.state.campaignname,
      websiteUrl: this.state.website,
      profile: this.props.profile._id
    };
    return this.props.createCampaign(data);
  }

  setActiveState(val) {
    this.setState({activeClass: val});
  }

  verifyPixelStatus() {
    this.props.fetchElastic(`json.value.trackingId:${this.props.campaign.trackingId}`);
  }

  handlePixelCopy() {
    const pixelCode = `<script src="https://cdninfluence.nyc3.digitaloceanspaces.com/influence-analytics.js"></script>
<script>
new Influence({
trackingId:   '${this.props.campaign?this.props.campaign.trackingId:'INF-XXXXXXX'}'
});
</script>`;
    copy(pixelCode, {
      debug: true
    });
    return toast('Pixel copied', toastConfig);
  }

  componentWillUnmount() {
    this.props.clearCampaign();
    this.props.clearElastic();
  }

  goLive() {
    let title, content, buttonText, path;
    console.log(this.props.leads);
    if(!this.props.leads || !this.props.leads.length) {
      title = 'Alert';
      content = 'Add a capture page before going live.';
      buttonText = 'Close';
    } else if(!this.props.leads || !this.props.displayUrls.length) {
      title = 'Alert';
      content = 'Add a display page before going live.';
      buttonText = 'Close';
    } else {
      title = 'Campaign is Live';
      content = 'Campaign has be successfully created';
      buttonText = 'Finish';
      path = 'campaigns';
    }

    Popup.create({
      title: title,
      content: content,
      buttons: {
        right: [{
          text: buttonText,
          className: 'default',
          action: function () {
            if(path)
              browserHistory.push(path);
            Popup.close();
          }
        }]
      }
    });
  }

  render() {
    const errors = validate(this.state.campaignname, this.state.website);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      <div>
        {this.props.campaign && Object.keys(this.props.campaign).length !== 0 && this.props.campaign.constructor === Object?
          <CampaignSettings
            goLive={this.goLive}
            verifyPixelStatus={this.verifyPixelStatus}
            handlePixelCopy={this.handlePixelCopy}
            activeClass={this.state.activeClass}
            setActiveState={this.setActiveState}
            {...this.props}
          />
          :
          <Campaign
            isDisabled={isDisabled}
            handleNextButton={this.handleNextButton}
            handleCampaignNameChange={this.handleCampaignNameChange}
            handleCampaignAuth={this.handleCampaignAuth}
            handleWebsiteChange={this.handleWebsiteChange}
            handleWebsiteAuth={this.handleWebsiteAuth}
            {...this.state}
          />
        }
        <ToastContainer hideProgressBar={true}/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  campaign: state.getIn(['campaign', 'campaign']),
  elastic: state.getIn(['elastic', 'elastic']),
  rules: state.getIn(['rules', 'rule']),
  configuration: state.getIn(['configuration', 'configuration']),
  configurations: state.getIn(['configuration', 'configurations']),
  notifications: state.getIn(['notification', 'notifications']),
  displayUrls: state.getIn(['pageurl', 'display']),
  leads: state.getIn(['pageurl', 'lead'])
});

const mapDispatchToProps = {
  createCampaign,
  clearCampaign,
  fetchElastic,
  clearElastic,
  fetchOneRules,
  createRules,
  updateRules,
  fetchNotification,
  createConfiguration,
  fetchConfiguration,
  fetchCampaignConfiguration,
  updateConfiguration,
  clearConfiguration,
  createSuccess,
  fetchDisplayUrl,
  fetchLeadUrl,
  createPageUrl,
  removePageUrl,
  clearPageUrl
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCampaignContainer);