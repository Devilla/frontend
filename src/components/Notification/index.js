import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Table, Glyphicon } from 'react-bootstrap';
import Card from 'components/utils/card'
import Switch from 'react-flexible-switch';
import { getCookie } from 'components/Common/function';
import moment from 'moment';
import { browserHistory } from 'react-router';
import Popup from 'react-popup';

import { fetchCampaign, updateCampaign, successCampaign, removeCampaign } from 'ducks/campaign';
import './Notification.scss'



const notificationFields = ['S.No', 'Campaign', 'Domain', 'Status', 'Tracking ID', 'Log', 'Created', 'Delete'];

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [],
    }
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
              browserHistory.push('/upgrade')
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
    if (e.target.className === 'react-flexible-switch react-flexible-switch--active' ||
      e.target.className === 'react-flexible-switch react-flexible-switch--inactive' ||
      e.target.className === 'react-flexible-switch-circle' ||
      e.target.className === 'glyphicon glyphicon-trash'
    )
      return;
    this.props.successCampaign(campaign);
    browserHistory.push('/new');
  }

  deleteCampaign(index, campId) {
    this.props.removeCampaign(index, campId);
  }

  colorTable(i) {
      if(i%10 ===1) return 'text-center table-active'
      if(i%2 ===0 ) return ' text-center '; 
      if(i%3 ===0) return 'text-center table-info'; 
      if(i%5 ===0)  return 'text-center table-success';
      if(i%7 ===0 ) return 'text-center table-warning'; 
    }
  
  // Map the notification data into table rows and return
  getNotificationRows = () => {
    return this.props.campaigns ? this.props.campaigns.map((campaign, i) => (
      <tr className={this.colorTable(i)} key={campaign._id} onClick={(e) => this.handleRouteChange(e, campaign)}>
        <td>{i + 1}</td>
        <td>{campaign.campaignName}</td>
        <td> <a>{campaign.websiteUrl}</a></td>
        <td >
          <Switch
            switchStyles={{ width: 40 }}
            value={campaign.isActive}
            onChange={(e) => this.handleActiveChange(e, campaign)}
            circleStyles={{ onColor: 'blue', offColor: 'gray', diameter: 18 }}
          />
        </td>
        <td>{campaign.trackingId}</td>
        <td>{campaign.log || '---'}</td>
        <td>{moment(campaign.createdAt).format('MM/DD/YYYY')}</td>
        <td><i className=" icon-trash" onClick={() => this.deleteCampaign(i, campaign._id)}></i></td>
      </tr>
    ))
      :
      <div></div>
  }

  render() {
    return (
      <div className="content manage-notification">
        <Grid fluid>

          <Row>
            <Col md={12}>
              <Card
                plain
                title="Notifications"
                category=""
                className="m-t-0 header-title"
                ctTableFullWidth ctTableResponsive
                content={
                  <table hover className="table">
                    <thead>
                      <tr>
                        {
                          notificationFields.map((prop, key) => {
                            return (
                              <th className="text-center" key={key}>{prop === "Domain" ? <i className="icon-globe"></i> : ""}&nbsp;<span className="h6 text-muted">{prop}</span></th>
                            );
                          })
                        }
                      </tr>
                    </thead>
                    <tbody>{this.getNotificationRows()}</tbody>
                  </table>
                }
              />
            </Col>
          </Row>
        </Grid>
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
