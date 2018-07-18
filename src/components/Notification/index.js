import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Table, Glyphicon } from 'react-bootstrap';
import Card from 'components/utils/card';
import Switch from 'react-flexible-switch';
import { getCookie } from 'components/Common/function';
import moment from 'moment';
import { browserHistory } from 'react-router';
import Popup from 'react-popup';

import { fetchCampaign, updateCampaign, successCampaign, removeCampaign } from 'ducks/campaign';
import './Notification.scss';

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [],
    };
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

  deleteCampaign(index, campaign) {
    let that = this;
    Popup.create({
      title: 'Are you sure you want to delete this campaign?',
      buttons: {
        left: [{
          text: 'Cancel',
          className: 'warning popup-notification-button',
          action: function () {
            Popup.close();
          }
        }],
        right: [{
          text: 'Confirm',
          className: 'primary popup-notification-button',
          action: function () {
            that.props.removeCampaign(index, campaign._id);
            this.props.updateCampaign(campaign);
            Popup.close();
          }
        }]
      }
    }, true);

    browserHistory.push('/dashboard');
  }

  // Map the notification data into table rows and return
  getNotificationRows = () => {
    return this.props.campaigns ? this.props.campaigns.map((campaign, i) => (
      <tr className="campaign-td" key={campaign._id} onClick={(e) => this.handleRouteChange(e, campaign)}>
        <th scope="row">{i + 1}</th>
        <td>{campaign.campaignName}</td>
        {console.log(campaign && campaign:null,'<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')}
        <td>{campaign.websiteUrl}</td>
        <td className="switch">
          <input className="tgl tgl-ios" id="cb2" type="checkbox" checked={campaign.isActive}  readOnly/>
          <label className="tgl-btn" htmlFor="cb2" onClick={(e) => this.handleActiveChange(!campaign.isActive, campaign)}></label>
        </td>
        <td>{campaign.trackingId}</td>
        <td>{moment(campaign.updatedAt).format('MM/DD/YYYY')}</td>
        <td><a href="javascript:;"><i className="ml-3 icon-trash" onClick={() => this.deleteCampaign(i,campaign)}></i></a></td>
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
                <th>TRACK ID</th>

                <th>CREATED/UPDATED</th>
                <th>TRASH</th>
              </tr>
            </thead>
            <tbody>
              {this.getNotificationRows()}
            </tbody>
          </table>
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
  fetchCampaign,
  updateCampaign,
  successCampaign,
  removeCampaign
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
