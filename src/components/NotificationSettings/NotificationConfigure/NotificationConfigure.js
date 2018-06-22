import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card } from './Card';
import NotificationDesign from './NotificationDesign';
import { NotificationDesignSetting } from './NotificationDesignSetting';
import Switch from 'react-flexible-switch';
import './NotificationConfigure.scss';

const NotificationConfigure = ({
  profile,
  toggleTextBox,
  toggleMap,
  notification,
  activity,
  contentText,
  visitorText,
  notificationUrl,
  setDefaultPanel,
  handleActivityChange,
  handleContentChange,
  notificationPanelStyle,
  handleNotificationStyleChange,
  handleClickableNotification,
  saveConfiguration,
  backConfiguration
}) => {
  return (
    <div className="notification-configure">
      <Row>
        <Col md={12}>
          <Card title={notification.notificationName}
            status={ <div className="notificationSwitch">
              <Switch
                circleStyles={{ onColor: '#097fff', offColor: 'gray', diameter: 18 }}
                switchStyles={{ width: 50 }}
                cssClass="alignsame"
                value={notification.activity}
                onChange={(e) => e != notification.activity ? handleActivityChange(e, notification._id, notification.configurationId) : null}
              />
            </div>
            }
            isDisabled={activity}
            content={
              <div className="notification-configure-content">
                <Col md={6}>
                  <NotificationDesign
                    toggleMap={toggleMap}
                    contentText={contentText}
                    visitorText={visitorText}
                    notification={notification}
                    notificationPanelStyle={notificationPanelStyle}
                  />
                </Col>
                <Col md={6}>
                  <NotificationDesignSetting
                    profile={profile}
                    toggleTextBox={toggleTextBox}
                    toggleMap={toggleMap}
                    contentText={contentText}
                    visitorText={visitorText}
                    notificationUrl={notificationUrl}
                    notification={notification}
                    notificationPanelStyle={notificationPanelStyle}
                    onConfigChange={handleNotificationStyleChange}
                    handleContentChange={handleContentChange}
                    handleClickableNotification={handleClickableNotification}
                  />
                </Col>
              </div>
            }
          />
        </Col>
      </Row>

      <div className="m-t-50 pull-right">
        <span className="btn btn-primary mr-3" onClick={backConfiguration}>
          Back
        </span>

        <span className="btn btn-primary mr-3" onClick={setDefaultPanel} >
          Set Default
        </span>

        <span className="btn btn-primary mr-3" onClick={saveConfiguration}>
          Save
        </span>
      </div>
    </div>
  );
};

export default NotificationConfigure;
