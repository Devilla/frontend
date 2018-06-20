import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import NotificationConfigure from './NotificationConfigure/NotificationConfigure';
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
    g: 0,
    b: 0,
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
      notification: '',
      configuration: {},
      activity: true,
      notificationPanelStyle: notificationPanelStyleDefault,
      contentText: 'Company Name ',
      visitorText: 'people',
      notificationUrl: null,
      image: '',
      notifications: [],
      toggleTextBox: false,
      toggleMap: true
    };
    this.configure = this.configure.bind(this);
    this.handleActivityChange = this.handleActivityChange.bind(this);
    this.handleNotificationStyleChange = this.handleNotificationStyleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.saveConfiguration = this.saveConfiguration.bind(this);
    this.setNewConfig = this.setNewConfig.bind(this);
    this.setDefaultPanel = this.setDefaultPanel.bind(this);
    this.handleNextState = this.handleNextState.bind(this);
    this.handleBackState = this.handleBackState.bind(this);
    this.backConfiguration = this.backConfiguration.bind(this);
    this.handleClickableNotification = this.handleClickableNotification.bind(this);
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

  updateNotifications(notifications, configurations) {
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

  setNewConfig(config) {
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

  setInitialState() {
    this.setState({
      notification: '',
      activity: true,
      notificationPanelStyle: notificationPanelStyleDefault,
      contentText: 'Company Name',
      visitorText: 'people',
      notificationUrl: null,
      toggleMap: true,
      image: ''
    });
  }

  setDefaultPanel() {
    this.setState({ notificationPanelStyle: notificationPanelStyleDefault });
  }

  handleActivityChange(activity, id, configId) {
    if (!id || typeof activity == 'object')
      return;
    this.setState({ activity: activity });
    this.saveConfiguration(activity, id, configId);
  }

  handleNotificationStyleChange = style => {
    const notificationStyle = Object.assign({}, this.state.notificationPanelStyle);
    notificationStyle[style.prop] = style.value;
    this.setState({ notificationPanelStyle: notificationStyle });
  };

  handleContentChange(target, content) {
    this.setState({ [target]: content });
  }

  handleClickableNotification() {
    this.setState({toggleTextBox: !this.state.toggleTextBox});
  }

  handleNextState() {
    this.setState({notification: ''});
    this.props.setActiveState(3);
  }

  handleBackState() {
    this.setState({notification: ''});
    this.props.setActiveState(1);
  }

  configure(notification) {
    this.props.fetchCampaignConfiguration(this.props.campaign._id, notification._id);
    this.setState({ notification: notification });
  }

  saveConfiguration(activity, id, configId) {
    const configure = {
      activity: activity != undefined && id ? activity : this.state.activity,
      notificationType: id ? id : this.state.notification._id,
      panelStyle: this.state.notificationPanelStyle,
      contentText: this.state.contentText,
      visitorText: this.state.visitorText,
      notificationUrl: this.state.toggleTextBox && this.state.notificationUrl ?this.state.notificationUrl:null,
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

  backConfiguration() {
    this.props.clearConfiguration();
    this.setInitialState();
  }

  componentWillUnmount() {
    this.props.setActiveState(1);
    this.props.clearConfiguration();
    this.setInitialState();
  }

  render() {

    const { configurations, createSuccess, campaign } = this.props;
    return (
      <div className="notification-settings">
        <div>
          <h4 className="lead text-center m-b-30 m-t-20">Notifications</h4>
          {!this.state.notification
            ?
            <NotificationList
              campaignUrl={campaign.websiteUrl}
              notificationList={this.state.notifications}
              handleActivityChange={this.handleActivityChange}
              configure={this.configure}
              configurations={configurations}
              createSuccess={createSuccess}
            />
            :
            <Row>
              <NotificationConfigure
                handleContentChange={this.handleContentChange}
                setDefaultPanel={this.setDefaultPanel}
                handleActivityChange={this.handleActivityChange}
                handleNotificationStyleChange={this.handleNotificationStyleChange}
                handleClickableNotification={this.handleClickableNotification}
                saveConfiguration={this.saveConfiguration}
                backConfiguration={this.backConfiguration}
                {...this.state}
              />
            </Row>
          }
        </div>
        {!this.state.notification &&
          <div>
            <div className="m-t-50 float-right notification-button-row">
              <button type="button" className="btn btn-custom  waves-light waves-effect number " onClick={this.handleBackState}>Previous</button>
              <button type="button" className="btn btn-custom  waves-light waves-effect number ml-2 pl-4 pr-4" onClick={this.handleNextState}>Next </button>
            </div>
            <div className="clearfix"></div>
          </div>
        }
      </div>
    );
  }
}

export default Notifications;
