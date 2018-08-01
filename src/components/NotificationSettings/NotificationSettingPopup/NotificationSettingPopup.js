import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSubCampaign, fetchOneSubCampaign, createSubCampaign, updateSubCampaign, deleteSubCampaign, clearSubCampaign } from 'ducks/subcampaign';
import SubCampaignFields from './SubCampaignFields';
import './NotificationSettingPopup.scss';


class NotificationSettingPopup  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      productName: '',
      productUrl: '',
      captureUrl: '',
      errorName: '',
      errorProductName: '',
      errorProductUrl: '',
      errorCaptureUrl: '',
      displayField: false,
      displaynotifbuttons : false,
      externalValue:  false,
      arrayForm : []
    };
  }

  componentWillMount() {
    this.props.fetchSubCampaign(this.props.campaign._id);
  }

  show = () => {
    this.setState((prevState) => {
      return { displaynotifbuttons : !prevState.displaynotifbuttons };
    });
  }

  addpage = () => {
    this.setState((prevState) => {
      return {displayField : !prevState.displayField };
    });
  }

  handleSwitchChange = () =>  {
    //code to be written
  }

  handleStateChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      errorName: '',
      errorProductUrl: '',
      errorProductName: '',
      errorCaptureUrl: ''
    });
  }

  submitSubCampaign = () => {
    const { name, productName, productUrl, captureUrl } = this.state;
    const { campaign, createSubCampaign } = this.props;

    if(!name)
      return this.setState({errorName: true});
    else if(!productName)
      return this.setState({errorProductName: true});
    else if(!productUrl)
      return this.setState({errorProductUrl: true});
    else if(!captureUrl)
      return this.setState({errorCaptureUrl: true});

    const subCampaign = {
      name: name,
      productName: productName,
      productUrl: productUrl,
      captureUrl: captureUrl,
      campaign: campaign._id,
      isActive: true
    };

    createSubCampaign(subCampaign);
    return this.setState({
      name: '',
      productName: '',
      productUrl: '',
      captureUrl: '',
      displaynotifbuttons: false,
      displayField: false,
      externalValue: false
    });
  }

  render() {
    return (
      <div className="popuppage-container">
        <button type="button" className="btn btn-outline-primary  addpage" data-toggle="modal" data-target="#myModal" onClick={()=>{}} ><i className="fi-plus"></i>&nbsp;Set Page Specifc Notifications</button>
        <div className="modal fade show-modal" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content align-modal">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Customize the Notification Display</h4>
              </div>
              <div className="modal-body">
                <span className="btn btn-primary addpagepopup-btn mb-4" onClick={()=> this.addpage()}><i className="fi-plus"></i> &nbsp;Add Page</span>
                {this.state.displayField ?
                  <SubCampaignFields
                    handleStateChange={this.handleStateChange}
                    show={this.show}
                    handleSwitchChange={this.handleSwitchChange}
                    submitSubCampaign={this.submitSubCampaign}
                    {...this.state}
                  />
                  : ' '}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaign: state.getIn(['campaign', 'campaign']),
  rules: state.getIn(['rules', 'rule']),
  configuration: state.getIn(['configuration', 'configuration']),
  configurations: state.getIn(['configuration', 'configurations']),
  notifications: state.getIn(['notification', 'notifications']),
  subcampaigns: state.getIn(['subcampaign', 'subcampaigns']),
  subcampaign: state.getIn(['subcampaign', 'subcampaign'])
});

const mapDispatchToProps = {
  fetchSubCampaign,
  fetchOneSubCampaign,
  createSubCampaign,
  updateSubCampaign,
  deleteSubCampaign,
  clearSubCampaign
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationSettingPopup);
