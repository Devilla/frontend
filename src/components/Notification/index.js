import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Switch from 'react-flexible-switch';
import moment from 'moment';
import Popup from 'react-popup';
import mobile from 'is-mobile';
import Loading from 'react-loading-animation';

import { Modal } from 'components';
import { fetchCampaign, fetchCampaignInfo, updateCampaign, successCampaign, removeCampaign } from 'ducks/campaign';
import './Notification.scss';

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [],
      index: '',
      campaign: '',
      hidepop:  false,
      selectedCampaign: {},
      modaltitle: 'Are you sure you want to delete this campaign?',
      modalbody: 'Alert ! This will delete all your customer activities .',
      modalfoot: 'Delete' ,
      modalname: '1',
      isActive:false
    };
  }

  componentWillMount() {
    this.props.fetchCampaignInfo();
  }

  componentDidMount() {
    this.props.fetchCampaign();
  }

  handleActiveChange(active, campaign, index) {
    if(this.props.user && this.props.user.status == 'paused')
      this.setState({
        modaltitle: 'Account Paused',
        modalbody: 'Please resume your account to continue',
        modalfoot: 'Resume account',
        modalname: '2'
      });
    else
    if (active && this.props.profile.uniqueVisitorsQoutaLeft <= 0) {
      this.setState({
        modaltitle: 'Limit exceeded',
        modalbody: 'Please upgrade your plan to continue',
        modalfoot: 'Upgrade Plan',
        modalname: '2'
      });
    } else {
      campaign['isActive'] = active;
      delete campaign['_id'];
      this.props.updateCampaign(campaign, index);
    }
  }

  handleRouteChange(e, campaign) {
    if (e.target.className === 'tgl-btn m-0' ||
      e.target.className === 'tgl tgl-ios' ||
      e.target.className === 'toggle-text' ||
      e.target.className === 'ml-3 icon-trash'
    )
      return;
    this.props.successCampaign(campaign);
    browserHistory.push('/new');
  }

  deleteCampaign = (indexes, campaigns, e) => {
    this.setState( (prevState) => {
      return {
        deleteCampaign: !prevState.deleteCampaign,
        index: indexes,
        campaign: campaigns
      };
    });
  }

  deletepopupContent = () => {
    this.props.removeCampaign(this.state.index, this.state.campaign._id);
    this.props.updateCampaign(this.state.campaign);
  }


  usersCount(campaignId) {
    let totalUsers = 0;
    if(this.props.campaignInfo && this.props.campaignInfo.uniqueUsers.length) {
      let campaignDetails = this.props.campaignInfo.websiteLive.filter(campaign => campaign._id === campaignId);
      campaignDetails.map(campaign => {
        let user = campaign.uniqueUsers;
        (user && user.hits) ? totalUsers = totalUsers + user.hits.total : 0;
      });
      return {totalUsers: totalUsers};
    } else
      return {totalUsers: totalUsers};
  }

  // Map the notification data into table rows and return
  getNotificationRows = () => {
    return this.props.campaigns ? this.props.campaigns.map((campaign, i) => {
      this.state.isActive=campaign.isActive;
      const { totalUsers } = this.usersCount(campaign._id);
      return (
        <div className="campaign-td tr" key={i} onClick={(e) => this.handleRouteChange(e, campaign)}>
          <div scope="row" className="th col-md-1 text-center">{campaign.campaignType=='page'?'Page Specific':'Normal'}</div>
          <div className="td col-md-2 text-center p-1">{campaign.campaignName}</div>
          {!mobile() && <div className="td col-md-3 text-center p-1">{campaign.websiteUrl}</div>}
          <div className="switch td col-md-1">
            <input className="tgl tgl-ios" id="cb2" type="checkbox" checked={this.state.isActive}  readOnly/>
            <label className="tgl-btn m-0" htmlFor="cb2"  data-toggle="modal" data-target="#2"  onClick={(e) => this.handleActiveChange(!campaign.isActive, campaign, i)}>
              <div className="toggle-text">ON</div>
            </label>
          </div>
          <div className="text-center td col-md-1 p-1">{totalUsers}</div>
          {!mobile() && <div className="td col-md-2 text-center p-1">{campaign.trackingId}</div>}
          {!mobile() && <div className="td col-md-1 text-center p-1">{moment(campaign.updatedAt).format('MM/DD/YYYY')}</div>}
          <div className="td col-md-1 text-center p-1"><a href="javascript:;"><i className="ml-3 icon-trash" data-toggle="modal" data-target="#1"  onClick={(e) => this.deleteCampaign(i,campaign,e)}></i></a></div>
        </div>
      );
    })
      :
      <div className="tr"></div>;
  }

  render() {
    const { modalbody, modalfoot, modaltitle , modalname } = this.state;
    const { campaigns, profile, campaignInfo } = this.props;

    return (
      <Loading className="transition-item manage-transition-notification" isLoading={!campaigns || !profile || !campaignInfo}>
        <div className="manage-notification mt-3">
          <div className="table-responsive">
            <div className="table table-striped">
              <div className="thead flex">
                <div className="tr tab-row">
                  <div className="th col-md-1 text-center p-1">CAMPAIGN TYPE</div>
                  <div className="th col-md-2 text-center p-1">CAMPAIGN</div>
                  {!mobile() && <div className="th col-md-3 text-center p-1">DOMAIN</div>}
                  <div className="th col-md-1 text-center p-1">STATUS</div>
                  <div className="text-center th col-md-1 p-1">TOTAL VISITORS</div>
                  {!mobile() && <div className="th col-md-2 text-center p-1">TRACK ID</div>}
                  {!mobile() && <div className="th col-md-1 text-center p-1">CREATED/UPDATED</div>}
                  <div className="th col-md-1 text-center p-1">TRASH</div>
                </div>
              </div>
              <div className="tbody tab-body">
                {this.getNotificationRows()}
              </div>
            </div>

            <Modal
              id={modalname}
              title={modaltitle}
              content={
                <div className="modal-body">
                  {modalbody}
                </div>
              }
              footer={
                <div className="modal-footer">
                  <button type="button" className="float-left btn btn-primary close-btn" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary delete-btn" data-dismiss="modal"
                    onClick={modalfoot === 'Upgrade Plan' ? () => browserHistory.push('/upgrade') : modalfoot == 'Resume account' ? () => browserHistory.push('/profile') : this.deletepopupContent} >{modalfoot}</button>
                </div>
              }
              style={
                {
                  alignModalStyle: {
                    top: '100px'
                  }
                }
              }
            />
          </div>
        </div>
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  user: state.getIn(['auth', 'user']),
  campaigns: state.getIn(['campaign', 'campaigns']),
  profile: state.getIn(['profile', 'profile']),
  campaignInfo: state.getIn(['campaign', 'campaignInfo'])
});

const mapDispatchToProps = {
  fetchCampaignInfo,
  fetchCampaign,
  updateCampaign,
  successCampaign,
  removeCampaign
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Notification);
