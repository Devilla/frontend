import React, {Component} from 'react';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchNotification } from 'ducks/notification';
import { createConfiguration, fetchConfiguration, fetchCampaignConfiguration, clearConfiguration, updateConfiguration, createSuccess } from 'ducks/configuration';
import NotificationList from './NotificationList';
import NotificationConfigure from './NotificationConfigure';
import './Notifications.css';
import Tabs from 'components/Template/tab'


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
  bulkData:5,
  recentNumber:5,
  recentConv:5
};

class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notification: '',
      configuration: {},
      activity: true,
      notificationPanelStyle: notificationPanelStyleDefault,
      contentText: 'Recently signed up for Company Name',
      image: '',
      notifications : [],
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
    this.activeState = this.activeState.bind(this);
    this.backConfiguration = this.backConfiguration.bind(this);
  }

  componentWillMount() {
    this.props.fetchNotification();
    this.props.fetchConfiguration(this.props.campaign._id);
    this.setActiveState({active: 3});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.configuration != this.props.configuration) {
      this.setNewConfig(nextProps.configuration);
    }
    if(nextProps.notifications != this.props.notifications || nextProps.configurations != this.props.configurations)
      this.updateNotifications(nextProps.notifications, nextProps.configurations);
  }

  updateNotifications(notifications, configurations) {
    if(notifications) {
      let tempNotifications = notifications;
      tempNotifications.map(notif => {
        if(configurations) {
          configurations.find(configuration => {
            if(configuration.notificationType && configuration.notificationType._id == notif._id) {
              notif['activity'] = configuration.activity;
              notif['configurationId'] = configuration._id;
              return notif;
            }
          });
        } else {
          return notif
        }
      });
      this.setState({notifications: tempNotifications});
    }
  }

  setNewConfig(config) {
    if(config) {
      const panelStyle = config.panelStyle;
      this.setState({
        activity: config.activity,
        notificationPanelStyle: config.panelStyle,
        contentText: config.contentText
      });
    }
  }

  setInitialState() {
    this.setState({
      notification: '',
      activity: true,
      notificationPanelStyle: notificationPanelStyleDefault,
      contentText: 'Recently signed up for Company Name',
      image: ''
    });
  }

  setDefaultPanel() {
    this.setState({notificationPanelStyle: notificationPanelStyleDefault});
  }

  handleActivityChange(activity, id, configId) {
    if(!id || typeof activity == 'object')
      return;
    this.setState({activity: activity});
    this.saveConfiguration(activity, id, configId);
  }

  handleNotificationStyleChange = style => {
    const notificationStyle = Object.assign({}, this.state.notificationPanelStyle);
    notificationStyle[style.prop] = style.value;
    this.setState({notificationPanelStyle: notificationStyle});
  };

  handleContentChange(content) {
    this.setState({ contentText: content});
  }

  activeState(val){
    this.setActiveState(val);
  }

  handleNextState() {
    this.setActiveState({active: 4});
  }

  handleBackState() {
    this.setActiveState({active: 2});
  }

  setActiveState(val) {
    this.setState({notification: ''});
    var data = {'tab' : val};
    this.props.callbackFromParent(data);
  }

  configure(notification) {
    this.props.fetchCampaignConfiguration(this.props.campaign._id, notification._id);
    this.setState({notification: notification});
  }

  saveConfiguration(activity, id, configId) {
    const configure = {
      activity: activity != undefined && id ? activity : this.state.activity,
      notificationType: id?id:this.state.notification._id,
      panelStyle: this.state.notificationPanelStyle,
      contentText: this.state.contentText,
      campaign: this.props.campaign._id
    };
    let configuration = this.props.configuration.size == 0 ? null : this.props.configuration.size ? this.props.configuration.toJS() : this.props.configuration;
    if((configuration && configuration._id) || configId) {
      configure['id'] = configId?configId:configuration._id;
      this.props.updateConfiguration(configure);
    } else 
    {
      this.props.createConfiguration(configure);
    }
    this.props.clearConfiguration();
    this.setInitialState();
  }

  backConfiguration() {
    this.props.clearConfiguration();
    this.setInitialState();
  }

  render() {
    
    const { notifications, configurations, createSuccess } = this.props;
    return (<div className="content notification-list">
      <Grid fluid>
        <Tabs active="3" callbackFromParent={this.activeState}/>
        <div className="tabscontent">
          {
            !this.state.notification
              ?
                <Row>
                  <NotificationList
                    notificationList={this.state.notifications}
                    handleActivityChange={this.handleActivityChange}
                    configure={this.configure}
                    configurations={configurations}
                    createSuccess={createSuccess}
                  />
                </Row>
              :
                <Row>
                  <NotificationConfigure
                    notification={this.state.notification}
                    activity={this.state.activity}
                    contentText={this.state.contentText}
                    notificationPanelStyle={this.state.notificationPanelStyle}
                    handleContentChange={this.handleContentChange}
                    setDefaultPanel={this.setDefaultPanel}
                    handleActivityChange={this.handleActivityChange}
                    handleNotificationStyleChange={this.handleNotificationStyleChange}
                    saveConfiguration = {this.saveConfiguration}
                    backConfiguration= { this.backConfiguration }
                  />
                </Row>
            }
        </div>
        {!this.state.notification &&
          <Row className="notification-button-row">
            <Col md={6}>
              <div className=" text-left">
                <Button bsStyle="primary" onClick={this.handleBackState}>
                  <Glyphicon glyph="chevron-left" />
                  Back
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <div className=" text-right">
               <Button bsStyle="primary" onClick={this.handleNextState}>
                 <Glyphicon glyph="chevron-right" />
                 Next
                </Button>
              </div>
            </Col>
          </Row>
        }
      </Grid>
    </div>);
  }
}

const mapStateToProps = state => ({
  configuration: state.getIn(['configuration', 'configuration']),
  configurations: state.getIn(['configuration', 'configurations']),
  campaign: state.getIn(['campaign', 'campaign']),
  notifications: state.getIn(['notification', 'notifications'])
});

const mapDispatchToProps = {
  fetchNotification,
  createConfiguration,
  fetchConfiguration,
  fetchCampaignConfiguration,
  updateConfiguration,
  clearConfiguration,
  createSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
