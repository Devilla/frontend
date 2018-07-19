import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'components/utils/card';
import Switch from 'react-flexible-switch';
import { getCookie } from 'components/Common/function';
import moment from 'moment';
import { browserHistory } from 'react-router';
import Popup from 'react-popup';

import { fetchCampaign, fetchCampaignInfo, updateCampaign, successCampaign, removeCampaign } from 'ducks/campaign';
import './Notification.scss';

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [],
      index: '',
      campaign: '',
      hidepop:  false
    };
  }

  componentWillReceiveProps() {
    this.props.fetchCampaignInfo();
  }
  componentDidMount() {
    this.props.fetchCampaign();
  }

  handleActiveChange(active, campaign) {
    if (active && this.props.profile.uniqueVisitorsQoutaLeft <= 0) {
      return Popup.create({
        title: 'Limit exceeded',
        content:
          <div className="popup-notification-div">
            <h6>Please, upgrade your plan to continue.</h6>
          </div>,
        buttons: {
          right: [{
            text: 'Upgrade Plan',
            className: 'primary popup-notification-button',
            action: function () {
              browserHistory.push('/upgrade');
              Popup.close();
            }
          }]
        }
      }, true);
    } else {
      campaign['isActive'] = active;
      delete campaign['_id'];
      this.props.updateCampaign(campaign);
    }
  }

  handleRouteChange(e, campaign) {
    if (e.target.className === 'tgl-btn' ||
      e.target.className === 'tgl tgl-ios' ||
      e.target.className === 'ml-3 icon-trash'
    )
      return;
    this.props.successCampaign(campaign);
    browserHistory.push('/new');
  }

  deleteCampaign = (indexes, campaigns,e) => {
    this.setState( (prevState) => {
      return { deleteCampaign : !prevState.deleteCampaign, index: indexes, campaign : campaigns };
    });
  }

  deletepopupContent = () => {
    this.props.removeCampaign(this.state.index, this.state.campaign._id);
    this.props.updateCampaign(this.state.campaign);
    browserHistory.push('/dashboard');
  }

  // Map the notification data into table rows and return
  getNotificationRows = () => {
    return this.props.campaigns ? this.props.campaigns.map((campaign, i) => (
      <tr className="campaign-td" key={campaign._id} onClick={(e) => this.handleRouteChange(e, campaign)}>
        <th scope="row">{i + 1}</th>
        <td>{campaign.campaignName}</td>
        <td>{campaign.websiteUrl}</td>
        <td className="switch">
          <input className="tgl tgl-ios" id="cb2" type="checkbox" checked={campaign.isActive}  readOnly/>
          <label className="tgl-btn" htmlFor="cb2" onClick={(e) => this.handleActiveChange(!campaign.isActive, campaign)}></label>
        </td>
        <td className='text-center'>7</td>
        <td>{campaign.trackingId}</td>
        <td>{moment(campaign.updatedAt).format('MM/DD/YYYY')}</td>
        <td><a href="javascript:;"><i className="ml-3 icon-trash" data-toggle="modal" data-target="#myModal"  onClick={(e) => this.deleteCampaign(i,campaign,e)}></i></a></td>
      </tr>
    ))
      :
      <tr></tr>;
  }

  render() {
    return (
      <div className="manage-notification">
        <div className="card-box">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>CAMPAIGN</th>
                <th>DOMAIN</th>
                <th>STATUS</th>
                <th className='text-center'>TOTAL VISITORS</th>
                <th>TRACK ID</th>
                <th>CREATED/UPDATED</th>
                <th>TRASH</th>
              </tr>
            </thead>
            <tbody>
              {this.getNotificationRows()}
            </tbody>
          </table>
          <div className="modal fade show-modal" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content align-modal">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Are you sure you want to delete this campaign?</h4>
                </div>
                <div className="modal-body pb-5">
                        Alert ! These may delete all your customer activities .
                </div>
                <div className="modal-footer">
                  <button type="button" className="float-left btn btn-primary close-btn" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary delete-btn" data-dismiss="modal" onClick={this.deletepopupContent} >Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaigns: state.getIn(['campaign', 'campaigns']),
  profile: state.getIn(['profile', 'profile'])
});

const mapDispatchToProps = {
  fetchCampaignInfo,
  fetchCampaign,
  updateCampaign,
  successCampaign,
  removeCampaign
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
