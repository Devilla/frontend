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
              <Row>
                <Col md={6}>
                  <Notification
                    contentText={contentText}
                    visitorText={visitorText}
                    notification={notification}
                    notificationPanelStyle={notificationPanelStyle}
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

                <Col md={6}>
                  <Setting
                    contentText={contentText}
                    visitorText={visitorText}
                    notification={notification}
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
};

export default NotificationConfigure;
