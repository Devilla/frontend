import React from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import { Card } from './Card';
import NotificationDesign from './NotificationDesign';
import { NotificationDesignSetting } from './NotificationDesignSetting';
import Switch from 'react-flexible-switch';
import './NotificationConfigure.scss';

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
                    circleStyles={{ onColor: '#097fff', offColor: 'gray', diameter: 18 }}
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
