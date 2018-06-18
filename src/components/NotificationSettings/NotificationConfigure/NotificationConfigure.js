import React from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import { Card } from './Card';
import NotificationDesign from './NotificationDesign';
import { NotificationDesignSetting } from './NotificationDesignSetting';
import Switch from 'react-flexible-switch';


const NotificationConfigure = ({
  notification,
  activity,
  contentText,
  visitorText,
  setDefaultPanel,
  handleActivityChange,
  handleContentChange,
  notificationPanelStyle,
  handleNotificationStyleChange,
  saveConfiguration,
  backConfiguration
}) => {
  return (
    <div className="notification-configure">
      <Row>
        <Col md={12}>
          <Card title="Recent User Activity"
            isDisabled={activity}
            content={
              <div className="notification-configure-content">
                <Col md={6}>
                  <NotificationDesign
                    contentText={contentText}
                    visitorText={visitorText}
                    notification={notification}
                    notificationPanelStyle={notificationPanelStyle}
                  />

                </Col>
                <div className="notificationSwitch ">
                  <Switch
                    circleStyles={{ onColor: 'blue', offColor: 'gray', diameter: 18 }}
                    switchStyles={{ width: 50 }}
                    cssClass="alignsame"
                    value={notification.activity}
                    onChange={(e) => e != notification.activity ? handleActivityChange(e, notification._id, notification.configurationId) : null}
                  />
                </div>
                <Col md={6}>
                  <NotificationDesignSetting
                    contentText={contentText}
                    visitorText={visitorText}
                    notification={notification}
                    notificationPanelStyle={notificationPanelStyle}
                    onConfigChange={handleNotificationStyleChange}
                    handleContentChange={handleContentChange}
                  />
                </Col>

                <div className="notificationSwitch">
                  <Switch
                    circleStyles={{ onColor: 'blue', offColor: 'gray', diameter: 18 }}
                    switchStyles={{ width: 50 }}
                    cssClass="alignsame"
                    value={notification.activity}
                    onChange={(e) => e != notification.activity ? handleActivityChange(e, notification._id, notification.configurationId) : null}
                  />
                </div>
              </div>
            }
          />
        </Col>
      </Row>
<<<<<<< HEAD:src/components/NotificationSettings/NotificationConfigure/NotificationConfigure.js
=======

>>>>>>> 7203155c6ce47a88fe7dc93cfae105124320f434:src/components/NotificationSettings/NotificationConfigure/NotificationConfigure.js
      <div className="m-t-50 pull-right">
        <span className="btn btn-info mr-3" onClick={backConfiguration}>
          <Glyphicon glyph="chevron-left" />
          Back
        </span>

        <span className="btn btn-info mr-3" >
          <Glyphicon glyph="align-justify" onClick={setDefaultPanel} />
          Set Default
        </span>

        <span className="btn btn-info mr-3" onClick={saveConfiguration}>
          <Glyphicon glyph="save" />
          Save
        </span>
      </div>
    </div>
  );
};

export default NotificationConfigure;
