import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSubCampaign, fetchOneSubCampaign, createSubCampaign, updateSubCampaign, deleteSubCampaign, clearSubCampaign } from 'ducks/subcampaign';
import SubCampaignFields from './SubCampaignFields';
import SubCampaignList from './SubCampaignList';
import './NotificationSettingPopup.scss';


class NotificationSettingPopup  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      productName: '',
      productUrl: '',
      captureUrl: '',
      isActive: true,
      errorName: '',
      errorProductName: '',
      errorProductUrl: '',
      errorCaptureUrl: '',
      // selectedSubCampaign: '',
      displayField: false,
      displaynotifbuttons : false,
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
    this.props.handleContentChange('selectedSubCampaign', '');
    this.setState((prevState) => {
      return {
        displayField : !prevState.displayField,
        // selectedSubCampaign: '',
        name: '',
        productName: '',
        productUrl: '',
        captureUrl: '',
        isActive: true
      };
    });
  }

  handleToggleChange = (value) =>  {
    //code to be written
    this.setState({isActive: value});
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
    const { name, productName, productUrl, captureUrl, isActive } = this.state;
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
      domain: campaign.websiteUrl,
      rule: campaign.rule,
      isActive: isActive
    };

    createSubCampaign(subCampaign);
    return this.setState({
      name: '',
      productName: '',
      productUrl: '',
      captureUrl: '',
      isActive: true,
      displaynotifbuttons: false,
      displayField: false,
    });
  }

  updateSubCampaign = () => {
    const { name, productName, productUrl, captureUrl, isActive } = this.state;
    const { selectedSubCampaign } = this.props;
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
      isActive: isActive,
      id: selectedSubCampaign._id
    };

    this.props.updateSubCampaign(subCampaign);
    this.props.handleContentChange('selectedSubCampaign', '');
    return this.setState({
      name: '',
      productName: '',
      productUrl: '',
      captureUrl: '',
      isActive: true,
      displaynotifbuttons: false,
      displayField: false,
      // selectedSubCampaign: ''
    });

  }

  selectSubCampaign = (subCampaign) => {
    let value;
    if(subCampaign)
      value = {
        displayField: false,
        // selectedSubCampaign: subCampaign,
        name: subCampaign.name,
        productName: subCampaign.productName,
        productUrl: subCampaign.productUrl,
        captureUrl: subCampaign.captureUrl,
        isActive: subCampaign.isActive
      };
    else
      value = {
        // selectedSubCampaign: '',
        name: '',
        productName: '',
        productUrl: '',
        captureUrl: '',
        isActive: true
      };

    this.props.handleContentChange('selectedSubCampaign', subCampaign);
    this.setState(value);
  }

  duplicateSubCampaign = () => {
    const { selectedSubCampaign } = this.props;

    const subCampaign = {
      name: selectedSubCampaign.name,
      productName: selectedSubCampaign.productName,
      productUrl: selectedSubCampaign.productUrl,
      captureUrl: selectedSubCampaign.captureUrl,
      campaign: selectedSubCampaign.campaign,
      isActive: false
    };

    this.props.createSubCampaign(subCampaign);
    this.props.handleContentChange('selectedSubCampaign', '');
    return this.setState({
      name: '',
      productName: '',
      productUrl: '',
      captureUrl: '',
      isActive: true,
      displaynotifbuttons: false,
      displayField: false,
      // selectedSubCampaign: ''
    });
  }

  setNotification = (notification, name, type) => {
    this.props.setNotification({notificationName: name, type: type, activity: notification.activity });
    this.props.setNewConfig(notification);
  }

  render() {
    const { subcampaigns, deleteSubCampaign, selectedSubCampaign } = this.props;
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
                    selectedSubCampaign={selectedSubCampaign}
                    handleStateChange={this.handleStateChange}
                    show="hidden"
                    handleToggleChange={this.handleToggleChange}
                    submitSubCampaign={this.submitSubCampaign}
                    {...this.state}
                  />
                  : ' '}
                <SubCampaignList
                  selectSubCampaign={this.selectSubCampaign}
                  handleStateChange={this.handleStateChange}
                  handleToggleChange={this.handleToggleChange}
                  show={this.show}
                  updateSubCampaign={this.updateSubCampaign}
                  duplicateSubCampaign={this.duplicateSubCampaign}
                  deleteSubCampaign={deleteSubCampaign}
                  subcampaigns={subcampaigns}
                  setNotification={this.setNotification}
                  selectedSubCampaign={selectedSubCampaign}
                  {...this.state}
                />
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
