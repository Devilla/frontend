import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Loading from 'react-loading-animation';

import NotificationConfigure from 'components/NotificationConfigure/NotificationConfigure';
import NotificationList from './NotificationList/NotificationList';
import { ProductImages, PageSpecific, Modal } from 'components';

import './NotificationSettings.scss';

const notificationPanelStyleDefault = { // TODO: Take style values from server
  radius: 50,
  borderWidth: 0,
  borderColor: {
    r: 200,
    g: 200,
    b: 200,
    a: 0.80
  },
  shadow: {
    r: 0,
    g: 0,
    b: 0,
    color: 'lightgrey'
  },
  blur: 0,
  color: {
    r: 0,
    g: 149,
    b: 247,
    a: 1
  },
  linkColor: {
    r: 0,
    g: 137,
    b: 216,
    a: 1
  },
  backgroundColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  },
  fontFamily: 'inherit',
  fontWeight: 'normal',
  linkFontFamily: 'inherit',
  linkFontWeight: 'normal',
  selectDurationData: 'hours',
  selectLastDisplayConversation: 'hours',
  bulkData: 5,
  liveVisitorCount: 0,
  recentNumber: 5,
  recentConv: 5,
  hideAnonymousConversion: true,
  onlyDisplayNotification: false,
  visitorText: ' people '
};

class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageName: '',
      configuration: {},
      activity: true,
      showpopupfield: false,
      notificationPanelStyle: notificationPanelStyleDefault,
      contentText: 'us',
      visitorText: 'people',
      otherText:'signed up for',
      liveVisitorText:'are viewing this site',
      notificationUrl: '',
      image: '',
      notifications: [],
      toggleTextBox: false,
      toggleMap: true,
      popupName: '',
      selectedSubCampaign: ''
    };
  }

  showpopup = (channelName) => {
    this.setState({ popupName: channelName });
  }

  componentWillMount() {
    this.props.fetchNotification();
    this.props.fetchConfiguration(this.props.campaign._id);
    let breadcrumb = this.props.breadcrumb;
    breadcrumb.push({
      name: 'Notifications',
      path: ''
    });
    this.props.setBreadCrumbs(breadcrumb);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.configuration != this.props.configuration) {
      this.setNewConfig(nextProps.configuration);
    }
    if (nextProps.notifications != this.props.notifications || nextProps.configurations != this.props.configurations)
      this.updateNotifications(nextProps.notifications, nextProps.configurations);
  }

  updateNotifications = (notifications, configurations) => {
    if (notifications) {
      let tempNotifications = notifications;
      tempNotifications.map(notif => {
        if (configurations) {
          configurations.find(configuration => {
            if (configuration.notificationType && configuration.notificationType._id == notif._id) {
              notif['activity'] = configuration.activity;
              notif['configurationId'] = configuration._id;
              return notif;
            }
          });
        } else {
          return notif;
        }
      });
      this.setState({ notifications: tempNotifications });
    }
  }

  setNewConfig = (config) => {
    if (config) {
      this.setState({
        activity: config.activity,
        notificationPanelStyle: config.panelStyle,
        contentText: config.contentText,
        visitorText: config.visitorText,
        otherText: config.otherText,
        liveVisitorText: config.liveVisitorText,
        notificationUrl: config.notificationUrl,
        toggleMap: config.toggleMap
      });
    }
  }

  setInitialState = () => {
    this.props.clearNotification();
    this.setState({
      activity: true,
      notificationPanelStyle: notificationPanelStyleDefault,
      contentText: 'Company Name',
      visitorText: 'people',
      otherText: '',
      liveVisitorText: '',
      notificationUrl: '',
      toggleMap: true,
      image: '',
      pageName: ''
    });
  }

  setDefaultPanel = () => {
    this.setState({ notificationPanelStyle: notificationPanelStyleDefault });
  }

  handleActivityChange = (activity, id, configId) => {
    let configure;
    if(this.state.selectedSubCampaign) {
      let subCampaign = this.state.selectedSubCampaign;
      configure = subCampaign[this.props.notification.type];
      configure['activity'] = activity;
      subCampaign[this.props.notification.type] = configure;
      subCampaign['id'] = subCampaign._id;
      delete subCampaign['_id'];
      return this.props.updateSubCampaign(subCampaign);
    } else {
      if (!id || typeof activity == 'object')
        return;
      this.setState({ activity: activity });
      configure = {
        activity: activity != undefined && id ? activity : this.state.activity,
        campaign: this.props.campaign._id
      };

      let configuration = this.props.configuration.size == 0 ? null : this.props.configuration.size ? this.props.configuration.toJS() : this.props.configuration;
      if ((configuration && configuration._id) || configId) {
        configure['id'] = configId ? configId : configuration._id;
        return this.props.updateConfiguration(configure);
      }
    }
  }

  handleNotificationStyleChange = style => {
    const notificationStyle = Object.assign({}, this.state.notificationPanelStyle);
    notificationStyle[style.prop] = style.value;
    this.setState({ notificationPanelStyle: notificationStyle });
  };

  handleContentChange = (target, content) => {
    this.setState({ [target]: content });
  }

  handleClickableNotification = () => {
    this.setState({toggleTextBox: !this.state.toggleTextBox});
  }

  handleNextState = () => {
    this.setState({selectedSubCampaign: ''});
    this.props.clearNotification();
    this.props.setActiveState(2);
  }

  configure = (notification, showpopup) => {
    this.props.fetchCampaignConfiguration(this.props.campaign._id, notification._id);
    this.props.setNotification(notification);
    this.setState({ showpopupfield: !showpopup });
    let breadcrumb = this.props.breadcrumb;
    breadcrumb.push({
      name: 'Configure',
      path: ''
    });
    this.props.setBreadCrumbs(breadcrumb);
  }

  saveConfiguration = (activity, id, configId) => {
    const configure = {
      activity: activity != undefined && id ? activity : this.state.activity,
      notificationType: id ? id : this.props.notification._id,
      panelStyle: this.state.notificationPanelStyle,
      contentText: this.state.contentText,
      visitorText: this.state.visitorText,
      otherText: this.state.otherText,
      liveVisitorText: this.state.liveVisitorText,
      notificationUrl: this.state.toggleTextBox && this.state.notificationUrl ?this.state.notificationUrl:'',
      toggleMap: this.state.toggleMap,
      campaign: this.props.campaign._id
    };

    if(this.state.selectedSubCampaign && this.props.notification.type) {
      delete configure['campaign'];
      let subCampaign = this.state.selectedSubCampaign;
      subCampaign[this.props.notification.type] = configure;
      subCampaign['id'] = subCampaign._id;
      delete subCampaign['_id'];
      this.props.updateSubCampaign(subCampaign);
    } else {
      let configuration = this.props.configuration.size == 0 ? null : this.props.configuration.size ? this.props.configuration.toJS() : this.props.configuration;
      if ((configuration && configuration._id) || configId) {
        configure['id'] = configId ? configId : configuration._id;
        this.props.updateConfiguration(configure);
      } else {
        this.props.createConfiguration(configure);
      }
    }

  }

  backConfiguration = () => {
    this.setState({selectedSubCampaign: ''});
    this.props.clearConfiguration();
    this.setInitialState();
  }

  componentWillUnmount() {
    this.props.setActiveState(1);
    this.props.clearConfiguration();
    this.setInitialState();
  }

  setSubCampaign = (subcampaign, notification, name, notificationName) => {
    this.setState({pageName: name, selectedSubCampaign: subcampaign});
    this.setNewConfig(subcampaign[notification]);
    this.props.setNotification({notificationName: notificationName, type: notification, activity: subcampaign[notification].activity });
  }

  renderDropdownList = () => {
    let notification = this.props.notification.notificationName == 'Recent Activity' ?
      'journey'
      :
      this.props.notification.notificationName == 'Bulk Activity' ?
        'bulk'
        :
        'live';
    return this.props.subcampaigns.map(subcampaign => {
      return <a key={subcampaign._id} className="dropdown-item" onClick={() => this.setSubCampaign(subcampaign, notification, subcampaign.name, this.props.notification.notificationName)} >{subcampaign.name}</a>;
    });
  }

  clearSubCampaign = () => {
    this.setState({pageName: '', selectedSubCampaign: ''});
    this.setNewConfig(this.props.configuration);
  }

  render() {
    const { notification, notifications, configurations, createSuccess, campaign, profile, setNotification } = this.props;
    return (
      <Loading data-transition-id="notification-settings-page" style={{width: '10%', height: '500px'}} strokeWidth='2' isLoading={!notifications || !configurations || !campaign || !profile}>
        <div className="notification-settings">
          <div>
            <div>
              <h4 className="lead text-center m-b-30 m-t-20">Notifications</h4>
              {notification && campaign.campaignType == 'page' &&
                <div className="notification-settings-options">
                  <div className="dropdown-campaigns">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                      {this.state.pageName?this.state.pageName:'Products'}
                    </button>
                    <div className="dropdown-menu">
                      {/* <a className="dropdown-item" onClick={() => this.clearSubCampaign()} >Default</a> */}
                      {this.renderDropdownList()}
                      <a className="dropdown-item" data-toggle="modal" data-target="#addNewProduct">Add/Edit Products</a>
                    </div>
                  </div>
                  <button className="btn btn-primary" data-toggle="modal" data-target="#productImages">Add Product Images</button>
                </div>
              }
            </div>

            {!this.props.notification
              ?
              <NotificationList
                selectedSubCampaign={this.state.selectedSubCampaign}
                campaignUrl={campaign.websiteUrl}
                notificationList={notifications}
                handleActivityChange={this.handleActivityChange}
                handleContentChange={this.handleContentChange}
                configure={this.configure}
                configurations={configurations}
                createSuccess={createSuccess}
                setNotification={setNotification}
                setNewConfig={this.setNewConfig}
                campaign={campaign}
              />
              :
              <Row>
                <NotificationConfigure
                  notification={notification}
                  profile={profile}
                  showpopupfield={this.state.showpopupfield}
                  handleContentChange={this.handleContentChange}
                  setDefaultPanel={this.setDefaultPanel}
                  handleActivityChange={this.handleActivityChange}
                  handleNotificationStyleChange={this.handleNotificationStyleChange}
                  handleClickableNotification={this.handleClickableNotification}
                  saveConfiguration={this.saveConfiguration}
                  backConfiguration={this.backConfiguration}
                  showpopup={this.showpopup}
                  popupName={this.state.popupName}
                  campaign={campaign}
                  {...this.state}
                />
              </Row>
            }
          </div>
          {!this.props.notification &&
            <div className="notifsettinglast-btn">
              <div className="ml-2 float-right">
                <button type="button" className="btn btn-primary  waves-light waves-effect cardnext-btn ml-2 pl-4 pr-3" onClick={this.handleNextState}>Next <i className="icon-arrow-right pl-2"></i> </button>
              </div>
              <div className="clearfix"></div>
            </div>
          }
        </div>
        {campaign.campaignType == 'page' &&
          <div>
            <ProductImages products={this.props.subcampaigns} />
            <Modal
              id="addNewProduct"
              title="Add new Product"
              content={
                <PageSpecific
                  campaign={this.props.campaign}
                  products={this.props.subcampaigns}
                  updateSubCampaign={this.props.updateSubCampaign}
                  createSubCampaign={this.props.createSubCampaign}
                  rules={this.props.rules}
                  addNew={true}
                />
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
        }
      </Loading>
    );
  }
}

export default Notifications;
