import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import copy from 'copy-to-clipboard';

import { validatewebsite } from 'components/Common/function';
import { createCampaign, clearCampaign, addSubdomain, fetchSubdomain, clearSubDomain, removeSubDomain } from 'ducks/campaign';
import { updateSubCampaign, fetchSubCampaign, createSubCampaign } from 'ducks/subcampaign';
import { fetchElastic, clearElastic } from 'ducks/elastic';
import { fetchOneRules, createRules, updateRules } from 'ducks/rules';
import { fetchNotification } from 'ducks/notification';
import { setBreadCrumbs } from 'ducks/breadcrumb';
import { createConfiguration, fetchConfiguration, fetchCampaignConfiguration, clearConfiguration, updateConfiguration, createSuccess } from 'ducks/configuration';
import { CampaignSettings, Campaign } from 'components';
import './NewCampaignContainer.scss';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

const campaignTabs = [
  'Notification',
  'Rules Setting',
  'Capture',
  'Display',
  'Install Pixel'
];

class NewCampaignContainer extends Component {
  constructor() {
    super();
    this.state = {
      campaignname: '',
      website: '',
      averageCustomer: '',
      status: {},
      errorName: '',
      errorWebsiteUrl: '',
      errorAverageCustomer: '',
      activeClass: 1,
      loaderActive: false,
      sampleDisplay: false,
      notification: '',
      displayWebhookIntegration: false,
      title: '',
      content: '',
      buttonText: '',
      path: '',
      campaignType: '',
      integrationType: ''
    };
  }

  componentWillMount() {
    const { campaign } = this.props;
    this.verifyPixelStatus(campaign);
    this.props.fetchSubdomain(campaign?campaign._id:null);
    this.props.fetchSubCampaign(campaign?campaign._id:null);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.elastic)
      this.setState({loaderActive: false});
  }

  handleCampaignStateChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value,
      errorName: '',
      errorWebsiteUrl: '',
      errorAverageCustomer: ''
    });
  }

  handleNextButton = (evt, pages) => {
    evt.preventDefault();
    if(!this.state.campaignname)
      return this.setState({errorName: 'Enter campaign name'});
    else if(!this.state.website)
      return this.setState({errorWebsiteUrl: 'Enter website url'});
    else if(!validatewebsite(this.state.website))
      return this.setState({errorWebsiteUrl: 'Enter a valid website url'});
    else if(!this.state.averageCustomer)
      return this.setState({errorAverageCustomer: 'Enter the numbers of signups per day'});
    const data = {
      campaignType: this.state.campaignType,
      campaignName: this.state.campaignname,
      websiteUrl: this.state.website,
      averageCustomer: this.state.averageCustomer,
      profile: this.props.profile._id
    };
    return this.props.createCampaign(data, pages);
  }

  setActiveState = (val, unMounting) => {
    if(this.state.sampleDisplay && val != 3)
      this.setState({sampleDisplay: false});
    if(val == 2)
      this.setState({notification: ''});
    this.setState({activeClass: val});
    if(!unMounting) {
      let breadcrumb = this.props.breadcrumb;
      breadcrumb.splice(1);
      breadcrumb.push({
        name: campaignTabs[val-1],
        path: ''
      });
      this.props.setBreadCrumbs(breadcrumb);
    }
  }

  verifyPixelStatus = (campaign) => {
    if(campaign || this.props.campaign) {
      this.setState({loaderActive: true});
      this.props.fetchElastic(`json.value.trackingId:${campaign?campaign.trackingId:this.props.campaign.trackingId}`);
    }
  }

  handlePixelCopy = () => {
    const pixelCode = `<script src="https://storage.googleapis.com/influence-197607.appspot.com/influence-analytics.js"></script>
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

  handleTrackingIdCopy = () => {
    copy(this.props.campaign?this.props.campaign.trackingId:'INF-XXXXXXX', {
      debug: true
    });
    return toast('Tracking ID copied', toastConfig);
  }

  showNotification = () => {
    this.setState({sampleDisplay: !this.state.sampleDisplay});
  }

  setNotification = (notification) => {
    this.setState({notification: notification});
  }

  clearNotification = () => {
    this.setState({notification: ''});
  }

  goLive = () => {
    const elastic = this.props.elastic;
    if(elastic && (elastic.error || (elastic.message.hits.total === 0))) {
      this.setState({
        title : 'Alert',
        content : 'Please verify your pixel first.'
      });
    } else if(!this.props.leads || !this.props.leads.length) {
      this.setState({
        title : 'Alert',
        content : 'Add a capture page before going live.'
      });
    } else if(!this.props.leads || !this.props.displayUrls.length) {
      this.setState({
        title : 'Alert',
        content : 'Add a display page before going live.'
      });
    } else {
      this.setState({
        title : 'Campaign is Live',
        content : 'Campaign has been successfully created',
        buttonText :  'Finish',
        path : 'campaigns'
      });
    }
  }

  toggleWebhook = () => {
    this.setState({displayWebhookIntegration: !this.state.displayWebhookIntegration});
  }

  handleCampaignType = (campaignType) => {
    this.setState({campaignType});
  }

  componentWillUnmount() {
    this.props.clearCampaign();
    this.props.clearElastic();
    this.props.clearSubDomain();
  }

  setIntegrationType = (type) => {
    this.setState({integrationType: type});
  }

  render() {

    return (
      <div data-transition-id="notification-container-page" className="transition-item NewCampaignContainer">

        {this.props.campaign && Object.keys(this.props.campaign).length !== 0 && this.props.campaign.constructor === Object?
          <CampaignSettings
            validatewebsite={validatewebsite}
            showNotification={this.showNotification}
            goLive={this.goLive}
            toggleWebhook={this.toggleWebhook}
            verifyPixelStatus={this.verifyPixelStatus}
            handlePixelCopy={this.handlePixelCopy}
            handleTrackingIdCopy={this.handleTrackingIdCopy}
            setActiveState={this.setActiveState}
            setNotification={this.setNotification}
            clearNotification={this.clearNotification}
            setIntegrationType={this.setIntegrationType}
            {...this.props}
            {...this.state}
          />
          :
          <Campaign
            handleCampaignType={this.handleCampaignType}
            handleNextButton={this.handleNextButton}
            handleCampaignStateChange={this.handleCampaignStateChange}
            {...this.state}
          />
        }

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
  leads: state.getIn(['pageurl', 'lead']),
  subcampaigns: state.getIn(['subcampaign', 'subcampaigns']),
  breadcrumb: state.getIn(['breadcrumb', 'breadcrumb'])
});

const mapDispatchToProps = {
  createCampaign,
  clearCampaign,
  fetchSubdomain,
  addSubdomain,
  clearSubDomain,
  removeSubDomain,
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
  updateSubCampaign,
  fetchSubCampaign,
  createSubCampaign,
  setBreadCrumbs
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(NewCampaignContainer);
