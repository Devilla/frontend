import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card } from './Card';
import NotificationDesign from './NotificationDesign';
import { NotificationDesignSetting } from './NotificationDesignSetting';
import './NotificationConfigure.scss';
// import PopupReview from './PopupReview';

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
  backConfiguration,
  showpopupfield,
  showpopup,
  popupName,
  // campaign
}) => {
  return (
    <div className="notification-configure col-md-12">
      <Row>
        <Col md={12}>
          {/*campaign.trackingId*/}
          <Card title={notification.notificationName}
            status={ <div className="notificationSwitch">
              <input
                className="tgl tgl-ios"
                id={notification.notificationName}
                type="checkbox"
                defaultChecked={notification.activity}
                onChange={(e) => e.target.checked !=notification.activity? handleActivityChange(!notification.activity, notification._id, notification.configurationId):null}
              />
              <label className="tgl-btn" htmlFor={notification.notificationName}></label>
            </div>
            }
            isDisabled={activity}
            content={
              <div className="notification-configure-content">
                <Row>
                  <Col md={7}>
                    <NotificationDesign
                      toggleMap={toggleMap}
                      contentText={contentText}
                      visitorText={visitorText}
                      notification={notification}
                      notificationPanelStyle={notificationPanelStyle}
                      popupName={popupName}
                    />
                  </Col>
                  <Col md={5}>

                    <NotificationDesignSetting
                      profile={profile}
                      showpopup={showpopup}
                      showpopupfield={showpopupfield}
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
                </Row>
              </div>
            }
          />
        </Col>
      </Row>
      <Row className="state-btn">

        <span className="btn btn-primary" onClick={backConfiguration}>
          Back
        </span>


        <span className="btn btn-primary" onClick={setDefaultPanel} >
          Set Default
        </span>


        <span className="btn btn-primary" onClick={saveConfiguration}>
          Save
        </span>


      </Row>
    </div>
  );
};

export default NotificationConfigure;
