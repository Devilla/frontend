import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Switch from 'react-flexible-switch';
import NotificationView from './NotificationView';

const LeftView = ({
  hideNotification,
  loopNotification,
  delayNotification,
  closeNotification,
  handleStateChange,
  sampleDisplay,
  displayPosition,
  animation
}) => {
  return (<div className="pnl">
    <Row>
      <Col md={2}>
        <Switch circleStyles={{
          onColor: 'blue',
          offColor: 'gray',
          diameter: 18
        }} switchStyles={{
          width: 50
        }} cssClass="alignsame" value={hideNotification} onChange={(e) => handleStateChange('hideNotification', e)}/>
      </Col>
      <Col md={10}>
        <span className="mt-5">Hide notifications on mobile</span>
      </Col>
    </Row>
    <Row>
      <Col md={2}>
        <Switch circleStyles={{
          onColor: 'blue',
          offColor: 'gray',
          diameter: 18
        }} switchStyles={{
          width: 50
        }} cssClass="alignsame" value={loopNotification} onChange={(e) => handleStateChange('loopNotification', e)}/>
      </Col>
      <Col md={10}>
        <span className="mt-5">Loop notifications
        </span>
      </Col>
    </Row>
    <Row>
      <Col md={2}>
        <Switch circleStyles={{
          onColor: 'blue',
          offColor: 'gray',
          diameter: 18
        }} switchStyles={{
          width: 50
        }} cssClass="alignsame" value={delayNotification} onChange={(e) => handleStateChange('delayNotification', e)}/>
      </Col>
      <Col md={10}>
        <span className="mt-5">Randomize delay between notifications
        </span>
      </Col>
    </Row>
    <Row>
      <Col md={2}>
        <Switch circleStyles={{
          onColor: 'blue',
          offColor: 'gray',
          diameter: 18
        }} switchStyles={{
          width: 50
        }} cssClass="alignsame" value={closeNotification} onChange={(e) => handleStateChange('closeNotification', e)}/>
      </Col>
      <Col md={10}>
        <span className="mt-5">Allow users to close notifications
        </span>
      </Col>
    </Row>
    <Row>
      <NotificationView animation={animation} display={sampleDisplay} position={displayPosition}/>
    </Row>
  </div>);
};

export default LeftView;
