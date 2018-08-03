import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import NotificationConfigure from 'components/NotificationConfigure/NotificationConfigure';
import NotificationList from './NotificationList/NotificationList';

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
      popupName: ''
    };
  }

  showpopup = (channelName) => {
    this.setState({ popupName: channelName });
  }

  componentWillMount() {
    this.props.fetchNotification();
    this.props.fetchConfiguration(this.props.campaign._id);
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
        notificationUrl: config.notificationUrl,
        toggleMap: config.toggleMap
      });
    }
  }

  setInitialState = () => {
    this.props.clearNotification();
    this.setState({
      // notification: '',
      activity: true,
      notificationPanelStyle: notificationPanelStyleDefault,
      contentText: 'Company Name',
      visitorText: 'people',
      notificationUrl: '',
      toggleMap: true,
      image: ''
    });
  }

  setDefaultPanel = () => {
    this.setState({ notificationPanelStyle: notificationPanelStyleDefault });
  }

  handleActivityChange = (activity, id, configId) => {
    if (!id || typeof activity == 'object')
      return;
    this.setState({ activity: activity });
    const configure = {
      activity: activity != undefined && id ? activity : this.state.activity,
      campaign: this.props.campaign._id
    };
    let configuration = this.props.configuration.size == 0 ? null : this.props.configuration.size ? this.props.configuration.toJS() : this.props.configuration;
    if ((configuration && configuration._id) || configId) {
      configure['id'] = configId ? configId : configuration._id;
      return this.props.updateConfiguration(configure);
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
    // this.setState({notification: ''});
    this.props.clearNotification();
    this.props.setActiveState(2);
  }


  configure = (notification, showpopup) => {
    this.props.fetchCampaignConfiguration(this.props.campaign._id, notification._id);
    this.props.setNotification(notification);
    // this.setState({ notification: notification });
    this.setState({ showpopupfield: !showpopup });

  }

  saveConfiguration = (activity, id, configId) => {
    const configure = {
      activity: activity != undefined && id ? activity : this.state.activity,
      notificationType: id ? id : this.props.notification._id,
      panelStyle: this.state.notificationPanelStyle,
      contentText: this.state.contentText,
      visitorText: this.state.visitorText,
      notificationUrl: this.state.toggleTextBox && this.state.notificationUrl ?this.state.notificationUrl:'',
      toggleMap: this.state.toggleMap,
      campaign: this.props.campaign._id
    };
    let configuration = this.props.configuration.size == 0 ? null : this.props.configuration.size ? this.props.configuration.toJS() : this.props.configuration;
    if ((configuration && configuration._id) || configId) {
      configure['id'] = configId ? configId : configuration._id;
      this.props.updateConfiguration(configure);
    } else {
      this.props.createConfiguration(configure);
    }
  }

  backConfiguration = () => {
    this.props.clearConfiguration();
    this.setInitialState();
  }

  componentWillUnmount() {
    this.props.setActiveState(1);
    this.props.clearConfiguration();
    this.setInitialState();
  }

  render() {
    const { notification, configurations, createSuccess, campaign, profile, setNotification } = this.props;
    return (
      <div className="notification-settings">
        <div>
          <h4 className="lead text-center m-b-30 m-t-20">Notifications</h4>


          {!this.props.notification
            ?
            <NotificationList
              campaignUrl={campaign.websiteUrl}
              notificationList={this.props.notifications}
              handleActivityChange={this.handleActivityChange}
              configure={this.configure}
              configurations={configurations}
              createSuccess={createSuccess}
              setNotification={setNotification}
              setNewConfig={this.setNewConfig}
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
                campaign={this.props.campaign}
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
    );
  }
}

export default Notifications;
