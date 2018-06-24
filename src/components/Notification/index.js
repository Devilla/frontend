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

const notificationFields = [ 'S.No', 'Campaign', 'Domain', 'Status', 'Tracking ID', 'Log', 'Created', 'Delete' ];

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
    if(active && this.props.profile.uniqueVisitorsQoutaLeft <= 0) {
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
    if(e.target.className == 'react-flexible-switch react-flexible-switch--active' ||
      e.target.className == 'react-flexible-switch react-flexible-switch--inactive' ||
      e.target.className == 'react-flexible-switch-circle' ||
      e.target.className == 'glyphicon glyphicon-trash'
    )
      return;
    this.props.successCampaign(campaign);
    browserHistory.push('/new');
  }

  deleteCampaign(index, campId) {
    this.props.removeCampaign(index, campId);
  }

  // Map the notification data into table rows and return
  getNotificationRows = () => {
    return this.props.campaigns?this.props.campaigns.map((campaign, i) => (
      <tr key={campaign._id} onClick={(e) => this.handleRouteChange(e, campaign)}>
        <td>{i + 1}</td>
        <td>{campaign.campaignName}</td>
        <td><i className="fas fa-globe"></i> <a>{campaign.websiteUrl}</a></td>
        <td >
          <Switch switchStyles={{ width: 50 }}
            value={campaign.isActive}
            onChange={(e) => this.handleActiveChange(e, campaign)}
            circleStyles={{ onColor: 'blue', offColor: 'gray', diameter: 18 }}
          />
        </td>
        <td>{campaign.trackingId}</td>
        <td>{campaign.log}</td>
        <td>{moment(campaign.createdAt).format('MM/DD/YYYY')}</td>
        <td><Glyphicon glyph="trash" onClick={() => this.deleteCampaign(i, campaign._id)} /></td>
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
                ctTableFullWidth ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {
                          notificationFields.map((prop, key) => {
                            return (
                              <th key={key}>{prop}</th>
                            );
                          })
                        }
                      </tr>
                    </thead>
                    <tbody>{ this.getNotificationRows() }</tbody>
                  </Table>
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
