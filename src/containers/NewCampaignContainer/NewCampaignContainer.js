import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { validatewebsite } from 'components/Common/function';
import { createCampaign, clearCampaign } from 'ducks/campaign';
import { Tabs, Campaign } from 'components';


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
      errorWebsiteUrl: ''
    };
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handleCampaignNameChange = this.handleCampaignNameChange.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    this.handleCampaignAuth = this.handleCampaignAuth.bind(this);
    this.handleWebsiteAuth = this.handleWebsiteAuth.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);

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

  componentWillUnmount() {
    this.props.clearCampaign();
  }

  render() {
    const errors = validate(this.state.campaignname, this.state.website);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const { errorName, errorWebsiteUrl, campaignname, website } = this.state;
    return (
      <div>
        {this.props.campaign && Object.keys(this.props.campaign).length !== 0 && this.props.campaign.constructor === Object?
          <Tabs
            campaign={this.props.campaign}
          />
          :
          <Campaign
            campaignname={campaignname}
            errorName={errorName}
            website={website}
            errorWebsiteUrl={errorWebsiteUrl}
            isDisabled={isDisabled}
            handleNextButton={this.handleNextButton}
            handleCampaignNameChange={this.handleCampaignNameChange}
            handleCampaignAuth={this.handleCampaignAuth}
            handleWebsiteChange={this.handleWebsiteChange}
            handleWebsiteAuth={this.handleWebsiteAuth}
          />
        }
        <ToastContainer hideProgressBar={true}/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  campaign: state.getIn(['campaign', 'campaign'])
});

const mapDispatchToProps = {
  createCampaign,
  clearCampaign
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCampaignContainer);
