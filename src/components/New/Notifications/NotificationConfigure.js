import React, { Component } from 'react';
import { Row, Col, Button, Glyphicon } from 'react-bootstrap';
import { Card } from '../notification/template/common';
import { Notification } from '../notification/template/common/notification'
import { Setting } from '../notification/template/common/settings'

const NotificationConfigure = ({
    notification,
    activity,
    contentText,
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
              <Row>
                <Col md={6}>
                  <Notification
                    contentText={contentText}
                    notification={notification}
                    notificationPanelStyle={notificationPanelStyle}
                  />
                </Col>
                <Col md={6}>
                  <Setting
                    contentText={contentText}
                    notificationPanelStyle={notificationPanelStyle}
                    onConfigChange={handleNotificationStyleChange}
                    handleContentChange={handleContentChange}
                  />
                </Col>
              </Row>
            }
          />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className=" text-left">
            <Button bsStyle="primary" onClick={backConfiguration}>
              <Glyphicon glyph="chevron-left" />
              Back
            </Button>
          </div>
        </Col>
        <Col md={4}>
          <div className=" text-center">
           <Button bsStyle="primary" onClick={setDefaultPanel}>
             <Glyphicon glyph="align-justify" />
             Set Default
            </Button>
          </div>
        </Col>
        <Col md={4}>
          <div className=" text-right">
           <Button bsStyle="primary" onClick={saveConfiguration}>
             <Glyphicon glyph="save" />
             Save
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NotificationConfigure;
